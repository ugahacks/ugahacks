export type UserRole = 'student' | 'group_admin' | 'hacks_admin'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  myId: string
  organization: 'ACM' | 'ACMW' | 'Kappa Theta Pi' | 'DevDogs' | 'Society for Cybersecurity' | 'Other'
  role: UserRole
  isAdmin: boolean
  groupId?: string
  createdAt: number
  updatedAt: number
}

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  myId: string
  organization: string
  role: UserRole
  isAdmin: boolean
  createdAt: number
  updatedAt: number
}

export interface Group {
  id: string
  name: string
  description?: string
  adminIds: string[]
  createdAt: number
  updatedAt: number
}

export interface Event {
  id: string
  groupId: string
  name: string
  description?: string
  date: number
  hourValue: number
  wordCountRequirement: number
  dueDate: number
  eventType: 'club_meeting' | 'additional_involvement' | 'hackathon' | 'other'
  location?: string
  time?: string
  isELCreditEligible: boolean
  createdAt: number
  updatedAt: number
}

export interface Attendance {
  id: string
  userId: string
  eventId: string
  groupId: string
  timestamp: number
  notes?: string
  overriddenBy?: string
  overrideNotes?: string
  overrideReason?: 'late_submission' | 'technical_issue' | 'other'
  createdAt: number
  updatedAt: number
}

export interface Reflection {
  id: string
  userId: string
  eventId: string
  groupId: string
  content: string
  wordCount: number
  submittedAt: number
  overriddenBy?: string
  overrideNotes?: string
  overrideReason?: 'late_submission' | 'technical_issue' | 'other'
  createdAt: number
  updatedAt: number
}

export interface SystemSettings {
  id: string
  finalDueDate: number
  defaultWordCount: number
  createdAt: number
  updatedAt: number
}

export interface UserELTier {
  id: string
  userId: string
  tierLevel: 'tier1' | 'tier2' | 'tier3'
  tierName: string
  requiredClubHours: number
  requiredAdditionalHours: number
  totalRequiredHours: number
  assignedBy: string
  notes?: string
  createdAt: number
  updatedAt: number
}

export interface ELTierRequirement {
  tierLevel: 'tier1' | 'tier2' | 'tier3'
  tierName: string
  description: string
  eligibility: string
  projectScope: string[]
  requiredClubHours: number
  requiredAdditionalHours: number
  totalRequiredHours: number
  documentationRequirements: string
  aiUsageGuidelines: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  password: string
  myId: string
  organization: 'ACM' | 'ACMW' | 'Kappa Theta Pi' | 'DevDogs' | 'Society for Cybersecurity' | 'Other'
}

export interface LoginForm {
  email: string
  password: string
}

export interface SystemStats {
  totalUsers: number
  totalGroups: number
  totalEvents: number
  totalAttendance: number
  totalReflections: number
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
