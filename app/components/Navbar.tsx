'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const C = {
  navy:    '#0F1E2E',
  slate:   '#4A5E72',
  muted:   '#8A9BAD',
  primary: '#0795B7',
  border:  '#DDE4EC',
};

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white border-b sticky top-0 z-50" style={{ borderColor: C.border }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/dedicated-emails-logo.png"
                alt="Dedicated Emailing"
                width={190}
                height={64}
                priority
              />
            </Link>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/',             label: 'Home' },
              { href: '/product-demo', label: 'Features' },
              { href: '/compare',      label: 'Solutions' },
              { href: '/about',        label: 'About' },
              { href: '/contact',      label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded transition-colors hover:opacity-80"
                style={{
                  color: isActive(link.href) ? C.primary : C.slate,
                  borderBottom: isActive(link.href) ? `2px solid ${C.primary}` : '2px solid transparent',
                }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/signup"
              className="px-4 py-2 text-sm font-medium rounded border transition-colors hover:opacity-80"
              style={{ color: C.slate, borderColor: C.border }}>
              Sign In
            </Link>
            <Link href="/demo"
              className="px-4 py-2 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: C.primary }}>
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
