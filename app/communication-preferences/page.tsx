'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, MessageSquare, Bell, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CommunicationPreferencesPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  // Transactional (account notifications)
  const [transactional, setTransactional] = useState({
    email: true,   // default on — required for account
    sms: false,
    push: false,
  });

  // Promotional / marketing
  const [promotional, setPromotional] = useState({
    email: false,
    sms: false,
    push: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      router.push('/product-demo');
    }, 1200);
  };

  const Toggle = ({
    checked,
    onChange,
    id,
  }: {
    checked: boolean;
    onChange: (v: boolean) => void;
    id: string;
  }) => (
    <button
      type="button"
      id={id}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0"
      style={{ backgroundColor: checked ? '#0891B2' : '#D1D5DB' }}
      aria-checked={checked}
      role="switch"
    >
      <span
        className="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
        style={{ transform: checked ? 'translateX(22px)' : 'translateX(2px)' }}
      />
    </button>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      <Navbar />

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
        {/* Progress indicator */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#10B981' }}>
              <CheckCircle className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium" style={{ color: '#10B981' }}>Account Created</span>
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: '#0891B2' }} />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#0891B2' }}>2</div>
            <span className="text-sm font-semibold" style={{ color: '#0891B2' }}>Set Preferences</span>
          </div>
          <div className="flex-1 h-px" style={{ backgroundColor: '#E5E7EB' }} />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#E5E7EB', color: '#9CA3AF' }}>3</div>
            <span className="text-sm" style={{ color: '#9CA3AF' }}>Done</span>
          </div>
        </div>

        <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
          <div className="px-8 pt-8 pb-4">
            <h1 className="text-2xl font-bold" style={{ color: '#1F2937' }}>Communication Preferences</h1>
            <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
              Choose how you&apos;d like to receive updates from your organization. You can change these at any time in your account settings.
            </p>

            {/* Mobile phone input — above the preference toggles */}
            <div className="mt-5">
              <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                Mobile Phone <span style={{ color: '#9CA3AF' }}>(optional — required for SMS)</span>
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
                style={{ borderColor: '#D1D5DB' }}
              />
              <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                Enter your mobile number to enable SMS notifications below.
              </p>
            </div>
          </div>

          <form onSubmit={handleSave}>
            {/* ── TRANSACTIONAL / ACCOUNT NOTIFICATIONS ── */}
            <div className="px-8 py-6 border-t" style={{ borderColor: '#F3F4F6' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CFFAFE' }}>
                  <Bell className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div>
                  <h2 className="text-base font-bold" style={{ color: '#1F2937' }}>Transactional Account Notifications</h2>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>
                    Important updates about your account, company announcements, policy changes, and compliance notices. These are sent on behalf of your organization.
                  </p>
                </div>
              </div>

              <div className="space-y-3 ml-13">
                {/* Email — always on */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4" style={{ color: '#0891B2' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1F2937' }}>Email</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>Required for account communications</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>Required</span>
                    <Toggle checked={true} onChange={() => {}} id="trans-email" />
                  </div>
                </div>

                {/* SMS */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4" style={{ color: '#0891B2' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1F2937' }}>SMS Text Messages</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>Urgent alerts and time-sensitive notices</div>
                    </div>
                  </div>
                  <Toggle
                    checked={transactional.sms}
                    onChange={(v) => setTransactional({ ...transactional, sms: v })}
                    id="trans-sms"
                  />
                </div>

                {/* Push */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4" style={{ color: '#0891B2' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1F2937' }}>Push Notifications</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>In-app and browser notifications</div>
                    </div>
                  </div>
                  <Toggle
                    checked={transactional.push}
                    onChange={(v) => setTransactional({ ...transactional, push: v })}
                    id="trans-push"
                  />
                </div>
              </div>

              {/* SMS consent disclosure */}
              {transactional.sms && (
                <div className="mt-3 p-3 rounded-xl text-xs" style={{ backgroundColor: '#ECFEFF', border: '1px solid #CFFAFE', color: '#0891B2' }}>
                  <strong>SMS Consent:</strong> By enabling SMS, I agree to receive Transactional Account Notification SMS messages from Dedicated Emailing at the phone number I provided. I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Message frequency varies. Consent is not required as a condition of purchasing any products or services.
                </div>
              )}
            </div>

            {/* ── PROMOTIONAL / MARKETING ── */}
            <div className="px-8 py-6 border-t" style={{ borderColor: '#F3F4F6' }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FEF3C7' }}>
                  <Mail className="w-5 h-5" style={{ color: '#D97706' }} />
                </div>
                <div>
                  <h2 className="text-base font-bold" style={{ color: '#1F2937' }}>Promotional & Marketing</h2>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>
                    Product updates, new features, tips, and offers from Dedicated Emailing. Completely optional — unsubscribe anytime.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Promo Email */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4" style={{ color: '#D97706' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1F2937' }}>Marketing Emails</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>Product news, tips, and feature announcements</div>
                    </div>
                  </div>
                  <Toggle
                    checked={promotional.email}
                    onChange={(v) => setPromotional({ ...promotional, email: v })}
                    id="promo-email"
                  />
                </div>

                {/* Promo SMS */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4" style={{ color: '#D97706' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1F2937' }}>Promotional SMS</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>Special offers and product updates via text</div>
                    </div>
                  </div>
                  <Toggle
                    checked={promotional.sms}
                    onChange={(v) => setPromotional({ ...promotional, sms: v })}
                    id="promo-sms"
                  />
                </div>

                {/* Promo Push */}
                <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4" style={{ color: '#D97706' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1F2937' }}>Promotional Push Notifications</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>In-app promotions and announcements</div>
                    </div>
                  </div>
                  <Toggle
                    checked={promotional.push}
                    onChange={(v) => setPromotional({ ...promotional, push: v })}
                    id="promo-push"
                  />
                </div>
              </div>

              {/* Promotional SMS consent */}
              {promotional.sms && (
                <div className="mt-3 p-3 rounded-xl text-xs" style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A', color: '#92400E' }}>
                  <strong>Promotional SMS Consent:</strong> By enabling Promotional SMS, I agree to receive recurring promotional and marketing SMS messages from Dedicated Emailing at the phone number I provided. I may opt out at any time by replying STOP. Reply HELP for help. Message and data rates may apply. Consent is not required as a condition of purchasing any products or services.
                </div>
              )}
            </div>

            {/* Privacy note */}
            <div className="px-8 pb-4">
              <div className="flex items-start gap-2 p-3 rounded-xl text-xs" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', color: '#6B7280' }}>
                <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0891B2' }} />
                <span>
                  Your preferences are saved securely and can be updated at any time in your account settings. We never sell your contact information. See our{' '}
                  <Link href="/privacy" className="underline" style={{ color: '#0891B2' }}>Privacy Policy</Link>.
                </span>
              </div>
            </div>

            {/* Save button */}
            <div className="px-8 pb-8">
              <button
                type="submit"
                disabled={isSaving}
                className="w-full py-4 text-white font-semibold rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center gap-2 text-base"
                style={{ backgroundColor: isSaving ? '#9CA3AF' : '#0891B2' }}
              >
                {isSaving ? 'Saving preferences...' : (<>Save Preferences & Continue <ArrowRight className="w-5 h-5" /></>)}
              </button>
              <p className="text-xs text-center mt-3" style={{ color: '#9CA3AF' }}>
                You can update these preferences anytime in your account settings.
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
