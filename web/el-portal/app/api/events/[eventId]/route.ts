import { db } from '@/lib/firebase-admin'
import { Event } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { eventId: string } }
) {
    try {
        const eventDoc = await db.collection('el-portal-events').doc(params.eventId).get()
        
        if (!eventDoc.exists) {
            return NextResponse.json(
                { error: 'Event not found' },
                { status: 404 }
            )
        }

        const event: Event = {
            id: eventDoc.id,
            ...eventDoc.data()
        } as Event

        return NextResponse.json({
            success: true,
            event
        })

    } catch (error) {
        console.error('Error fetching event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { eventId: string } }
) {
    try {
        const { name, date, hours, eventType, location, time, isELCreditEligible } = await request.json()

        if (!name || !date || !hours) {
            return NextResponse.json(
                { error: 'Name, date, and hours are required' },
                { status: 400 }
            )
        }

        const eventData = {
            name,
            date: new Date(date).getTime(),
            hours: parseInt(hours),
            eventType: eventType || 'General',
            location: location || '',
            time: time || '',
            isELCreditEligible: isELCreditEligible || false,
            updatedAt: Date.now()
        }

        await db.collection('el-portal-events').doc(params.eventId).update(eventData)

        return NextResponse.json({
            success: true,
            event: {
                id: params.eventId,
                ...eventData
            }
        })

    } catch (error) {
        console.error('Error updating event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { eventId: string } }
) {
    try {
        const eventDoc = await db.collection('el-portal-events').doc(params.eventId).get()
        
        if (!eventDoc.exists) {
            return NextResponse.json(
                { error: 'Event not found' },
                { status: 404 }
            )
        }

        // Delete the event
        await db.collection('el-portal-events').doc(params.eventId).delete()

        // Also delete related attendance and reflection records
        const attendanceSnapshot = await db.collection('el-portal-attendance')
            .where('eventId', '==', params.eventId)
            .get()
        
        const batch = db.batch()
        attendanceSnapshot.docs.forEach(doc => {
            batch.delete(doc.ref)
        })

        const reflectionsSnapshot = await db.collection('el-portal-reflections')
            .where('eventId', '==', params.eventId)
            .get()
        
        reflectionsSnapshot.docs.forEach(doc => {
            batch.delete(doc.ref)
        })

        await batch.commit()

        return NextResponse.json({
            success: true,
            message: 'Event and related records deleted successfully'
        })

    } catch (error) {
        console.error('Error deleting event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
