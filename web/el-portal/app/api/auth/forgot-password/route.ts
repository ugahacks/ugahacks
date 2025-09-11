import { db } from '@/lib/firebase-admin'
import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Check if user exists
        const usersRef = db.collection('el-portal')
        const snapshot = await usersRef.where('email', '==', email).get()

        if (snapshot.empty) {
            // Don't reveal if email exists or not for security
            return NextResponse.json({
                success: true,
                message: 'If an account with that email exists, password reset instructions have been sent.'
            })
        }

        const userDoc = snapshot.docs[0]
        const userId = userDoc.id

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex')
        const resetTokenExpiry = Date.now() + (60 * 60 * 1000) // 1 hour

        // Store reset token in user document
        await userDoc.ref.update({
            resetToken,
            resetTokenExpiry
        })

        // In a real application, you would send an email here
        // For MVP, we'll just return success
        console.log(`Password reset token for ${email}: ${resetToken}`)
        console.log(`Reset link: http://localhost:3000/auth/reset-password?token=${resetToken}`)

        return NextResponse.json({
            success: true,
            message: 'Password reset instructions have been sent to your email.',
            // For development only - remove in production
            resetToken: process.env.NODE_ENV === 'development' ? resetToken : undefined
        })

    } catch (error) {
        console.error('Forgot password error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
