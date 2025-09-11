import { db } from '@/lib/firebase-admin'
import { Attendance } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const attendanceRef = db.collection('el-portal-attendance')
        const snapshot = await attendanceRef.get()
        
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
        console.error('Error fetching attendance:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
