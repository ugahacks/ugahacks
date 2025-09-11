'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthUser, Group, SystemStats } from '@/types'
import { Archive, Building, FileText, LogOut, Settings, Trash2, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HacksAdminPortal() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [groups, setGroups] = useState<Group[]>([])
    const [stats, setStats] = useState<SystemStats | null>(null)
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
            loadAdminData()
        } catch (error) {
            console.error('Error parsing user data:', error)
            router.push('/auth/admin-login')
        }
    }, [router])

    const loadAdminData = async () => {
        try {
            // Load groups
            const groupsResponse = await fetch('/api/admin/hacks/groups')
            if (groupsResponse.ok) {
                const groupsData = await groupsResponse.json()
                setGroups(groupsData.groups || [])
            }

            // Load stats
            const statsResponse = await fetch('/api/admin/hacks/stats')
            if (statsResponse.ok) {
                const statsData = await statsResponse.json()
                setStats(statsData.stats)
            }
        } catch (error) {
            console.error('Error loading admin data:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/')
    }

    const deleteGroup = async (groupId: string) => {
        if (!confirm('Are you sure you want to delete this group? This action cannot be undone.')) {
            return
        }

        try {
            const response = await fetch(`/api/admin/hacks/groups/${groupId}`, {
                method: 'DELETE'
            })

            if (response.ok) {
                setGroups(groups.filter(g => g.id !== groupId))
                alert('Group deleted successfully')
            } else {
                alert('Failed to delete group')
            }
        } catch (error) {
            console.error('Error deleting group:', error)
            alert('Failed to delete group')
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
        { id: 'overview', label: 'Overview', icon: Building },
        { id: 'groups', label: 'Groups', icon: Users },
        { id: 'users', label: 'Users', icon: Users },
        { id: 'el-tiers', label: 'EL Tiers', icon: FileText },
        { id: 'settings', label: 'Settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Hacks Admin Portal</h1>
                            <span className="ml-3 text-sm text-gray-500">Super Admin</span>
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
                                    <CardTitle className="text-sm font-medium">Total Groups</CardTitle>
                                    <Building className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{groups.length}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Active organizations
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats?.totalUsers || 0}</div>
                                    <p className="text-xs text-muted-foreground">
                                        Registered students
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats?.totalEvents || 0}</div>
                                    <p className="text-xs text-muted-foreground">
                                        All events created
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stats?.totalHours || 0}</div>
                                    <p className="text-xs text-muted-foreground">
                                        EL hours awarded
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                    <CardDescription>
                                        Common administrative tasks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Link href="/admin/hacks/groups/create">
                                        <Button className="w-full">
                                            Create New Group
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="w-full">
                                        Export All Data
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        View System Settings
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Data Management</CardTitle>
                                    <CardDescription>
                                        Archive and manage historical data
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button variant="outline" className="w-full">
                                        <Archive className="h-4 w-4 mr-2" />
                                        Archive Data
                                    </Button>
                                    <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Clear Data
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Groups Tab */}
                {activeTab === 'groups' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Groups</h2>
                            <Link href="/admin/hacks/groups/create">
                                <Button>Create New Group</Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {groups.map((group) => (
                                <Card key={group.id}>
                                    <CardHeader>
                                        <CardTitle>{group.name}</CardTitle>
                                        <CardDescription>{group.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <p><strong>Admins:</strong> {group.admins?.length || 0}</p>
                                            <p><strong>Events:</strong> {group.eventCount || 0}</p>
                                            <p><strong>Members:</strong> {group.memberCount || 0}</p>
                                        </div>
                                        <div className="flex space-x-2 mt-4">
                                            <Link href={`/admin/hacks/groups/${group.id}/edit`}>
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Link href={`/admin/hacks/groups/${group.id}/admins`}>
                                                <Button variant="outline" size="sm">
                                                    Admins
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => deleteGroup(group.id)}
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

                {/* Users Tab */}
                {activeTab === 'users' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Users</h2>
                            <Button>Search Users</Button>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>User Management</CardTitle>
                                <CardDescription>
                                    Search and manage user accounts
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500">User management interface coming soon...</p>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* EL Tiers Tab */}
                {activeTab === 'el-tiers' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">EL Tiers</h2>
                            <Link href="/admin/hacks/el-tiers/assign">
                                <Button>Assign EL Tiers</Button>
                            </Link>
                        </div>
                        <Link href="/admin/hacks/el-tiers">
                            <Button variant="outline">View All EL Tier Assignments</Button>
                        </Link>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">System Settings</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle>Global Settings</CardTitle>
                                <CardDescription>
                                    Configure system-wide settings
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500">Settings interface coming soon...</p>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </main>
        </div>
    )
}
