'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, FileText, Plus, Search, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    myId: string
    organization: string
}

export default function AssignELTierPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [selectedTier, setSelectedTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier1')
    const [notes, setNotes] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [isAssigning, setIsAssigning] = useState(false)
    const router = useRouter()

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

    const assignTier = async () => {
        if (!selectedUser) return

        setIsAssigning(true)
        try {
            const token = localStorage.getItem('token')
            const response = await fetch('/api/admin/el-tiers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId: selectedUser.id,
                    tierLevel: selectedTier,
                    assignedBy: 'current-admin', // In a real system, this would be the current user ID
                    notes: notes
                }),
            })

            if (response.ok) {
                toast.success('EL tier assigned successfully!')
                router.push('/admin/hacks')
            } else {
                const data = await response.json()
                toast.error(data.error || 'Failed to assign tier')
            }
        } catch (error) {
            console.error('Error assigning tier:', error)
            toast.error('Error assigning tier')
        } finally {
            setIsAssigning(false)
        }
    }

    const tierOptions = [
        { value: 'tier1', label: 'Tier 1: Beginner', description: '12 hours total (3 club + 9 additional)' },
        { value: 'tier2', label: 'Tier 2: Intermediate', description: '9 hours total (3 club + 6 additional)' },
        { value: 'tier3', label: 'Tier 3: Advanced', description: '6 hours total (3 club + 3 additional)' }
    ]

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
                                Assign EL Tier
                            </h1>
                            <p className="text-gray-600">Assign EL tier to a student</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Search Users */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Search className="h-5 w-5 mr-2" />
                                Search Users
                            </CardTitle>
                            <CardDescription>
                                Find a user to assign an EL tier to
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex space-x-2">
                                    <Input
                                        placeholder="Search by name, email, or MyID..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && searchUsers()}
                                    />
                                    <Button onClick={searchUsers} disabled={isSearching || searchQuery.length < 2}>
                                        {isSearching ? 'Searching...' : 'Search'}
                                    </Button>
                                </div>

                                {/* Search Results */}
                                {searchResults.length > 0 && (
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-gray-900">Search Results</h3>
                                        {searchResults.map((user) => (
                                            <div
                                                key={user.id}
                                                className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedUser?.id === user.id
                                                        ? 'border-primary-500 bg-primary-50'
                                                        : 'hover:bg-gray-50'
                                                    }`}
                                                onClick={() => setSelectedUser(user)}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <User className="h-8 w-8 text-gray-400" />
                                                    <div>
                                                        <p className="font-medium">{user.firstName} {user.lastName}</p>
                                                        <p className="text-sm text-gray-600">{user.email}</p>
                                                        <p className="text-sm text-gray-500">MyID: {user.myId} • {user.organization}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Assign Tier */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FileText className="h-5 w-5 mr-2" />
                                Assign Tier
                            </CardTitle>
                            <CardDescription>
                                Select tier level and assign to student
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {selectedUser ? (
                                <div className="space-y-6">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <h3 className="font-medium text-gray-900">Selected User</h3>
                                        <p className="text-sm text-gray-600">{selectedUser.firstName} {selectedUser.lastName}</p>
                                        <p className="text-sm text-gray-500">{selectedUser.email}</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            EL Tier Level
                                        </label>
                                        <div className="space-y-2">
                                            {tierOptions.map((tier) => (
                                                <label key={tier.value} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                                                    <input
                                                        type="radio"
                                                        name="tier"
                                                        value={tier.value}
                                                        checked={selectedTier === tier.value}
                                                        onChange={(e) => setSelectedTier(e.target.value as any)}
                                                        className="h-4 w-4 text-primary-600"
                                                    />
                                                    <div>
                                                        <p className="font-medium">{tier.label}</p>
                                                        <p className="text-sm text-gray-600">{tier.description}</p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Notes (Optional)
                                        </label>
                                        <textarea
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            rows={3}
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder="Add any notes about this tier assignment..."
                                        />
                                    </div>

                                    <Button
                                        onClick={assignTier}
                                        disabled={isAssigning}
                                        className="w-full"
                                    >
                                        {isAssigning ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                Assigning...
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="h-4 w-4 mr-2" />
                                                Assign Tier
                                            </>
                                        )}
                                    </Button>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500">Select a user to assign an EL tier</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
