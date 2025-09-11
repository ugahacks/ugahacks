import { db } from '@/lib/firebase-admin'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, email, myId, organization, password } = await request.json()

        // Validate required fields
        if (!firstName || !lastName || !email || !myId || !organization || !password) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Validate UGA email
        if (!email.endsWith('@uga.edu')) {
            return NextResponse.json(
                { error: 'Please use your UGA email address' },
                { status: 400 }
            )
        }

        // Check if user already exists
        const usersRef = db.collection('el-portal')
        const emailSnapshot = await usersRef.where('email', '==', email).get()
        const myIdSnapshot = await usersRef.where('myId', '==', myId).get()

        if (!emailSnapshot.empty) {
            return NextResponse.json(
                { error: 'An account with this email already exists' },
                { status: 400 }
            )
        }

        if (!myIdSnapshot.empty) {
            return NextResponse.json(
                { error: 'An account with this MyID already exists' },
                { status: 400 }
            )
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create user document
        const userData = {
            firstName,
            lastName,
            email,
            myId,
            organization,
            password: hashedPassword,
            role: 'student',
            isAdmin: false,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        const docRef = await usersRef.add(userData)

        return NextResponse.json({
            success: true,
            message: 'Account created successfully',
            userId: docRef.id
        })

    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
