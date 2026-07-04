/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CurriculumWeek, Testimonial, FAQItem, StatCard, ProblemSolution } from './types';

export const statisticsCards: StatCard[] = [
  {
    number: "24+",
    title: "Practical Sessions",
    description: "Highly interactive, hands-on lessons with real-world building."
  },
  {
    number: "30+",
    title: "AI Tools Covered",
    description: "From ChatGPT and Gemini to Canva AI, Suno, and Coding platforms."
  },
  {
    number: "100%",
    title: "Hands-on Projects",
    description: "Every student builds their own portfolio of games, apps, and art."
  },
  {
    number: "12",
    title: "Weeks Program",
    description: "Structured progressive roadmap from absolute beginner to creator."
  }
];

export const problemsAndSolutions: ProblemSolution[] = [
  {
    problem: "Children spend 4-6 hours a day passively consuming screen time on YouTube and games.",
    solution: "Turn screen time productive! Empower them to become creators who build AI apps and design games."
  },
  {
    problem: "Traditional school curriculums rarely teach cutting-edge, practical artificial intelligence.",
    solution: "Learn future-proof skills like Prompt Engineering, Automation, and Canva AI before college."
  },
  {
    problem: "AI is rapidly automating jobs, leaving parents worried if their kids' skills will remain relevant.",
    solution: "Prepare them for an AI-first economy where knowing how to prompt and build is the ultimate superpower."
  },
  {
    problem: "Standard online courses are boring pre-recorded videos with zero interaction.",
    solution: "100% Live weekend classes in small batches with real-time feedback and engaging expert mentors."
  }
];

export const curriculumWeeks: CurriculumWeek[] = [
  {
    week: "Week 1",
    title: "Introduction to AI & Safety",
    topics: ["What is Artificial Intelligence?", "How neural networks work in simple terms", "Real-world applications of AI today", "AI Ethics & Safety: Using AI responsibly at school"],
    description: "Demystify AI. Understand what AI is, how it processes information, and learn the rules of safe and helpful internet and AI usage."
  },
  {
    week: "Week 2",
    title: "Prompt Engineering Basics",
    topics: ["What is a prompt? The Anatomy of a Perfect Prompt", "Persona, Context, and Instruction techniques", "Unlocking AI's logical thinking", "Creative prompt games and logic riddles"],
    description: "Learn how to 'talk' to AI. Transform your child's communication and analytical thinking by teaching them how to write high-quality prompts."
  },
  {
    week: "Week 3",
    title: "AI Assistants Explorer",
    topics: ["Deep dive into Google Gemini & ChatGPT", "Researching complex school topics with Perplexity", "Creative collaborative writing with Claude", "Using AI as a personalized 24/7 study tutor"],
    description: "Master the big four LLMs. Learn to research any academic topic in seconds, summarize long materials, and write creative essays ethically."
  },
  {
    week: "Week 4",
    title: "Creative AI & Poster Design",
    topics: ["Introduction to Canva AI visual suite", "Magic Media: Text-to-Image & Text-to-Video", "Designing custom academic posters & presentations", "Editing photos with AI Magic Eraser & Expand"],
    description: "Boost digital design skills. Your child will express their creativity by generating stunning graphics, visual assets, and school project banners."
  },
  {
    week: "Week 5",
    title: "Logic Building & Coding Basics",
    topics: ["Computational thinking & algorithmic loops", "Coding foundations with Google Colab (Python)", "Block coding logic using Scratch", "Developing simple algorithms and text-based games"],
    description: "Bridge AI and traditional coding. Develop structural, logical problem-solving by understanding code structure, loops, and conditional statements."
  },
  {
    week: "Week 6",
    title: "AI Agents & Automation Workflows",
    topics: ["What are AI agents and automated workflows?", "Automating simple daily tasks and study routines", "Creating customizable study planners and checklists", "Introduction to productivity boosters"],
    description: "Unlock super-productivity. Kids learn to organize their homework schedules, build automation routines, and understand the power of automated helpers."
  },
  {
    week: "Week 7",
    title: "Machine Learning Playground",
    topics: ["Training models with Google Teachable Machine", "Creating image, pose, and voice recognition models", "How computers classify data and make predictions", "Hands-on model training in real-time"],
    description: "Train a real AI! Kids use their webcams to train classification models, experiencing firsthand how developers build facial recognition and voice controls."
  },
  {
    week: "Week 8",
    title: "Capstone Portfolio & Certification",
    topics: ["Defining the final custom AI project", "Combining Prompting, Art, and Code into a single app/site", "Designing the digital project presentation", "Virtual graduation, project showcase, and certificate award"],
    description: "Show off the achievements. Every student constructs a portfolio-grade project (like an AI chatbot, animated comic, or mini-app) and graduates with a verified certificate."
  }
];

