import { db } from '@/lib/firebase-admin'
import { AuthUser } from '@/types'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            )
        }

        // Get user from Firestore
        const usersRef = db.collection('el-portal')
        const snapshot = await usersRef.where('email', '==', email).get()

        if (snapshot.empty) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            )
        }

        const userDoc = snapshot.docs[0]
        const userData = userDoc.data()

        // Verify password
        const isValidPassword = await bcrypt.compare(password, userData.password)
        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            )
        }

        // Create JWT token
        const token = jwt.sign(
            { 
                userId: userDoc.id,
                email: userData.email,
                isAdmin: userData.isAdmin,
                role: userData.role
            },
            process.env.NEXTAUTH_SECRET!,
            { expiresIn: '7d' }
        )

        // Return user data (without password)
        const user: AuthUser = {
            id: userDoc.id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            myId: userData.myId,
            organization: userData.organization,
            role: userData.role,
            isAdmin: userData.isAdmin,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
        }

        return NextResponse.json({
            success: true,
            token,
            user
        })

    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
