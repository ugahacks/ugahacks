'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Attendance, AuthUser, Event, Reflection } from '@/types'
import { Calendar, FileText, LogOut, Plus, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function GroupAdminPortal() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [events, setEvents] = useState<Event[]>([])
    const [attendance, setAttendance] = useState<Attendance[]>([])
    const [reflections, setReflections] = useState<Reflection[]>([])
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('overview')
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userData = localStorage.getItem('user')

        if (!token || !userData) {
            router.push('/auth/admin-login')
            return
        }

        try {
            const parsedUser = JSON.parse(userData)
            if (!parsedUser.isAdmin) {
                router.push('/auth/admin-login')
                return
            }
            setUser(parsedUser)
            loadGroupData()
        } catch (error) {
            console.error('Error parsing user data:', error)
            router.push('/auth/admin-login')
        }
    }, [router])

    const loadGroupData = async () => {
        try {
            // Load events for this group
            const eventsResponse = await fetch('/api/admin/group/events')
            if (eventsResponse.ok) {
                const eventsData = await eventsResponse.json()
                setEvents(eventsData.events || [])
            }

            // Load attendance
            const attendanceResponse = await fetch('/api/admin/group/attendance')
            if (attendanceResponse.ok) {
                const attendanceData = await attendanceResponse.json()
                setAttendance(attendanceData.attendance || [])
            }

            // Load reflections
            const reflectionsResponse = await fetch('/api/admin/group/reflections')
            if (reflectionsResponse.ok) {
                const reflectionsData = await reflectionsResponse.json()
                setReflections(reflectionsData.reflections || [])
            }
        } catch (error) {
            console.error('Error loading group data:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/')
    }

    const deleteEvent = async (eventId: string) => {
        if (!confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
            return
        }

        try {
            const response = await fetch(`/api/events/${eventId}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                setEvents(events.filter(e => e.id !== eventId))
                alert('Event deleted successfully')
            } else {
                alert('Failed to delete event')
            }
        } catch (error) {
            console.error('Error deleting event:', error)
            alert('Failed to delete event')
        }
    }

    const exportData = async (type: string) => {
        try {
            const response = await fetch(`/api/admin/group/export?type=${type}`)
            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${type}-export.csv`
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

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Calendar },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'attendance', label: 'Attendance', icon: Users },
        { id: 'reflections', label: 'Reflections', icon: FileText },
    ]

    const totalHours = attendance.reduce((sum, record) => sum + (record.hours || 0), 0)
    const completedReflections = reflections.filter(r => r.status === 'completed').length

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Group Admin Portal</h1>
                            <span className="ml-3 text-sm text-gray-500">{user.organization}</span>
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

            {/* Navigation */}
            <nav className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                        ? 'border-primary-500 text-primary-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    <Icon className="h-4 w-4 mr-2" />
                                    {tab.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{events.length}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Events created
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{totalHours}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Hours awarded
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Attendance Records</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{attendance.length}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Total attendance
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                    <CardDescription>
                                        Common group management tasks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Link href="/admin/group/events/create">
                                        <Button className="w-full">
                                            <Plus className="h-4 w-4 mr-2" />
                                            Create New Event
                                        </Button>
                                    </Link>
                                    <Link href="/admin/group/import-attendance">
                                        <Button variant="outline" className="w-full">
                                            Import Attendance
                                        </Button>
                                    </Link>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => exportData('attendance')}
                                        >
                                            Export Attendance
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => exportData('reflections')}
                                        >
                                            Export Reflections
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Activity</CardTitle>
                                    <CardDescription>
                                        Latest events and attendance
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {events.slice(0, 3).map((event) => (
                                            <div key={event.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                                <span className="text-sm">{event.name}</span>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(event.date).toLocaleDateString()}
                                                </span>
                                            </div>
                                        ))}
                                        {events.length === 0 && (
                                            <p className="text-sm text-gray-500">No events yet</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Events Tab */}
                {activeTab === 'events' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Events</h2>
                            <Link href="/admin/group/events/create">
                                <Button>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create Event
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events.map((event) => (
                                <Card key={event.id}>
                                    <CardHeader>
                                        <CardTitle>{event.name}</CardTitle>
                                        <CardDescription>
                                            {new Date(event.date).toLocaleDateString()} • {event.hours} hours
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <p><strong>Type:</strong> {event.eventType || 'General'}</p>
                                            <p><strong>Location:</strong> {event.location || 'TBD'}</p>
                                            <p><strong>EL Credit:</strong> {event.isELCreditEligible ? 'Yes' : 'No'}</p>
                                        </div>
                                        <div className="flex space-x-2 mt-4">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => router.push(`/admin/group/events/${event.id}/edit`)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => deleteEvent(event.id)}
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* Attendance Tab */}
                {activeTab === 'attendance' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Attendance</h2>
                            <div className="flex space-x-2">
                                <Link href="/admin/group/import-attendance">
                                    <Button variant="outline">Import Attendance</Button>
                                </Link>
                                <Button variant="outline" onClick={() => exportData('attendance')}>
                                    Export Data
                                </Button>
                            </div>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Attendance Records</CardTitle>
                                <CardDescription>
                                    View and manage attendance for all events
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {attendance.length > 0 ? (
                                        attendance.map((record, index) => (
                                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                <div>
                                                    <p className="font-medium">{record.userName}</p>
                                                    <p className="text-sm text-gray-600">{record.eventName}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium">{record.hours}h</p>
                                                    <p className="text-sm text-gray-600">
                                                        {new Date(record.attendedAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No attendance records yet</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Reflections Tab */}
                {activeTab === 'reflections' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Reflections</h2>
                            <Button variant="outline" onClick={() => exportData('reflections')}>
                                Export Reflections
                            </Button>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Reflection Records</CardTitle>
                                <CardDescription>
                                    View and manage student reflections
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {reflections.length > 0 ? (
                                        reflections.map((reflection, index) => (
                                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                                <div>
                                                    <p className="font-medium">{reflection.userName || 'Unknown User'}</p>
                                                    <p className="text-sm text-gray-600">{reflection.eventName}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`text-xs px-2 py-1 rounded ${reflection.status === 'completed'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {reflection.status}
                                                    </span>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        {new Date(reflection.submittedAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No reflections yet</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </main>
        </div>
    )
}