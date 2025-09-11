import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserRole } from '@/types'

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'fallback-secret'

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  myId: string
  organization: 'ACM' | 'ACMW' | 'Kappa Theta Pi' | 'DevDogs' | 'Society for Cybersecurity' | 'Other'
  role: UserRole
  isAdmin: boolean
  groupId?: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      myId: user.myId,
      organization: user.organization,
      role: user.role,
      isAdmin: user.isAdmin,
      groupId: user.groupId,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return {
      id: decoded.id,
      email: decoded.email,
      firstName: decoded.firstName || '',
      lastName: decoded.lastName || '',
      myId: decoded.myId || '',
      organization: decoded.organization || 'Other',
      role: decoded.role,
      isAdmin: decoded.isAdmin || false,
      groupId: decoded.groupId,
    }
  } catch (error) {
    return null
  }
}

export function isValidUGAEmail(email: string): boolean {
  return email.endsWith('@uga.edu')
}

export function isValidMyID(myId: string): boolean {
  return /^\d{5}$/.test(myId)
}
