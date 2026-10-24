import Link from 'next/link';

const C = {
  navy:    '#0F1E2E',
  slate:   '#4A5E72',
  muted:   '#8A9BAD',
  primary: '#0795B7',
  border:  '#DDE4EC',
};

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: C.navy, borderColor: '#1A2E42' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-base font-semibold text-white mb-3">Dedicated Emailing</div>
            <p className="text-sm leading-relaxed" style={{ color: '#8BA3B8' }}>
              The internal communications platform for HR, People Ops, and leadership teams.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#8BA3B8">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#8BA3B8' }}>Platform</div>
            <ul className="space-y-2.5">
              {[
                { href: '/product-demo', label: 'Features' },
                { href: '/compare',      label: 'Solutions' },
                { href: '/demo',         label: 'Book a Demo' },
                { href: '/signup',       label: 'Sign In' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-opacity hover:opacity-80"
                    style={{ color: '#8BA3B8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#8BA3B8' }}>Company</div>
            <ul className="space-y-2.5">
              {[
                { href: '/about',   label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms',   label: 'Terms of Service' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-opacity hover:opacity-80"
                    style={{ color: '#8BA3B8' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#8BA3B8' }}>Contact</div>
            <ul className="space-y-2.5">
              <li className="text-sm" style={{ color: '#8BA3B8' }}>support@usededicatedemailing.com</li>
              <li className="text-sm" style={{ color: '#8BA3B8' }}>+1 (844) 238-4155</li>
              <li className="text-sm" style={{ color: '#8BA3B8' }}>6102 Cherrylawn Cir<br />Austin, TX 78723</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: '#1A2E42' }}>
          <p className="text-xs" style={{ color: '#8BA3B8' }}>
            &copy; 2026 Dedicated Emailing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs transition-opacity hover:opacity-80" style={{ color: '#8BA3B8' }}>Privacy</Link>
            <Link href="/terms"   className="text-xs transition-opacity hover:opacity-80" style={{ color: '#8BA3B8' }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
