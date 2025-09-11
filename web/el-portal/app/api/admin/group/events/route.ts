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