export const aiToolsList: string[] = [
  "ChatGPT", "Google Gemini", "Claude", "Perplexity",
  "Canva AI", "Python", "Google Colab", "Scratch",
  "NotebookLM", "Gamma", "Grammarly", "QuillBot",
  "Miro", "Teachable Machine", "ElevenLabs", "HeyGen",
  "Power BI", "Lovable", "Suno AI", "Kling AI"
];

export const learningOutcomes: string[] = [
  "Understand AI Fundamentals & terminology",
  "Write highly effective advanced prompts",
  "Generate custom high-resolution AI artwork",
  "Build beautiful modern AI presentations",
  "Design professional layouts with Canva AI",
  "Understand fundamental Python coding syntax",
  "Build and train custom machine learning models",
  "Create a personal web portfolio of school projects",
  "Develop structural critical thinking & analysis",
  "Understand AI ethics, bias, and safe usage guidelines",
  "Accelerate creativity in writing, visuals, and logic",
  "Earn a prestigious Natton SkillX Junior graduation certificate"
];

export const whoCanJoinCards = [
  {
    title: "Age Group",
    value: "6 to 17 Years",
    description: "Perfect for kids in grades 1 to 12. Students are grouped into separate age-appropriate batches.",
    icon: "GraduationCap"
  },
  {
    title: "Skill Level",
    value: "Zero Experience",
    description: "No prior coding, computer science, or technical experience required. We start completely from scratch.",
    icon: "Sparkles"
  },
  {
    title: "Class Mode",
    value: "Live Online Batches",
    description: "100% interactive face-to-face sessions on Zoom/Google Meet. Small groups for high individual attention.",
    icon: "Tv"
  },
  {
    title: "Requirement",
    value: "Laptop Mandatory",
    description: "Students need a working Windows, Mac, or Chromebook laptop with a webcam and high-speed internet.",
    icon: "Laptop"
  }
];

export const programDetailsList = [
  { label: "Duration", value: "12 Weeks (3 Months)" },
  { label: "Schedule", value: "Saturday & Sunday (Weekend Only)" },
  { label: "Session Length", value: "1 Hour per Session" },
  { label: "Learning Style", value: "Live Interactive (No Recorded Slabs)" },
  { label: "Investment", value: "₹1,999 / Month (Special Launch Price)" },
  { label: "Credentials", value: "Verified Certificate & Student Portfolio" }
];

