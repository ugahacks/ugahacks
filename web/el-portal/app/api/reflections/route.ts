import { db } from '@/lib/firebase-admin'
import { Reflection } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { eventId, userId, content, wordCount } = await request.json()

        if (!eventId || !userId || !content || !wordCount) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Check if reflection already exists for this user and event
        const existingReflection = await db.collection('el-portal-reflections')
            .where('userId', '==', userId)
            .where('eventId', '==', eventId)
            .get()

        if (!existingReflection.empty) {
            return NextResponse.json(
                { error: 'Reflection already submitted for this event' },
                { status: 400 }
            )
        }

        // Get event details
        const eventDoc = await db.collection('el-portal-events').doc(eventId).get()
        if (!eventDoc.exists) {
            return NextResponse.json(
                { error: 'Event not found' },
                { status: 404 }
            )
        }

        const eventData = eventDoc.data()
        const eventName = eventData?.name || 'Unknown Event'

        // Check final due date from system settings
        const settingsDoc = await db.collection('el-portal-settings').doc('final-due-date').get()
        if (settingsDoc.exists) {
            const finalDueDate = settingsDoc.data()?.value
            if (finalDueDate && Date.now() > finalDueDate) {
                return NextResponse.json(
                    { error: 'Reflection submission period has ended' },
                    { status: 400 }
                )
            }
        }

        const reflectionData = {
            eventId,
            eventName,
            userId,
            content,
            wordCount,
            status: 'completed',
            submittedAt: Date.now(),
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        const docRef = await db.collection('el-portal-reflections').add(reflectionData)

        return NextResponse.json({
            success: true,
            reflection: {
                id: docRef.id,
                ...reflectionData
            }
        })

    } catch (error) {
        console.error('Error creating reflection:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}