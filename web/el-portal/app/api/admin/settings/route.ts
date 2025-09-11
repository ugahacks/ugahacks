import { adminDb } from '@/lib/firebase-admin';
import { getCurrentUnixTime } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

// Get system settings
export async function GET() {
  try {
    const settingsDoc = await adminDb.collection('system-settings').doc('main').get();
    
    if (!settingsDoc.exists) {
      // Return default settings if none exist
      const defaultSettings = {
        finalDueDate: 0, // No final due date set
        defaultWordCount: 100,
        createdAt: getCurrentUnixTime(),
        updatedAt: getCurrentUnixTime()
      };
      
      return NextResponse.json({
        success: true,
        data: defaultSettings
      });
    }

    return NextResponse.json({
      success: true,
      data: settingsDoc.data()
    });
  } catch (error) {
    console.error('Error fetching system settings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Update system settings
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { finalDueDate, defaultWordCount } = body;

    const now = getCurrentUnixTime();
    const settingsData = {
      finalDueDate: finalDueDate || 0,
      defaultWordCount: defaultWordCount || 100,
      updatedAt: now
    };

    // Update or create system settings
    await adminDb.collection('system-settings').doc('main').set({
      ...settingsData,
      createdAt: now
    }, { merge: true });

    return NextResponse.json({
      success: true,
      message: 'System settings updated successfully',
      data: settingsData
    });
  } catch (error) {
    console.error('Error updating system settings:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
