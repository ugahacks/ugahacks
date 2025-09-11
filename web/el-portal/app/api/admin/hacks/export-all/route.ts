import { db } from '@/lib/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') || 'all'

        if (type === 'all' || type === 'attendance') {
            // Export all attendance data
            const attendanceSnapshot = await db.collection('attendance').get()
            const attendanceData = attendanceSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                attendedAt: new Date(doc.data().attendedAt).toISOString(),
                createdAt: new Date(doc.data().createdAt).toISOString()
            }))

            const csv = attendanceData.map(record => ({
                'Event Name': record.eventName,
                'Student Name': record.userName,
                'Email': record.userEmail,
                'MyID': record.userMyId,
                'Organization': record.userOrganization || 'Unknown',
                'Hours': record.hours,
                'Attended At': new Date(record.attendedAt).toLocaleString(),
                'Notes': record.notes || ''
            })).join('\n')

            const headers = 'Event Name,Student Name,Email,MyID,Organization,Hours,Attended At,Notes\n'

            return new NextResponse(headers + csv, {
                headers: {
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="all-attendance-export.csv"'
                }
            })
        } else if (type === 'reflections') {
            // Export all reflections data
            const reflectionsSnapshot = await db.collection('reflections').get()
            const reflectionsData = reflectionsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                submittedAt: new Date(doc.data().submittedAt).toISOString(),
                createdAt: new Date(doc.data().createdAt).toISOString()
            }))

            const csv = reflectionsData.map(record => ({
                'Event Name': record.eventName,
                'Student Name': record.userName || 'Unknown',
                'Email': record.userEmail || 'Unknown',
                'MyID': record.userMyId || 'Unknown',
                'Organization': record.userOrganization || 'Unknown',
                'Word Count': record.wordCount,
                'Status': record.status,
                'Submitted At': new Date(record.submittedAt).toLocaleString(),
                'Content': record.content
            })).join('\n')

            const headers = 'Event Name,Student Name,Email,MyID,Organization,Word Count,Status,Submitted At,Content\n'

            return new NextResponse(headers + csv, {
                headers: {
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="all-reflections-export.csv"'
                }
            })
        } else if (type === 'users') {
            // Export all users data
            const usersSnapshot = await db.collection('el-portal').get()
            const usersData = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: new Date(doc.data().createdAt).toISOString(),
                updatedAt: new Date(doc.data().updatedAt).toISOString()
            }))

            const csv = usersData.map(record => ({
                'First Name': record.firstName,
                'Last Name': record.lastName,
                'Email': record.email,
                'MyID': record.myId,
                'Organization': record.organization,
                'Role': record.role,
                'Is Admin': record.isAdmin,
                'Created At': new Date(record.createdAt).toLocaleString()
            })).join('\n')

            const headers = 'First Name,Last Name,Email,MyID,Organization,Role,Is Admin,Created At\n'

            return new NextResponse(headers + csv, {
                headers: {
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="all-users-export.csv"'
                }
            })
        }

        return NextResponse.json(
            { error: 'Invalid export type. Use "all", "attendance", "reflections", or "users"' },
            { status: 400 }
        )

    } catch (error) {
        console.error('Error exporting data:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
