import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Ensure data directory exists
const DATA_DIR = path.join(process.cwd(), "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const GHL_CONFIG_FILE = path.join(DATA_DIR, "ghl_config.json");

// Helper: Read Leads
function readLeads(): any[] {
  if (!fs.existsSync(LEADS_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading leads file:", err);
    return [];
  }
}

// Helper: Write Leads
function writeLeads(leads: any[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing leads file:", err);
  }
}

// Helper: Read GHL Config
function readGHLConfig(): { ghlWebhookUrl: string } {
  if (!fs.existsSync(GHL_CONFIG_FILE)) {
    return { ghlWebhookUrl: "" };
  }
  try {
    const data = fs.readFileSync(GHL_CONFIG_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading GHL config:", err);
    return { ghlWebhookUrl: "" };
  }
}

// Helper: Write GHL Config
function writeGHLConfig(config: { ghlWebhookUrl: string }) {
  try {
    fs.writeFileSync(GHL_CONFIG_FILE, JSON.stringify(config, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing GHL config:", err);
  }
}

// Helper: Sync lead to GHL Webhook
async function syncToGHL(lead: any): Promise<{ success: boolean; error?: string }> {
  const config = readGHLConfig();
  const webhookUrl = (process.env.GHL_WEBHOOK_URL || config.ghlWebhookUrl || "").trim();

  if (!webhookUrl) {
    return { success: false, error: "GHL Webhook URL is not configured. Please set GHL_WEBHOOK_URL in environment or Admin Dashboard." };
  }

  // Validate URL format before fetching to prevent Node runtime TypeError
  try {
    const parsedUrl = new URL(webhookUrl);
    if (!parsedUrl.protocol.startsWith("http")) {
      return { success: false, error: `Invalid Webhook URL protocol ("${parsedUrl.protocol}"). Must use http:// or https://` };
    }
  } catch (e) {
    return { success: false, error: `Invalid Webhook URL format: "${webhookUrl}". Please enter a valid HTTP/HTTPS URL.` };
  }

  // Parse Parent Name for CRM compatibility
  const nameParts = (lead.parentName || "").trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // Structure payload elegantly for GHL
  const payload = {
    id: lead.id,
    parentName: lead.parentName,
    firstName: firstName,
    lastName: lastName,
    mobileNumber: lead.mobileNumber,
    phone: lead.mobileNumber, // GHL friendly alias
    emailAddress: lead.emailAddress,
    email: lead.emailAddress, // GHL friendly alias
    childName: lead.childName,
    childAge: lead.childAge,
    schoolName: lead.schoolName,
    className: lead.className,
    city: lead.city,
    laptopAvailable: lead.laptopAvailable,
    createdAt: lead.createdAt,
    status: lead.status,
    notes: lead.notes || "",
    source: "NATTON SkillX Junior Landing Page"
  };

  try {
    console.log(`Sending lead ${lead.id} to GHL Webhook...`);
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`Lead ${lead.id} synced successfully to GHL!`);
      return { success: true };
    } else {
      const text = await response.text();
      console.error(`GHL Webhook returned status ${response.status}:`, text);
      return { success: false, error: `GHL returned status ${response.status}: ${text.slice(0, 100)}` };
    }
  } catch (err: any) {
    console.error("Error sending request to GHL Webhook:", err);
    return { success: false, error: err.message || "Network request failed" };
  }
}

// --- API ENDPOINTS ---

// Get GHL Configuration Status
app.get("/api/ghl-config", (req, res) => {
  const config = readGHLConfig();
  const envUrl = process.env.GHL_WEBHOOK_URL || "";
  res.json({
    configured: !!(envUrl || config.ghlWebhookUrl),
    ghlWebhookUrl: config.ghlWebhookUrl || "",
    envConfigured: !!envUrl,
  });
});

// Update GHL Configuration
app.post("/api/ghl-config", (req, res) => {
  const { ghlWebhookUrl } = req.body;
  if (typeof ghlWebhookUrl !== "string") {
    return res.status(400).json({ error: "Invalid Webhook URL format" });
  }
  
  writeGHLConfig({ ghlWebhookUrl: ghlWebhookUrl.trim() });
  res.json({ success: true, message: "GoHighLevel integration configuration saved successfully." });
});

// Get Leads
app.get("/api/leads", (req, res) => {
  res.json(readLeads());
});

// Create Lead
app.post("/api/leads", async (req, res) => {
  const leadData = req.body;

  if (!leadData.parentName || !leadData.mobileNumber || !leadData.emailAddress) {
    return res.status(400).json({ error: "Missing required contact details" });
  }

  const leads = readLeads();
  
  // Format Lead
  const newLead = {
    ...leadData,
    id: leadData.id || `lead-${Date.now()}`,
    createdAt: leadData.createdAt || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    status: leadData.status || 'New',
    ghlSyncStatus: 'Pending',
  };

  // Sync with GHL Webhook
  const syncResult = await syncToGHL(newLead);
  if (syncResult.success) {
    newLead.ghlSyncStatus = "Synced";
    newLead.ghlSyncError = undefined;
  } else {
    // Check if it failed because it wasn't configured
    const isConfigured = !!(process.env.GHL_WEBHOOK_URL || readGHLConfig().ghlWebhookUrl);
    newLead.ghlSyncStatus = isConfigured ? "Failed" : "Not Configured";
    newLead.ghlSyncError = syncResult.error;
  }

  leads.unshift(newLead);
  writeLeads(leads);

  res.status(201).json(newLead);
});

// Update Lead Status/Notes
app.put("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const leads = readLeads();
  const index = leads.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Lead not found" });
  }

  leads[index] = {
    ...leads[index],
    ...updates,
  };

  writeLeads(leads);
  res.json(leads[index]);
});

// Delete Lead
app.delete("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  let leads = readLeads();
  
  if (!leads.some(l => l.id === id)) {
    return res.status(404).json({ error: "Lead not found" });
  }

  leads = leads.filter(l => l.id !== id);
  writeLeads(leads);
  res.json({ success: true, message: "Lead removed from system." });
});

// Manual Lead Sync Retry
app.post("/api/leads/sync/:id", async (req, res) => {
  const { id } = req.params;
  const leads = readLeads();
  const index = leads.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Lead not found" });
  }

  const lead = leads[index];
  const syncResult = await syncToGHL(lead);

  if (syncResult.success) {
    lead.ghlSyncStatus = "Synced";
    lead.ghlSyncError = undefined;
  } else {
    lead.ghlSyncStatus = "Failed";
    lead.ghlSyncError = syncResult.error;
  }

  leads[index] = lead;
  writeLeads(leads);

  res.json(lead);
});


// --- VITE MIDDLEWARE SETUP ---

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
