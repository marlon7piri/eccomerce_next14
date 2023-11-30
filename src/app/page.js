import  React from "react"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-900  w-full h-screen flex justify-center items-center">
    <Link href="/dashboard" className="bg-blue-500 text-gray-50 px-4 py-2 rounded">
      Dashboard
    </Link>
    
    </main>

   
  )
}
