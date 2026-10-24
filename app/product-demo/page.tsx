'use client';

import Link from 'next/link';
import { Lock, Send, BarChart3, Mail, MessageSquare, Smartphone, Monitor, CheckCircle, Activity, Users, Zap, Bell, FileText, ArrowRight, Inbox, Settings, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LockedOverlay({ featureName }: { featureName: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-10"
      style={{ backgroundColor: 'rgba(22, 78, 99, 0.88)', backdropFilter: 'blur(3px)' }}>
      <Lock className="w-6 h-6 text-white mb-2" />
      <p className="text-white font-bold text-sm mb-1">{featureName}</p>
      <p className="text-xs mb-3" style={{ color: '#A5F3FC' }}>Unlock with a demo</p>
      <Link href="/demo"
        className="px-4 py-2 text-sm font-semibold rounded-lg text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#0891B2' }}>
        Book a Demo →
      </Link>
    </div>
  );
}

export default function ProductDemoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F0F4F8' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
            <Zap className="w-4 h-4" /> Platform Features
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4" style={{ color: '#1F2937' }}>
            One platform. Every channel.<br />
            <span style={{ color: '#0891B2' }}>All your internal communications.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: '#6B7280' }}>
            Dedicated Emailing unifies email, intranet messaging, and SMS into a single internal communications hub — with delivery tracking, acknowledgment confirmation, and engagement analytics built in.
          </p>
          {/* Channel pills */}
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            {[
              { icon: <Mail className="w-4 h-4" />, label: 'Email' },
              { icon: <Monitor className="w-4 h-4" />, label: 'Intranet' },
              { icon: <Smartphone className="w-4 h-4" />, label: 'SMS' },
              { icon: <Bell className="w-4 h-4" />, label: 'Push Alerts' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#FFFFFF', color: '#0891B2', border: '1px solid #0891B2' }}>
                {c.icon} {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Header Bar */}
      <div style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" style={{ color: '#38BDF8' }} />
              <span className="text-white font-bold text-sm">Dedicated Emailing</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['Dashboard', 'Email', 'Intranet', 'SMS', 'Analytics', 'Settings'].map((tab, i) => (
                <span key={tab} className="px-3 py-1.5 rounded text-xs font-medium cursor-default"
                  style={{ backgroundColor: i === 0 ? '#0891B2' : 'transparent', color: i === 0 ? '#FFFFFF' : '#94A3B8' }}>
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#1E3A5F', color: '#38BDF8' }}>
              <Lock className="w-3 h-3" /> Preview Mode
            </div>
            <Link href="/demo" className="px-4 py-1.5 text-xs font-semibold rounded-lg text-white" style={{ backgroundColor: '#0891B2' }}>
              Unlock Full Access
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Top KPI stats — visible */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Messages Sent Today', value: '14,820', sub: 'Email + SMS + Intranet', color: '#0891B2' },
            { label: 'Overall Delivery Rate', value: '99.1%', sub: 'All channels combined', color: '#10B981' },
            { label: 'Acknowledgment Rate', value: '87%', sub: 'Critical notices', color: '#0891B2' },
            { label: 'Avg Open Rate', value: '71%', sub: 'vs. 21% industry avg', color: '#10B981' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: '#1F2937' }}>{stat.label}</div>
              <div className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">

          {/* Left column — 2/3 width */}
          <div className="lg:col-span-2 space-y-5">

            {/* Multi-Channel Compose Panel — partially visible */}
            <div className="rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" style={{ color: '#0891B2' }} />
                  <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Compose Announcement</span>
                </div>
                <div className="flex items-center gap-2">
                  {[
                    { icon: <Mail className="w-3 h-3" />, label: 'Email', active: true },
                    { icon: <Monitor className="w-3 h-3" />, label: 'Intranet', active: true },
                    { icon: <Smartphone className="w-3 h-3" />, label: 'SMS', active: false },
                  ].map((ch) => (
                    <span key={ch.label} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: ch.active ? '#CFFAFE' : '#F3F4F6', color: ch.active ? '#0891B2' : '#9CA3AF' }}>
                      {ch.icon} {ch.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="space-y-3 mb-4">
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>To</div>
                    <div className="text-sm font-medium" style={{ color: '#1F2937' }}>All Employees — 1,240 recipients <span className="text-xs font-normal" style={{ color: '#10B981' }}> Synced from HR</span></div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Subject / Headline</div>
                    <div className="text-sm" style={{ color: '#1F2937' }}>Q4 All-Hands Meeting — Tuesday, October 28 at 10am</div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Channels</div>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}> Email</span>
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}> Intranet Post</span>
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#F3F4F6', color: '#9CA3AF' }}> SMS (optional)</span>
                    </div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Require Acknowledgment?</div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-4 rounded-full" style={{ backgroundColor: '#0891B2' }}>
                        <div className="w-3 h-3 rounded-full bg-white mt-0.5 ml-4" />
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#0891B2' }}>Yes — employees must confirm they've read this</span>
                    </div>
                  </div>
                </div>
                {/* Locked: message builder */}
                <div className="relative">
                  <div className="blur-sm select-none pointer-events-none rounded-lg p-4" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', minHeight: '120px' }}>
                    <div className="h-3 rounded mb-2" style={{ backgroundColor: '#E2E8F0', width: '80%' }} />
                    <div className="h-3 rounded mb-2" style={{ backgroundColor: '#E2E8F0', width: '60%' }} />
                    <div className="h-3 rounded mb-4" style={{ backgroundColor: '#E2E8F0', width: '70%' }} />
                    <div className="flex gap-2">
                      <div className="h-8 w-24 rounded" style={{ backgroundColor: '#0891B2' }} />
                      <div className="h-8 w-20 rounded" style={{ backgroundColor: '#E2E8F0' }} />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(248,250,252,0.92)' }}>
                    <Lock className="w-5 h-5 mb-1.5" style={{ color: '#0891B2' }} />
                    <p className="text-sm font-bold mb-0.5" style={{ color: '#1F2937' }}>Drag-and-Drop Message Builder</p>
                    <p className="text-xs mb-2" style={{ color: '#6B7280' }}>Design rich emails, intranet posts, and SMS in one editor</p>
                    <Link href="/demo" className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: '#0891B2' }}>
                      Unlock with Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Channel Performance — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <BarChart3 className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Channel Performance Analytics</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { channel: ' Email', open: '71%', ack: '89%', sent: '1,240' },
                    { channel: ' Intranet', open: '64%', ack: '82%', sent: '1,240' },
                    { channel: ' SMS', open: '94%', ack: '91%', sent: '480' },
                  ].map((ch) => (
                    <div key={ch.channel} className="rounded-xl p-3 text-center" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div className="text-sm font-bold mb-1" style={{ color: '#1F2937' }}>{ch.channel}</div>
                      <div className="text-lg font-bold" style={{ color: '#0891B2' }}>{ch.open}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>open rate</div>
                      <div className="text-xs mt-1 font-medium" style={{ color: '#10B981' }}>{ch.ack} acknowledged</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[55, 72, 48, 88, 65, 92, 78, 84, 91, 76, 95, 82].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 5 || i === 10 ? '#0891B2' : '#BFDBFE' }} />
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Channel Performance Analytics" />
            </div>

            {/* Active Announcements — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4" style={{ color: '#0891B2' }} />
                  <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Active Announcements</span>
                </div>
                <span className="text-xs" style={{ color: '#6B7280' }}>5 active</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {[
                    { name: 'Q4 All-Hands Meeting — Oct 28', channels: 'Email + Intranet', sent: '1,240', ack: '89%', status: 'Sent' },
                    { name: 'Open Enrollment Reminder', channels: 'Email + SMS', sent: '1,240', ack: '94%', status: 'Sent' },
                    { name: 'IT Security Policy Update', channels: 'Email + Intranet + SMS', sent: '1,240', ack: '76%', status: 'Pending Ack' },
                    { name: 'Office Closure — Nov 11', channels: 'Email + Intranet', sent: '—', ack: '—', status: 'Scheduled' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div>
                        <div className="font-medium text-sm" style={{ color: '#1F2937' }}>{c.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{c.channels} · {c.sent} sent</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold" style={{ color: '#0891B2' }}>{c.ack}</div>
                        <div className="text-xs" style={{ color: c.status === 'Sent' ? '#10B981' : c.status === 'Pending Ack' ? '#F59E0B' : '#0891B2' }}>{c.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Announcement Manager" />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">

            {/* SMS Broadcast Panel — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <Smartphone className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>SMS Broadcast</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                  <div className="text-xs font-semibold mb-1" style={{ color: '#166534' }}>Last SMS Sent</div>
                  <div className="text-sm font-medium" style={{ color: '#1F2937' }}>Office closed Friday — enjoy the long weekend!</div>
                  <div className="text-xs mt-1" style={{ color: '#6B7280' }}>480 delivered · 94% opened · 2 min ago</div>
                </div>
                <div className="space-y-2">
                  {[
                    { label: 'Delivery Rate', value: '99.6%', color: '#10B981' },
                    { label: 'Opt-Out Rate', value: '0.2%', color: '#0891B2' },
                    { label: 'Avg Response Time', value: '4 min', color: '#0891B2' },
                  ].map((m) => (
                    <div key={m.label} className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <span className="text-xs" style={{ color: '#374151' }}>{m.label}</span>
                      <span className="text-xs font-bold" style={{ color: m.color }}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="SMS Broadcast Center" />
            </div>

            {/* Intranet Feed — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <Monitor className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Intranet Feed</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="space-y-3">
                  {[
                    { title: 'Q4 All-Hands — Agenda Posted', dept: 'Leadership', views: '1,102', pinned: true },
                    { title: 'Benefits Open Enrollment Now Open', dept: 'HR', views: '987', pinned: true },
                    { title: 'New IT Security Policy', dept: 'IT', views: '743', pinned: false },
                    { title: 'November Holiday Schedule', dept: 'Operations', views: '612', pinned: false },
                  ].map((post) => (
                    <div key={post.title} className="p-3 rounded-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-medium text-xs" style={{ color: '#1F2937' }}>{post.title}</div>
                          <div className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{post.dept} · {post.views} views</div>
                        </div>
                        {post.pinned && <span className="text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>Pinned</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Intranet Post Manager" />
            </div>

            {/* Acknowledgment Tracker — locked */}
            <div className="relative rounded-2xl shadow-sm overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
              <div className="px-5 py-3 border-b flex items-center gap-2" style={{ borderColor: '#E2E8F0', backgroundColor: '#F8FAFC' }}>
                <CheckCircle className="w-4 h-4" style={{ color: '#0891B2' }} />
                <span className="font-semibold text-sm" style={{ color: '#1F2937' }}>Acknowledgment Tracker</span>
              </div>
              <div className="p-5 blur-sm select-none pointer-events-none">
                <div className="mb-3">
                  <div className="text-xs font-medium mb-1" style={{ color: '#374151' }}>IT Security Policy Update</div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: '#E2E8F0' }}>
                      <div className="h-2 rounded-full" style={{ width: '76%', backgroundColor: '#10B981' }} />
                    </div>
                    <span className="text-xs font-bold" style={{ color: '#10B981' }}>76%</span>
                  </div>
                  <div className="text-xs" style={{ color: '#9CA3AF' }}>942 of 1,240 acknowledged · 298 pending</div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Sarah M.', dept: 'Engineering', time: '2 min ago', ack: true },
                    { name: 'James T.', dept: 'HR', time: '5 min ago', ack: true },
                    { name: 'Priya K.', dept: 'Finance', time: 'Pending', ack: false },
                    { name: 'Marcus L.', dept: 'Sales', time: 'Pending', ack: false },
                  ].map((emp) => (
                    <div key={emp.name} className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <div>
                        <div className="text-xs font-medium" style={{ color: '#374151' }}>{emp.name}</div>
                        <div className="text-xs" style={{ color: '#9CA3AF' }}>{emp.dept}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs" style={{ color: emp.ack ? '#10B981' : '#F59E0B' }}>{emp.ack ? ' Acknowledged' : ' Pending'}</div>
                        <div className="text-xs" style={{ color: '#9CA3AF' }}>{emp.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <LockedOverlay featureName="Acknowledgment Tracker" />
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-5 text-center" style={{ backgroundColor: '#0F172A' }}>
              <Lock className="w-7 h-7 text-white mx-auto mb-2" />
              <h3 className="text-base font-bold text-white mb-1">Unlock Full Platform</h3>
              <p className="text-xs mb-3" style={{ color: '#94A3B8' }}>
                Book a 30-min demo to see email, intranet, and SMS working together with your own employee data.
              </p>
              <Link href="/demo"
                className="block w-full py-2.5 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0891B2' }}>
                Book a Demo →
              </Link>
            </div>
          </div>
        </div>

        {/* Feature deep-dives below the app preview */}
        <div className="mt-12 space-y-12">

          {/* Email */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
                <Mail className="w-3 h-3" /> Email
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1F2937' }}>Dedicated email that actually gets read</h2>
              <p className="mb-4" style={{ color: '#6B7280' }}>
                Send branded company announcements, HR notices, and compliance updates via email — with real-time delivery tracking, open rates, and acknowledgment confirmation. No more wondering if your message landed.
              </p>
              <ul className="space-y-2">
                {['Drag-and-drop email composer with templates', 'Delivery & open rate tracking per message', 'Acknowledgment-required emails for compliance', 'Automated follow-up to non-openers', 'Syncs with your HR directory or HRIS'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0891B2' }} />
                    <span className="text-sm" style={{ color: '#374151' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Email product snippet */}
            <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: '#164E63' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: '#A5F3FC' }}>Email Campaign — Q4 All-Hands</span>
              </div>
              <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold" style={{ color: '#1F2937' }}>Q4 All-Hands Meeting</div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>Sent</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: 'Delivered', value: '1,240', color: '#10B981' },
                    { label: 'Opened', value: '71%', color: '#0891B2' },
                    { label: 'Acknowledged', value: '89%', color: '#0891B2' },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <div className="font-bold text-sm" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: '#F0FDFF', border: '1px solid #CFFAFE' }}>
                  <div className="text-xs font-semibold mb-1" style={{ color: '#0891B2' }}>Acknowledgment Progress</div>
                  <div className="h-2 rounded-full mb-1" style={{ backgroundColor: '#E2E8F0' }}>
                    <div className="h-2 rounded-full" style={{ width: '89%', backgroundColor: '#10B981' }} />
                  </div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>1,104 of 1,240 confirmed · 136 pending · Auto-reminder sent</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intranet */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Intranet product snippet */}
            <div className="rounded-2xl overflow-hidden shadow-xl border order-2 md:order-1" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: '#164E63' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: '#A5F3FC' }}>Intranet — Company Feed</span>
              </div>
              <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>Pinned Announcements</div>
                <div className="space-y-2">
                  {[
                    { title: 'Q4 All-Hands — Agenda & Zoom Link', dept: 'Leadership', views: '1,102', badge: 'Pinned' },
                    { title: 'Open Enrollment Closes Nov 15', dept: 'HR · Benefits', views: '987', badge: 'Action Required' },
                    { title: 'New IT Security Policy — Please Read', dept: 'IT', views: '743', badge: 'Ack Required' },
                  ].map((post) => (
                    <div key={post.title} className="flex items-start justify-between p-3 rounded-lg" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div>
                        <div className="text-xs font-semibold" style={{ color: '#1F2937' }}>{post.title}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{post.dept} · {post.views} views</div>
                      </div>
                      <span className="text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-2"
                        style={{ backgroundColor: post.badge === 'Pinned' ? '#CFFAFE' : post.badge === 'Action Required' ? '#FEF3C7' : '#FEE2E2', color: post.badge === 'Pinned' ? '#0891B2' : post.badge === 'Action Required' ? '#92400E' : '#991B1B' }}>
                        {post.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
                <Monitor className="w-3 h-3" /> Intranet Messaging
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1F2937' }}>A company feed your employees actually check</h2>
              <p className="mb-4" style={{ color: '#6B7280' }}>
                Post announcements directly to your company intranet feed — pinned, categorized, and searchable. Employees see what matters most, and you see who's engaged.
              </p>
              <ul className="space-y-2">
                {['Pinned & prioritized announcement feed', 'Department and role-based targeting', 'Post alongside email for maximum reach', 'View counts and engagement tracking', 'Acknowledgment-required posts with audit trail'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0891B2' }} />
                    <span className="text-sm" style={{ color: '#374151' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SMS */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
                <Smartphone className="w-3 h-3" /> SMS
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1F2937' }}>Reach every employee — even without email</h2>
              <p className="mb-4" style={{ color: '#6B7280' }}>
                For urgent alerts, shift changes, and time-sensitive notices, SMS cuts through the noise. Send to your entire workforce or specific groups — with 99%+ delivery rates and opt-out compliance built in.
              </p>
              <ul className="space-y-2">
                {['Broadcast SMS to all employees or segments', '99%+ delivery rate with carrier-grade infrastructure', 'Opt-out management and compliance tracking', 'Urgent alert mode for time-sensitive notices', 'Combine with email for multi-channel reach'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0891B2' }} />
                    <span className="text-sm" style={{ color: '#374151' }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* SMS product snippet */}
            <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: '#164E63' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: '#A5F3FC' }}>SMS Broadcast — Urgent Alert</span>
              </div>
              <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A' }}>
                  <div className="text-xs font-bold mb-1" style={{ color: '#92400E' }}> Urgent Alert</div>
                  <div className="text-sm font-medium" style={{ color: '#1F2937' }}>REMINDER: Open Enrollment closes Friday at 5pm. Log in to benefits portal to complete your selections.</div>
                  <div className="text-xs mt-2" style={{ color: '#6B7280' }}>Sent to: All Employees (1,240)</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Delivered', value: '1,237', color: '#10B981' },
                    { label: 'Delivery Rate', value: '99.8%', color: '#10B981' },
                    { label: 'Opt-Outs', value: '2', color: '#9CA3AF' },
                    { label: 'Sent At', value: '9:02 AM', color: '#0891B2' },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <div className="font-bold text-sm" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl p-10 text-center" style={{ backgroundColor: '#164E63' }}>
          <h2 className="text-3xl font-bold text-white mb-4">See all channels working together</h2>
          <p className="text-lg mb-8" style={{ color: '#A5F3FC' }}>
            Book a 30-minute demo and we'll show you email, intranet, and SMS in action with your own employee data.
          </p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-10 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
