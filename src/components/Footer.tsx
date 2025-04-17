'use client';

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} lengua materna</p>
        <div className="flex gap-6">

          <a 
            href="https://www.instagram.com/frei.geist/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://lengua-materna.bandcamp.com/music" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm hover:text-gray-400 transition-colors"
          >
            Bandcamp
          </a>
          <Link href="/imprint" className="text-sm hover:text-gray-400 transition-colors">
            Imprint
          </Link>
        </div>
      </div>
    </footer>
  )
} 