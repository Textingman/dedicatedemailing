'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const C = {
  primary: '#0795B7',
  navy:    '#0F1E2E',
  slate:   '#4A5E72',
  muted:   '#8A9BAD',
  appBg:   '#F6F8FA',
  card:    '#FFFFFF',
  border:  '#DDE4EC',
};

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.appBg }}>
      <Navbar />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Logo + heading */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/dedicated-emails-logo.png"
                alt="Dedicated Emailing"
                width={200}
                height={67}
                priority
              />
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              Book a Demo
            </h1>
            <p className="text-base" style={{ color: C.slate }}>
              30 minutes. We&apos;ll walk you through the platform and answer your questions.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-lg border shadow-sm p-8" style={{ backgroundColor: C.card, borderColor: C.border }}>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#EBF8FC' }}>
                  <CheckCircle className="w-7 h-7" style={{ color: C.primary }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: C.navy }}>You&apos;re Booked!</h3>
                <p className="mb-6" style={{ color: C.slate }}>
                  We&apos;ll send a calendar invite to <strong>{form.email}</strong> within 1 business hour.
                </p>
                <Link href="/"
                  className="px-6 py-3 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                  style={{ backgroundColor: C.primary }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>First Name *</label>
                    <input
                      required
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: C.border }}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Last Name *</label>
                    <input
                      required
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: C.border }}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Work Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: C.border }}
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Company *</label>
                  <input
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: C.border }}
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Your Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: C.border, color: form.role ? C.navy : C.muted }}
                  >
                    <option value="">Select your role</option>
                    <option>HR Director / VP People</option>
                    <option>Chief People Officer</option>
                    <option>IT Director / CTO</option>
                    <option>Operations Manager</option>
                    <option>CEO / Founder</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Anything specific you&apos;d like to cover?</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: C.border }}
                    placeholder="e.g. acknowledgment tracking, HRIS integration, compliance reporting..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-md text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: C.primary }}
                >
                  Book My Demo
                </button>
                <p className="text-xs text-center" style={{ color: C.muted }}>
                  No spam. We&apos;ll only use your info to schedule your demo.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
