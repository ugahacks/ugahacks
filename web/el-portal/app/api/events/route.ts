import { db } from '@/lib/firebase-admin'
import { Event } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const eventsRef = db.collection('el-portal-events')
        const snapshot = await eventsRef.get()
        
        const events: Event[] = []
        snapshot.forEach((doc) => {
            events.push({
                id: doc.id,
                ...doc.data()
            } as Event)
        })

        return NextResponse.json({
            success: true,
            events
        })

    } catch (error) {
        console.error('Error fetching events:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
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
            date: new Date(date).getTime(), // Convert to timestamp
            hours: parseInt(hours),
            eventType: eventType || 'General',
            location: location || '',
            time: time || '',
            isELCreditEligible: isELCreditEligible || false,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        const docRef = await db.collection('el-portal-events').add(eventData)

        return NextResponse.json({
            success: true,
            event: {
                id: docRef.id,
                ...eventData
            }
        })

    } catch (error) {
        console.error('Error creating event:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}