export const comparisonFeatures = [
  {
    feature: "Live Interactive Learning",
    natton: "100% interactive sessions with live questions",
    others: "Pre-recorded standard videos or massive non-interactive streams"
  },
  {
    feature: "Hands-on Practical Projects",
    natton: "Kids build 10+ real-world portfolio projects",
    others: "Mostly theoretical slides with dry multiple-choice quizzes"
  },
  {
    feature: "Modern AI Tools Covered",
    natton: "30+ industry-grade tools (Gemini, Claude, Canva AI, Suno)",
    others: "Limited to basic block puzzles or outdated software"
  },
  {
    feature: "Personalized Portfolio Building",
    natton: "Personal digital portfolio hosted online for schools/colleges",
    others: "No portfolio, only standard templates"
  },
  {
    feature: "Small Interactive Batches",
    natton: "Strict cap on batch size for maximum mentor attention",
    others: "50-100+ students in a single crowded online call"
  },
  {
    feature: "Flexible Weekend Schedule",
    natton: "Only Saturdays & Sundays - Zero weekday school pressure",
    others: "Weekday evening slots that clash with homework and sports"
  },
  {
    feature: "Affordable Pricing structure",
    natton: "Just ₹1,999 per month - No hefty lock-ins",
    others: "Hefty upfront fees ranging from ₹30,000 to ₹1,00,000"
  },
  {
    feature: "Future Career Readiness",
    natton: "Skills focus: Prompts, Automation, ML, AI Art, Logic",
    others: "Generic typing or rote-memorization logic"
  }
];

export const faqQuestions: FAQItem[] = [
  {
    question: "Does my child need prior coding or computer knowledge?",
    answer: "No, absolutely not! Our curriculum is designed from the ground up for absolute beginners. We introduce concepts step-by-step using interactive, fun visuals before moving on to visual logic and basic coding syntaxes."
  },
  {
    question: "Is a laptop or desktop computer compulsory?",
    answer: "Yes, a computer (Windows laptop/desktop, Macbook, or Chromebook) is mandatory for this course. Mobile phones or tablets are not suitable because kids will actively write prompts, code, design graphic layouts, and train AI models using multiple tabs."
  },
  {
    question: "What are the timings and days for the classes?",
    answer: "Classes are held on weekends only (Saturdays & Sundays) to ensure zero academic stress. Sessions are 1 hour long. We have multiple morning and evening slots available. Once you book a demo, our academic advisor will help you choose a slot that fits your schedule perfectly."
  },
  {
    question: "Will my child get a certificate of completion?",
    answer: "Yes, indeed! Upon completing all 12 weeks of curriculum and presenting their Capstone Project, students are awarded a prestigious, shareable Certificate of Achievement from Natton SkillX Junior."
  },
  {
    question: "How do the classes take place?",
    answer: "Timely online classes are conducted live on Zoom or Google Meet. They are fully interactive, meaning students can raise hands, unmute to ask questions, share their screens with mentors, and collaborate with classmates in real time."
  },
  {
    question: "What is the typical batch size?",
    answer: "We strongly believe in quality over quantity. Our batches are kept small (typically under 10 students per batch) to ensure that every single child receives personalized mentoring, gets their doubts resolved instantly, and works closely with the instructor."
  },
  {
    question: "What happens if my child misses a live weekend class?",
    answer: "No worries at all! Every single session is securely recorded, and the recorded video along with detailed class notes and homework guidelines are uploaded to the student portal within 2 hours of class completion."
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Meera Deshmukh",
    childNameAge: "Mother of Advait (11 Years)",
    location: "Bengaluru, India",
    quote: "Advait was spending hours playing mobile games. Since joining Natton SkillX Junior, he has started making his own AI-generated comic books and coding simple scripts! The transition from consumer to creator is real. High recommendations to all parents!",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5
  },
  {
    id: "test-2",
    parentName: "Rajesh K. Mehta",
    childNameAge: "Father of Riya (14 Years)",
    location: "Mumbai, India",
    quote: "With AI taking over, I wanted Riya to learn practical skills early. The Prompt Engineering and Canva AI classes are fantastic. She designed an entire presentation for her school project using generative AI tools and got an A+. Unbelievable value at ₹1999/month!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5
  },
  {
    id: "test-3",
    parentName: "Anjali Nair",
    childNameAge: "Mother of Kabir (8 Years) & Kavya (12 Years)",
    location: "Hyderabad, India",
    quote: "Both my kids look forward to Saturdays now! The instructors are extremely patient and make complex AI topics look like child's play. They trained a Google Teachable Machine model to recognize our pet dog! Highly practical and incredibly fun.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5
  }
];
