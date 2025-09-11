import { db } from '@/lib/firebase-admin'
import { Reflection } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const reflectionsRef = db.collection('el-portal-reflections')
        const snapshot = await reflectionsRef.get()
        
        const reflections: Reflection[] = []
        snapshot.forEach((doc) => {
            reflections.push({
                id: doc.id,
                ...doc.data()
            } as Reflection)
        })

        return NextResponse.json({
            success: true,
            reflections
        })

    } catch (error) {
        console.error('Error fetching reflections:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
