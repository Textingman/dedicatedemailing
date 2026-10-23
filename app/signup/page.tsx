'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Lock, User, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  // Sign In handlers
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!signInData.email.trim()) errs.email = 'Email is required';
    if (!signInData.password) errs.password = 'Password is required';
    if (Object.keys(errs).length > 0) { setSignInErrors(errs); return; }
    setIsSigningIn(true);
    setTimeout(() => { setIsSigningIn(false); router.push('/product-demo'); }, 1200);
  };

  // Employee Sign Up handlers
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

  const inputClass = (err?: string) =>
    `w-full px-3 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Navbar />

      <div className="max-w-lg mx-auto px-4 sm:px-6 py-16">
        {/* Card */}
        <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
          {/* Tab bar */}
          <div className="flex border-b" style={{ borderColor: '#E5E7EB' }}>
            <button
              onClick={() => setActiveTab('signin')}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${activeTab === 'signin' ? 'border-b-2' : ''}`}
              style={{
                color: activeTab === 'signin' ? '#0891B2' : '#6B7280',
                borderColor: activeTab === 'signin' ? '#0891B2' : 'transparent',
                backgroundColor: activeTab === 'signin' ? '#F0FDFF' : 'transparent',
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('employee')}
              className={`flex-1 py-4 text-sm font-semibold transition-colors ${activeTab === 'employee' ? 'border-b-2' : ''}`}
              style={{
                color: activeTab === 'employee' ? '#0891B2' : '#6B7280',
                borderColor: activeTab === 'employee' ? '#0891B2' : 'transparent',
                backgroundColor: activeTab === 'employee' ? '#F0FDFF' : 'transparent',
              }}
            >
              Employee Sign Up
            </button>
          </div>

          <div className="p-8">
            {/* ── SIGN IN TAB ── */}
            {activeTab === 'signin' && (
              <>
                <div className="mb-6">
                  <h1 className="text-2xl font-bold" style={{ color: '#1F2937' }}>Welcome back</h1>
                  <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Sign in to your Dedicated Emailing account.</p>
                </div>
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                      <input
                        type="email"
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`${inputClass(signInErrors.email)} pl-9`}
                        style={{ borderColor: signInErrors.email ? '#EF4444' : '#D1D5DB' }}
                      />
                    </div>
                    {signInErrors.email && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{signInErrors.email}</p>}
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-sm font-medium" style={{ color: '#374151' }}>Password</label>
                      <Link href="/forgot-password" className="text-xs" style={{ color: '#0891B2' }}>Forgot password?</Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                      <input
                        type="password"
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        placeholder="Your password"
                        className={`${inputClass(signInErrors.password)} pl-9`}
                        style={{ borderColor: signInErrors.password ? '#EF4444' : '#D1D5DB' }}
                      />
                    </div>
                    {signInErrors.password && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{signInErrors.password}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSigningIn}
                    className="w-full py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: isSigningIn ? '#9CA3AF' : '#0891B2' }}
                  >
                    {isSigningIn ? 'Signing in...' : 'Sign In →'}
                  </button>
                </form>
                <p className="text-xs text-center mt-6" style={{ color: '#9CA3AF' }}>
                  New employee?{' '}
                  <button onClick={() => setActiveTab('employee')} className="font-semibold underline" style={{ color: '#0891B2' }}>
                    Create your employee account
                  </button>
                </p>
              </>
            )}

            {/* ── EMPLOYEE SIGN UP TAB ── */}
            {activeTab === 'employee' && (
              <>
                <div className="mb-6">
                  <h1 className="text-2xl font-bold" style={{ color: '#1F2937' }}>Create your employee account</h1>
                  <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                    Your organization must already have a Dedicated Emailing account. Enter your organization code to join.
                  </p>
                </div>
                <form onSubmit={handleEmpSubmit} className="space-y-4">
                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>First Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                        <input
                          type="text"
                          value={empData.firstName}
                          onChange={(e) => setEmpData({ ...empData, firstName: e.target.value })}
                          placeholder="Jane"
                          className={`${inputClass(empErrors.firstName)} pl-9`}
                          style={{ borderColor: empErrors.firstName ? '#EF4444' : '#D1D5DB' }}
                        />
                      </div>
                      {empErrors.firstName && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{empErrors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Last Name *</label>
                      <input
                        type="text"
                        value={empData.lastName}
                        onChange={(e) => setEmpData({ ...empData, lastName: e.target.value })}
                        placeholder="Smith"
                        className={inputClass(empErrors.lastName)}
                        style={{ borderColor: empErrors.lastName ? '#EF4444' : '#D1D5DB' }}
                      />
                      {empErrors.lastName && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{empErrors.lastName}</p>}
                    </div>
                  </div>

                  {/* Work email */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Work Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                      <input
                        type="email"
                        value={empData.workEmail}
                        onChange={(e) => setEmpData({ ...empData, workEmail: e.target.value })}
                        placeholder="jane@yourcompany.com"
                        className={`${inputClass(empErrors.workEmail)} pl-9`}
                        style={{ borderColor: empErrors.workEmail ? '#EF4444' : '#D1D5DB' }}
                      />
                    </div>
                    {empErrors.workEmail && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{empErrors.workEmail}</p>}
                  </div>

                  {/* Organization code */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Organization Code *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                      <input
                        type="text"
                        value={empData.orgCode}
                        onChange={(e) => setEmpData({ ...empData, orgCode: e.target.value })}
                        placeholder="e.g. ACME-2026"
                        className={`${inputClass(empErrors.orgCode)} pl-9`}
                        style={{ borderColor: empErrors.orgCode ? '#EF4444' : '#D1D5DB' }}
                      />
                    </div>
                    {empErrors.orgCode && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{empErrors.orgCode}</p>}
                    <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Ask your HR or IT admin for your organization code.</p>
                  </div>

                  {/* Phone (optional, for SMS opt-in) */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Mobile Phone <span style={{ color: '#9CA3AF' }}>(optional)</span></label>
                    <input
                      type="tel"
                      value={empData.phone}
                      onChange={(e) => setEmpData({ ...empData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass()}
                      style={{ borderColor: '#D1D5DB' }}
                    />
                    <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>Used for SMS notifications if you choose to opt in on the next step.</p>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                      <input
                        type="password"
                        value={empData.password}
                        onChange={(e) => setEmpData({ ...empData, password: e.target.value })}
                        placeholder="Min. 8 characters"
                        className={`${inputClass(empErrors.password)} pl-9`}
                        style={{ borderColor: empErrors.password ? '#EF4444' : '#D1D5DB' }}
                      />
                    </div>
                    {empErrors.password && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{empErrors.password}</p>}
                  </div>

                  {/* Confirm password */}
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>Confirm Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#9CA3AF' }} />
                      <input
                        type="password"
                        value={empData.confirmPassword}
                        onChange={(e) => setEmpData({ ...empData, confirmPassword: e.target.value })}
                        placeholder="Re-enter password"
                        className={`${inputClass(empErrors.confirmPassword)} pl-9`}
                        style={{ borderColor: empErrors.confirmPassword ? '#EF4444' : '#D1D5DB' }}
                      />
                    </div>
                    {empErrors.confirmPassword && <p className="text-xs mt-1" style={{ color: '#EF4444' }}>{empErrors.confirmPassword}</p>}
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3 pt-1">
                    <input type="checkbox" id="empTerms" required className="mt-1 w-4 h-4 flex-shrink-0" style={{ accentColor: '#0891B2' }} />
                    <label htmlFor="empTerms" className="text-xs" style={{ color: '#6B7280' }}>
                      I agree to the{' '}
                      <Link href="/terms" className="underline" style={{ color: '#0891B2' }}>Terms of Service</Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="underline" style={{ color: '#0891B2' }}>Privacy Policy</Link>. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isCreating}
                    className="w-full py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: isCreating ? '#9CA3AF' : '#0891B2' }}
                  >
                    {isCreating ? 'Creating account...' : (<>Create Account & Set Preferences <ArrowRight className="w-4 h-4" /></>)}
                  </button>

                  <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                    You&apos;ll choose your notification preferences on the next step.
                  </p>
                </form>
                <p className="text-xs text-center mt-4" style={{ color: '#9CA3AF' }}>
                  Already have an account?{' '}
                  <button onClick={() => setActiveTab('signin')} className="font-semibold underline" style={{ color: '#0891B2' }}>
                    Sign in
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
