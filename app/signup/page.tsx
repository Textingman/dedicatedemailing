'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Lock, User, Building2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
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

export default function SignInPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'signin' | 'employee'>('signin');

  // Sign In state
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signInErrors, setSignInErrors] = useState<Record<string, string>>({});
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Employee Sign Up state
  const [empData, setEmpData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    orgCode: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [empErrors, setEmpErrors] = useState<Record<string, string>>({});
  const [isCreating, setIsCreating] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!signInData.email.trim()) errs.email = 'Email is required';
    if (!signInData.password) errs.password = 'Password is required';
    if (Object.keys(errs).length > 0) { setSignInErrors(errs); return; }
    setIsSigningIn(true);
    setTimeout(() => { setIsSigningIn(false); router.push('/product-demo'); }, 1200);
  };

  const handleEmpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!empData.firstName.trim()) errs.firstName = 'Required';
    if (!empData.lastName.trim()) errs.lastName = 'Required';
    if (!empData.workEmail.trim()) errs.workEmail = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(empData.workEmail)) errs.workEmail = 'Enter a valid email';
    if (!empData.orgCode.trim()) errs.orgCode = 'Organization code is required';
    if (!empData.password) errs.password = 'Password is required';
    else if (empData.password.length < 8) errs.password = 'Min. 8 characters';
    if (empData.password !== empData.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (Object.keys(errs).length > 0) { setEmpErrors(errs); return; }
    setIsCreating(true);
    setTimeout(() => { setIsCreating(false); router.push('/communication-preferences'); }, 1200);
  };

  const inputBase = 'w-full px-3 py-2.5 rounded-md border text-sm focus:outline-none focus:ring-2';

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.appBg }}>
      <Navbar />

      <section className="py-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          {/* Logo + heading */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <Image
                src="/dedicated-emails-logo.png"
                alt="Dedicated Emailing"
                width={200}
                height={67}
                priority
              />
            </div>
            <h1 className="text-2xl font-bold" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              {activeTab === 'signin' ? 'Welcome back' : 'Create your employee account'}
            </h1>
            <p className="text-sm mt-1" style={{ color: C.slate }}>
              {activeTab === 'signin'
                ? 'Sign in to your Dedicated Emailing account.'
                : 'Your organization must already have a Dedicated Emailing account.'}
            </p>
          </div>

          {/* Card */}
          <div className="rounded-lg border shadow-sm overflow-hidden" style={{ backgroundColor: C.card, borderColor: C.border }}>
            {/* Tab bar */}
            <div className="flex border-b" style={{ borderColor: C.border }}>
              <button
                onClick={() => setActiveTab('signin')}
                className="flex-1 py-3.5 text-sm font-semibold transition-colors"
                style={{
                  color: activeTab === 'signin' ? C.primary : C.muted,
                  borderBottom: activeTab === 'signin' ? `2px solid ${C.primary}` : '2px solid transparent',
                  backgroundColor: 'transparent',
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab('employee')}
                className="flex-1 py-3.5 text-sm font-semibold transition-colors"
                style={{
                  color: activeTab === 'employee' ? C.primary : C.muted,
                  borderBottom: activeTab === 'employee' ? `2px solid ${C.primary}` : '2px solid transparent',
                  backgroundColor: 'transparent',
                }}
              >
                Employee Sign Up
              </button>
            </div>

            <div className="p-7">
              {/* ── SIGN IN ── */}
              {activeTab === 'signin' && (
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                      <input
                        type="email"
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`${inputBase} pl-9`}
                        style={{ borderColor: signInErrors.email ? '#DC5661' : C.border }}
                      />
                    </div>
                    {signInErrors.email && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{signInErrors.email}</p>}
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-sm font-medium" style={{ color: C.navy }}>Password</label>
                      <Link href="/forgot-password" className="text-xs" style={{ color: C.primary }}>Forgot password?</Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                      <input
                        type="password"
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        placeholder="Your password"
                        className={`${inputBase} pl-9`}
                        style={{ borderColor: signInErrors.password ? '#DC5661' : C.border }}
                      />
                    </div>
                    {signInErrors.password && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{signInErrors.password}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSigningIn}
                    className="w-full py-3 text-white font-semibold rounded-md text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: isSigningIn ? C.muted : C.primary }}
                  >
                    {isSigningIn ? 'Signing in…' : 'Sign In'}
                  </button>
                  <p className="text-xs text-center" style={{ color: C.muted }}>
                    New employee?{' '}
                    <button onClick={() => setActiveTab('employee')} className="font-semibold underline" style={{ color: C.primary }}>
                      Create your employee account
                    </button>
                  </p>
                </form>
              )}

              {/* ── EMPLOYEE SIGN UP ── */}
              {activeTab === 'employee' && (
                <form onSubmit={handleEmpSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>First Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                        <input
                          type="text"
                          value={empData.firstName}
                          onChange={(e) => setEmpData({ ...empData, firstName: e.target.value })}
                          placeholder="Jane"
                          className={`${inputBase} pl-9`}
                          style={{ borderColor: empErrors.firstName ? '#DC5661' : C.border }}
                        />
                      </div>
                      {empErrors.firstName && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{empErrors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Last Name *</label>
                      <input
                        type="text"
                        value={empData.lastName}
                        onChange={(e) => setEmpData({ ...empData, lastName: e.target.value })}
                        placeholder="Smith"
                        className={inputBase}
                        style={{ borderColor: empErrors.lastName ? '#DC5661' : C.border }}
                      />
                      {empErrors.lastName && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{empErrors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Work Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                      <input
                        type="email"
                        value={empData.workEmail}
                        onChange={(e) => setEmpData({ ...empData, workEmail: e.target.value })}
                        placeholder="jane@yourcompany.com"
                        className={`${inputBase} pl-9`}
                        style={{ borderColor: empErrors.workEmail ? '#DC5661' : C.border }}
                      />
                    </div>
                    {empErrors.workEmail && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{empErrors.workEmail}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Organization Code *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                      <input
                        type="text"
                        value={empData.orgCode}
                        onChange={(e) => setEmpData({ ...empData, orgCode: e.target.value })}
                        placeholder="e.g. ACME-2026"
                        className={`${inputBase} pl-9`}
                        style={{ borderColor: empErrors.orgCode ? '#DC5661' : C.border }}
                      />
                    </div>
                    {empErrors.orgCode && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{empErrors.orgCode}</p>}
                    <p className="text-xs mt-1" style={{ color: C.muted }}>Ask your HR or IT admin for your organization code.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>
                      Mobile Phone <span style={{ color: C.muted }}>(optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={empData.phone}
                      onChange={(e) => setEmpData({ ...empData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={inputBase}
                      style={{ borderColor: C.border }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                      <input
                        type="password"
                        value={empData.password}
                        onChange={(e) => setEmpData({ ...empData, password: e.target.value })}
                        placeholder="Min. 8 characters"
                        className={`${inputBase} pl-9`}
                        style={{ borderColor: empErrors.password ? '#DC5661' : C.border }}
                      />
                    </div>
                    {empErrors.password && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{empErrors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: C.navy }}>Confirm Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: C.muted }} />
                      <input
                        type="password"
                        value={empData.confirmPassword}
                        onChange={(e) => setEmpData({ ...empData, confirmPassword: e.target.value })}
                        placeholder="Re-enter password"
                        className={`${inputBase} pl-9`}
                        style={{ borderColor: empErrors.confirmPassword ? '#DC5661' : C.border }}
                      />
                    </div>
                    {empErrors.confirmPassword && <p className="text-xs mt-1" style={{ color: '#DC5661' }}>{empErrors.confirmPassword}</p>}
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input type="checkbox" id="empTerms" required className="mt-1 w-4 h-4 flex-shrink-0" style={{ accentColor: C.primary }} />
                    <label htmlFor="empTerms" className="text-xs" style={{ color: C.slate }}>
                      I agree to the{' '}
                      <Link href="/terms" className="underline" style={{ color: C.primary }}>Terms of Service</Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="underline" style={{ color: C.primary }}>Privacy Policy</Link>. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isCreating}
                    className="w-full py-3 text-white font-semibold rounded-md text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: isCreating ? C.muted : C.primary }}
                  >
                    {isCreating ? 'Creating account…' : (<>Create Account <ArrowRight className="w-4 h-4" /></>)}
                  </button>

                  <p className="text-xs text-center" style={{ color: C.muted }}>
                    Already have an account?{' '}
                    <button onClick={() => setActiveTab('signin')} className="font-semibold underline" style={{ color: C.primary }}>
                      Sign in
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
