import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <nav className="py-6 px-4 md:px-8 border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Artist Portfolio</Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 md:px-8 py-8">
        {children}
      </main>
      <footer className="border-t py-6 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Artist Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
