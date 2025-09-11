'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Plus, Search, Trash2, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface GroupAdmin {
    id: string
    firstName: string
    lastName: string
    email: string
    myId: string
    organization: string
}

interface Group {
    id: string
    name: string
    admins: GroupAdmin[]
}

export default function GroupAdminsPage({ params }: { params: { groupId: string } }) {
    const [group, setGroup] = useState<Group | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<GroupAdmin[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSearching, setIsSearching] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const router = useRouter()

    useEffect(() => {
        loadGroupAdmins()
    }, [params.groupId])

    const loadGroupAdmins = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`/api/admin/groups/${params.groupId}/admins`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.ok) {
                const data = await response.json()
                setGroup(data.data)
            } else {
                toast.error('Failed to load group admins')
            }
        } catch (error) {
            console.error('Error loading group admins:', error)
            toast.error('Error loading group admins')
        } finally {
            setIsLoading(false)
        }
    }

    const searchUsers = async () => {
        if (searchQuery.length < 2) return

        setIsSearching(true)
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`/api/admin/users/search?q=${encodeURIComponent(searchQuery)}&limit=10`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.ok) {
                const data = await response.json()
                setSearchResults(data.data)
            } else {
                toast.error('Failed to search users')
            }
        } catch (error) {
            console.error('Error searching users:', error)
            toast.error('Error searching users')
        } finally {
            setIsSearching(false)
        }
    }

    const addAdmin = async (adminId: string) => {
        setIsAdding(true)
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`/api/admin/groups/${params.groupId}/admins`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ adminId }),
            })

            if (response.ok) {
                toast.success('Admin added successfully')
                loadGroupAdmins()
                setSearchQuery('')
                setSearchResults([])
            } else {
                const data = await response.json()
                toast.error(data.error || 'Failed to add admin')
            }
        } catch (error) {
            console.error('Error adding admin:', error)
            toast.error('Error adding admin')
        } finally {
            setIsAdding(false)
        }
    }

    const removeAdmin = async (adminId: string) => {
        if (!confirm('Are you sure you want to remove this admin?')) return

        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`/api/admin/groups/${params.groupId}/admins?adminId=${adminId}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.ok) {
                toast.success('Admin removed successfully')
                loadGroupAdmins()
            } else {
                const data = await response.json()
                toast.error(data.error || 'Failed to remove admin')
            }
        } catch (error) {
            console.error('Error removing admin:', error)
            toast.error('Error removing admin')
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading group admins...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center py-4">
                        <Button
                            variant="ghost"
                            onClick={() => router.push('/admin/hacks')}
                            className="mr-4"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Manage Group Admins
                            </h1>
                            <p className="text-gray-600">{group?.name}</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Add Admin Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Plus className="h-5 w-5 mr-2" />
                            Add Group Admin
                        </CardTitle>
                        <CardDescription>
                            Search for admin users to add to this group
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex space-x-2">
                                <div className="flex-1">
                                    <Input
                                        placeholder="Search by name, email, or MyID..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && searchUsers()}
                                    />
                                </div>
                                <Button onClick={searchUsers} disabled={isSearching || searchQuery.length < 2}>
                                    <Search className="h-4 w-4 mr-2" />
                                    {isSearching ? 'Searching...' : 'Search'}
                                </Button>
                            </div>

                            {/* Search Results */}
                            {searchResults.length > 0 && (
                                <div className="space-y-2">
                                    <h3 className="font-medium text-gray-900">Search Results</h3>
                                    {searchResults.map((user) => (
                                        <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <User className="h-8 w-8 text-gray-400" />
                                                <div>
                                                    <p className="font-medium">{user.firstName} {user.lastName}</p>
                                                    <p className="text-sm text-gray-600">{user.email}</p>
                                                    <p className="text-sm text-gray-500">MyID: {user.myId} • {user.organization}</p>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                onClick={() => addAdmin(user.id)}
                                                disabled={isAdding}
                                            >
                                                <Plus className="h-4 w-4 mr-2" />
                                                Add
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Current Admins */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current Group Admins</CardTitle>
                        <CardDescription>
                            Manage existing group administrators
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {group?.admins.length === 0 ? (
                            <p className="text-gray-500 text-center py-8">No group admins assigned</p>
                        ) : (
                            <div className="space-y-4">
                                {group?.admins.map((admin) => (
                                    <div key={admin.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <User className="h-8 w-8 text-gray-400" />
                                            <div>
                                                <p className="font-medium">{admin.firstName} {admin.lastName}</p>
                                                <p className="text-sm text-gray-600">{admin.email}</p>
                                                <p className="text-sm text-gray-500">MyID: {admin.myId} • {admin.organization}</p>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeAdmin(admin.id)}
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Remove
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
