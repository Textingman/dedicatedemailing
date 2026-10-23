'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#0891B2' : '#6B7280';

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/dedicated-emails-logo.png"
                alt="Dedicated Emailing"
                width={220}
                height={74}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/product-demo" style={{ color: linkColor('/product-demo') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="/compare" style={{ color: linkColor('/compare') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Solutions
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" style={{ color: linkColor('/contact') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <div className="ml-4 flex items-center gap-2">
                <Link href="/signup" className="px-4 py-2 rounded-md text-sm font-medium border" style={{ color: '#0891B2', borderColor: '#0891B2' }}>
                  Sign In
                </Link>
                <Link href="/demo" className="text-white px-4 py-2 rounded-md text-sm font-semibold" style={{ backgroundColor: '#0891B2' }}>
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
