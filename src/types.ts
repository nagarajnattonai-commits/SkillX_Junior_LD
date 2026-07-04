/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  parentName: string;
  mobileNumber: string;
  emailAddress: string;
  childName: string;
  childAge: number;
  schoolName: string;
  className: string;
  city: string;
  laptopAvailable: 'Yes' | 'No';
  createdAt: string;
  status: 'New' | 'Contacted' | 'Demo Booked' | 'Joined' | 'Not Interested';
  notes?: string;
  ghlSyncStatus?: 'Pending' | 'Synced' | 'Failed' | 'Not Configured';
  ghlSyncError?: string;
}

export interface CurriculumWeek {
  week: string;
  title: string;
  topics: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childNameAge: string;
  location: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatCard {
  number: string;
  title: string;
  description: string;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
}
