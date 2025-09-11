import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentUnixTime(): number {
  return Math.floor(Date.now() / 1000)
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
}

export function isoToUnix(isoString: string): number {
  return Math.floor(new Date(isoString).getTime() / 1000)
}

export function unixToISO(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toISOString()
}

export function formatDate(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toLocaleDateString()
}

export function formatDateTime(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toLocaleString()
}
