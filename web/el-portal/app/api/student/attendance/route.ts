import { db } from '@/lib/firebase-admin'
import { Attendance } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const userId = searchParams.get('userId')

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            )
        }

        const attendanceRef = db.collection('el-portal-attendance')
        const snapshot = await attendanceRef.where('userId', '==', userId).get()
        
        const attendance: Attendance[] = []
        snapshot.forEach((doc) => {
            attendance.push({
                id: doc.id,
                ...doc.data()
            } as Attendance)
        })

        return NextResponse.json({
            success: true,
            attendance
        })

    } catch (error) {
        console.error('Error fetching student attendance:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
