'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Attendance, AuthUser, Reflection, UserELTier } from '@/types'
import { Calendar, Download, FileText, LogOut, TrendingUp, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function StudentPortal() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [attendance, setAttendance] = useState<Attendance[]>([])
    const [reflections, setReflections] = useState<Reflection[]>([])
    const [elTier, setElTier] = useState<UserELTier | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userData = localStorage.getItem('user')

        if (!token || !userData) {
            router.push('/auth/login')
            return
        }

        try {
            const parsedUser = JSON.parse(userData)
            setUser(parsedUser)
            loadStudentData(parsedUser.id)
        } catch (error) {
            console.error('Error parsing user data:', error)
            router.push('/auth/login')
        }
    }, [router])

    const loadStudentData = async (userId: string) => {
        try {
            // Load attendance
            const attendanceResponse = await fetch(`/api/student/attendance?userId=${userId}`)
            if (attendanceResponse.ok) {
                const attendanceData = await attendanceResponse.json()
                setAttendance(attendanceData.attendance || [])
            }

            // Load reflections
            const reflectionsResponse = await fetch(`/api/student/reflections?userId=${userId}`)
            if (reflectionsResponse.ok) {
                const reflectionsData = await reflectionsResponse.json()
                setReflections(reflectionsData.reflections || [])
            }

            // Load EL tier
            const elTierResponse = await fetch(`/api/student/el-tier?userId=${userId}`)
            if (elTierResponse.ok) {
                const elTierData = await elTierResponse.json()
                setElTier(elTierData.elTier)
            }
        } catch (error) {
            console.error('Error loading student data:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        alert('You have been successfully logged out!')
        router.push('/')
    }

    const exportForGivePulse = async () => {
        if (!user) return

        try {
            const response = await fetch(`/api/student/export?userId=${user.id}`)
            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${user.firstName}-${user.lastName}-el-progress.csv`
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
                document.body.removeChild(a)
            } else {
                alert('Failed to export data')
            }
        } catch (error) {
            console.error('Error exporting data:', error)
            alert('Failed to export data')
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        )
    }

    if (!user) {
        return null
    }

    const totalHours = attendance.reduce((sum, record) => sum + (record.hours || 0), 0)
    const completedReflections = reflections.filter(r => r.status === 'completed').length

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Student Portal</h1>
                            <span className="ml-3 text-sm text-gray-500">EL Portal</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                                Welcome, {user.firstName} {user.lastName}
                            </span>
                            <Button variant="outline" onClick={handleLogout}>
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalHours}</div>
                            <p className="text-xs text-muted-foreground">
                                EL credit hours earned
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Reflections</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{completedReflections}</div>
                            <p className="text-xs text-muted-foreground">
                                Completed reflections
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">EL Tier</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {elTier?.tier || 'Not Assigned'}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Current tier level
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Organization</CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{user.organization}</div>
                            <p className="text-xs text-muted-foreground">
                                Your organization
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* EL Tier Progress */}
                {elTier && (
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>EL Tier Progress</CardTitle>
                            <CardDescription>
                                Track your progress toward completing your assigned EL tier requirements
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Hours Progress</span>
                                        <span>{totalHours} / {elTier.requiredHours} hours</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${Math.min((totalHours / elTier.requiredHours) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Reflections Progress</span>
                                        <span>{completedReflections} / {elTier.requiredReflections} reflections</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${Math.min((completedReflections / elTier.requiredReflections) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                                {totalHours >= elTier.requiredHours && completedReflections >= elTier.requiredReflections && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                                        <strong>Congratulations!</strong> You have completed your EL tier requirements.
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Attendance History</CardTitle>
                            <CardDescription>
                                View your attendance records and export for GivePulse
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {attendance.length > 0 ? (
                                    attendance.slice(0, 3).map((record, index) => (
                                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                            <span className="text-sm">{record.eventName}</span>
                                            <span className="text-sm font-medium">{record.hours}h</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No attendance records yet</p>
                                )}
                            </div>
                            <div className="flex space-x-2 mt-4">
                                <Button variant="outline" className="flex-1">
                                    View All Attendance
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={exportForGivePulse}
                                    disabled={attendance.length === 0}
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Export for GivePulse
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Reflections</CardTitle>
                            <CardDescription>
                                Submit reflections for events you've attended
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {reflections.length > 0 ? (
                                    reflections.slice(0, 3).map((reflection, index) => (
                                        <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                            <span className="text-sm">{reflection.eventName}</span>
                                            <span className={`text-xs px-2 py-1 rounded ${reflection.status === 'completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {reflection.status}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No reflections yet</p>
                                )}
                            </div>
                            <Link href="/student/reflection">
                                <Button className="w-full mt-4">
                                    Submit Reflection
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                {/* Admin Access */}
                {user.isAdmin && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Admin Access</CardTitle>
                            <CardDescription>
                                You have admin privileges. Access admin features below.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-4">
                                <Link href="/admin/hacks">
                                    <Button variant="outline">
                                        Hacks Admin Portal
                                    </Button>
                                </Link>
                                <Link href="/admin/group">
                                    <Button variant="outline">
                                        Group Admin Portal
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </main>
        </div>
    )
}