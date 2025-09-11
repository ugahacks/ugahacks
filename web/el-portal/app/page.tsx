'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Building, CheckCircle, FileText, Users } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg mr-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  EL Portal
                </h1>
                <span className="text-sm text-gray-500">UGAHacks</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Experiential Learning Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track your EL credit progress, manage events, and submit reflections for UGAHacks experiential learning requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Student Portal */}
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Student Portal</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Track your attendance, submit reflections, and view your EL progress. Available to all users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/auth/login">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Users className="h-4 w-4 mr-2" />
                  Student Login
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Admin Portal */}
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-2">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Admin Portal</CardTitle>
              </div>
              <CardDescription className="text-gray-600">
                Manage events, track attendance, and oversee EL requirements. Admin access required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/auth/admin-login">
                <Button variant="outline" className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Building className="h-4 w-4 mr-2" />
                  Admin Login
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">EL Tier Tracking</h4>
              <p className="text-gray-600 leading-relaxed">
                Track your progress through Beginner, Intermediate, and Advanced EL tiers with detailed requirements and visual progress indicators.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Event Management</h4>
              <p className="text-gray-600 leading-relaxed">
                Create and manage club meetings, workshops, and hackathon events with attendance tracking and reflection requirements.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Reflection System</h4>
              <p className="text-gray-600 leading-relaxed">
                Submit reflections with word count validation, deadline enforcement, and automated EL credit processing.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Use EL Portal?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Automated Tracking</h4>
                <p className="text-gray-600 text-sm">Never miss EL credit opportunities with automated attendance and reflection tracking.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Easy Export</h4>
                <p className="text-gray-600 text-sm">Export your progress for GivePulse submissions with one click.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Real-time Progress</h4>
                <p className="text-gray-600 text-sm">See your EL tier progress in real-time with visual indicators.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Admin Tools</h4>
                <p className="text-gray-600 text-sm">Comprehensive admin tools for event management and attendance tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}