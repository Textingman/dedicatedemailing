'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard, Send, Monitor, Smartphone, CheckSquare, BarChart3,
  Users, Settings, Bell, Search, ChevronRight, ArrowUpRight, Lock,
  Mail, TrendingUp, AlertCircle, Clock, ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Design tokens ────────────────────────────────────────────────────
const C = {
  primary:      '#0795B7',
  primaryHover: '#087F9D',
  primaryLight: '#E4F8FB',
  navy:         '#17283B',
  slate:        '#617488',
  muted:        '#9BA8B6',
  appBg:        '#F4F8FA',
  card:         '#FFFFFF',
  border:       '#E3EAF0',
  success:      '#0FAF83',
  warning:      '#E79B22',
  error:        '#DC5661',
};

// ─── Sidebar nav items ────────────────────────────────────────────────
const navItems = [
  { icon: LayoutDashboard, label: 'Overview',        active: true },
  { icon: Send,            label: 'Campaigns',       active: false },
  { icon: Users,           label: 'Employees',       active: false },
  { icon: BarChart3,       label: 'Analytics',       active: false },
  { icon: CheckSquare,     label: 'Acknowledgments', active: false },
];

// ─── KPI cards ────────────────────────────────────────────────────────
const kpis = [
  { label: 'Messages Sent',      value: '14,820', delta: '+8% vs last month', color: C.primary,  icon: Send },
  { label: 'Delivery Rate',      value: '99.1%',  delta: 'All channels',      color: C.success,  icon: TrendingUp },
  { label: 'Acknowledgment Rate',value: '87%',    delta: 'Critical notices',  color: C.primary,  icon: CheckSquare },
  { label: 'Avg Open Rate',      value: '71%',    delta: 'vs 21% industry',   color: C.success,  icon: BarChart3 },
];

// ─── Recent announcements ─────────────────────────────────────────────
const announcements = [
  { name: 'Q4 All-Hands Meeting — Oct 28',  channels: 'Email · Intranet', sent: '1,240', ack: '89%', status: 'Sent',      statusColor: C.success },
  { name: 'Open Enrollment Reminder',        channels: 'Email · SMS',      sent: '1,240', ack: '94%', status: 'Sent',      statusColor: C.success },
  { name: 'IT Security Policy Update',       channels: 'Email · Intranet · SMS', sent: '1,240', ack: '76%', status: 'Pending Ack', statusColor: C.warning },
  { name: 'Office Closure — Nov 11',         channels: 'Email · Intranet', sent: '—',     ack: '—',   status: 'Scheduled', statusColor: C.primary },
];

// ─── Channel performance bars ─────────────────────────────────────────
const channels = [
  { label: 'Email',    icon: Mail,       open: 71, ack: 89, color: C.primary },
  { label: 'Intranet', icon: Monitor,    open: 64, ack: 82, color: C.primary },
  { label: 'SMS',      icon: Smartphone, open: 94, ack: 91, color: C.success },
];

function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ backgroundColor: color + '18', color }}>
      {label}
    </span>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border ${className}`}
      style={{ backgroundColor: C.card, borderColor: C.border }}>
      {children}
    </div>
  );
}

function CardHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: C.border }}>
      <span className="text-sm font-semibold" style={{ color: C.navy }}>{title}</span>
      {action}
    </div>
  );
}

export default function ProductDemoPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* ── Marketing hero above the app shell ── */}
      <section className="py-14 border-b" style={{ backgroundColor: '#F4F8FA', borderColor: C.border }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ backgroundColor: C.primaryLight, color: C.primary }}>
            Platform Preview
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: C.navy }}>
            One platform. Every channel.<br />
            <span style={{ color: C.primary }}>All your internal communications.</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: C.slate }}>
            Dedicated Emailing unifies email, intranet messaging, and SMS into a single hub — with delivery tracking, acknowledgment confirmation, and engagement analytics built in.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { icon: Mail,       label: 'Email' },
              { icon: Monitor,    label: 'Intranet' },
              { icon: Smartphone, label: 'SMS' },
              { icon: Bell,       label: 'Push Alerts' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border"
                style={{ backgroundColor: '#FFFFFF', color: C.primary, borderColor: C.border }}>
                <c.icon className="w-3.5 h-3.5" />
                {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Shell ── */}
      <div className="border-b" style={{ borderColor: C.border, backgroundColor: C.appBg }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex" style={{ minHeight: '680px' }}>

            {/* ── Left Sidebar ── */}
            <aside className="w-56 flex-shrink-0 border-r flex flex-col"
              style={{ backgroundColor: C.card, borderColor: C.border }}>
              {/* Logo area */}
              <div className="px-4 py-4 border-b" style={{ borderColor: C.border }}>
                <div className="flex items-center gap-2">
                  <Image src="/favicon.png" alt="Dedicated Emailing" width={28} height={28} className="rounded" />
                  <span className="text-sm font-semibold" style={{ color: C.navy }}>Dedicated Emailing</span>
                </div>
              </div>

              {/* Nav */}
              <nav className="flex-1 px-3 py-4 space-y-0.5">
                <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.muted }}>Workspace</p>
                {navItems.map((item) => (
                  <div key={item.label}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-default text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: item.active ? C.primaryLight : 'transparent',
                      color: item.active ? C.primary : C.slate,
                    }}>
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    {item.label}
                  </div>
                ))}
                <div className="pt-4">
                  <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: C.muted }}>Administration</p>
                  <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-default text-sm font-medium"
                    style={{ color: C.slate }}>
                    <Settings className="w-4 h-4 flex-shrink-0" />
                    Settings
                  </div>
                </div>
              </nav>

              {/* Org footer */}
              <div className="px-3 py-3 border-t" style={{ borderColor: C.border }}>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-default"
                  style={{ backgroundColor: C.appBg }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: C.primary }}>A</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold truncate" style={{ color: C.navy }}>Acme Corp</div>
                    <div className="text-xs truncate" style={{ color: C.muted }}>1,240 employees</div>
                  </div>
                  <ChevronDown className="w-3 h-3 flex-shrink-0" style={{ color: C.muted }} />
                </div>
              </div>
            </aside>

            {/* ── Main Content ── */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Top Header */}
              <header className="h-14 flex items-center justify-between px-6 border-b flex-shrink-0"
                style={{ backgroundColor: C.card, borderColor: C.border }}>
                <div className="flex items-center gap-1.5 text-sm" style={{ color: C.muted }}>
                  <span>Workspace</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="font-medium" style={{ color: C.navy }}>Overview</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm"
                    style={{ borderColor: C.border, color: C.muted, backgroundColor: C.appBg }}>
                    <Search className="w-3.5 h-3.5" />
                    <span>Search...</span>
                  </div>
                  <div className="relative">
                    <Bell className="w-4.5 h-4.5" style={{ color: C.slate }} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full" style={{ backgroundColor: C.error }} />
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: C.primary }}>JD</div>
                </div>
              </header>

              {/* Page content */}
              <div className="flex-1 p-6 overflow-auto" style={{ backgroundColor: C.appBg }}>

                {/* Page title + CTA */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: C.navy }}>Communications Overview</h2>
                    <p className="text-sm mt-0.5" style={{ color: C.muted }}>October 2026 · All Departments</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: C.primary }}>
                    <Send className="w-3.5 h-3.5" />
                    Create Announcement
                  </button>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                  {kpis.map((k) => (
                    <Card key={k.label} className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: k.color + '15' }}>
                          <k.icon className="w-4 h-4" style={{ color: k.color }} />
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5" style={{ color: C.muted }} />
                      </div>
                      <div className="text-2xl font-bold mb-0.5" style={{ color: C.navy }}>{k.value}</div>
                      <div className="text-xs font-medium mb-0.5" style={{ color: C.slate }}>{k.label}</div>
                      <div className="text-xs" style={{ color: k.color }}>{k.delta}</div>
                    </Card>
                  ))}
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-3 gap-4">

                  {/* Announcements table — 2/3 */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader
                        title="Recent Announcements"
                        action={
                          <Link href="/demo" className="text-xs font-medium flex items-center gap-1"
                            style={{ color: C.primary }}>
                            View all <ChevronRight className="w-3 h-3" />
                          </Link>
                        }
                      />
                      <div className="divide-y" style={{ borderColor: C.border }}>
                        {/* Table header */}
                        <div className="grid grid-cols-12 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider"
                          style={{ color: C.muted }}>
                          <div className="col-span-5">Announcement</div>
                          <div className="col-span-2 text-center">Channels</div>
                          <div className="col-span-2 text-center">Sent</div>
                          <div className="col-span-1 text-center">Ack</div>
                          <div className="col-span-2 text-right">Status</div>
                        </div>
                        {announcements.map((row) => (
                          <div key={row.name} className="grid grid-cols-12 items-center px-5 py-3 hover:bg-gray-50 transition-colors">
                            <div className="col-span-5">
                              <div className="text-sm font-medium truncate" style={{ color: C.navy }}>{row.name}</div>
                              <div className="text-xs mt-0.5" style={{ color: C.muted }}>{row.channels}</div>
                            </div>
                            <div className="col-span-2 flex justify-center gap-1">
                              {row.channels.includes('Email') && <Mail className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                              {row.channels.includes('Intranet') && <Monitor className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                              {row.channels.includes('SMS') && <Smartphone className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                            </div>
                            <div className="col-span-2 text-center text-sm" style={{ color: C.slate }}>{row.sent}</div>
                            <div className="col-span-1 text-center text-sm font-semibold" style={{ color: row.ack !== '—' ? C.success : C.muted }}>{row.ack}</div>
                            <div className="col-span-2 flex justify-end">
                              <StatusBadge label={row.status} color={row.statusColor} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Right column — 1/3 */}
                  <div className="space-y-4">

                    {/* Channel performance */}
                    <Card>
                      <CardHeader title="Channel Performance" />
                      <div className="p-5 space-y-4">
                        {channels.map((ch) => (
                          <div key={ch.label}>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <ch.icon className="w-3.5 h-3.5" style={{ color: ch.color }} />
                                <span className="text-sm font-medium" style={{ color: C.navy }}>{ch.label}</span>
                              </div>
                              <span className="text-xs font-semibold" style={{ color: ch.color }}>{ch.open}% open</span>
                            </div>
                            <div className="h-1.5 rounded-full mb-1" style={{ backgroundColor: C.border }}>
                              <div className="h-1.5 rounded-full transition-all" style={{ width: `${ch.open}%`, backgroundColor: ch.color }} />
                            </div>
                            <div className="text-xs" style={{ color: C.muted }}>{ch.ack}% acknowledged</div>
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Acknowledgment tracker */}
                    <Card>
                      <CardHeader title="Acknowledgment Tracker" />
                      <div className="p-5">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-medium" style={{ color: C.navy }}>IT Security Policy</span>
                            <span className="text-xs font-bold" style={{ color: C.success }}>76%</span>
                          </div>
                          <div className="h-2 rounded-full" style={{ backgroundColor: C.border }}>
                            <div className="h-2 rounded-full" style={{ width: '76%', backgroundColor: C.success }} />
                          </div>
                          <div className="text-xs mt-1" style={{ color: C.muted }}>942 of 1,240 confirmed · 298 pending</div>
                        </div>
                        <div className="space-y-2 mt-4">
                          {[
                            { name: 'Sarah M.', dept: 'Engineering', ok: true,  time: '2 min ago' },
                            { name: 'James T.', dept: 'HR',          ok: true,  time: '5 min ago' },
                            { name: 'Priya K.', dept: 'Finance',     ok: false, time: 'Pending' },
                            { name: 'Marcus L.',dept: 'Sales',       ok: false, time: 'Pending' },
                          ].map((emp) => (
                            <div key={emp.name} className="flex items-center justify-between py-1.5 border-t" style={{ borderColor: C.border }}>
                              <div>
                                <div className="text-xs font-medium" style={{ color: C.navy }}>{emp.name}</div>
                                <div className="text-xs" style={{ color: C.muted }}>{emp.dept}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-medium" style={{ color: emp.ok ? C.success : C.warning }}>
                                  {emp.ok ? 'Acknowledged' : 'Pending'}
                                </div>
                                <div className="text-xs" style={{ color: C.muted }}>{emp.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>

                    {/* CTA card */}
                    <div className="rounded-xl p-5 text-center" style={{ backgroundColor: C.navy }}>
                      <Lock className="w-6 h-6 text-white mx-auto mb-2" />
                      <h3 className="text-sm font-bold text-white mb-1">Unlock Full Platform</h3>
                      <p className="text-xs mb-3" style={{ color: '#8BA3B8' }}>
                        Book a 30-min demo to see email, intranet, and SMS working together with your own data.
                      </p>
                      <Link href="/demo"
                        className="block w-full py-2 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90"
                        style={{ backgroundColor: C.primary }}>
                        Book a Demo
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── Feature deep-dives ── */}
                <div className="mt-10 space-y-10">

                  {/* Email */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                        style={{ backgroundColor: C.primaryLight, color: C.primary }}>
                        <Mail className="w-3 h-3" /> Email
                      </div>
                      <h2 className="text-2xl font-bold mb-3" style={{ color: C.navy }}>Dedicated email that actually gets read</h2>
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: C.slate }}>
                        Send branded company announcements, HR notices, and compliance updates via email — with real-time delivery tracking, open rates, and acknowledgment confirmation.
                      </p>
                      <ul className="space-y-2">
                        {['Drag-and-drop email composer with templates', 'Delivery and open rate tracking per message', 'Acknowledgment-required emails for compliance', 'Automated follow-up to non-openers', 'Syncs with your HR directory or HRIS'].map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                            <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Card>
                      <div className="px-4 py-2.5 border-b flex items-center justify-between" style={{ borderColor: C.border }}>
                        <span className="text-sm font-semibold" style={{ color: C.navy }}>Q4 All-Hands Meeting</span>
                        <StatusBadge label="Sent" color={C.success} />
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {[
                            { label: 'Delivered', value: '1,240', color: C.success },
                            { label: 'Opened',    value: '71%',   color: C.primary },
                            { label: 'Acknowledged', value: '89%', color: C.primary },
                          ].map((m) => (
                            <div key={m.label} className="text-center p-2.5 rounded-lg" style={{ backgroundColor: C.appBg }}>
                              <div className="text-base font-bold" style={{ color: m.color }}>{m.value}</div>
                              <div className="text-xs mt-0.5" style={{ color: C.muted }}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-lg p-3" style={{ backgroundColor: C.primaryLight, border: `1px solid ${C.border}` }}>
                          <div className="text-xs font-semibold mb-1.5" style={{ color: C.primary }}>Acknowledgment Progress</div>
                          <div className="h-2 rounded-full mb-1.5" style={{ backgroundColor: C.border }}>
                            <div className="h-2 rounded-full" style={{ width: '89%', backgroundColor: C.success }} />
                          </div>
                          <div className="text-xs" style={{ color: C.slate }}>1,104 of 1,240 confirmed · 136 pending · Auto-reminder sent</div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Intranet */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Card className="order-2 md:order-1">
                      <div className="px-4 py-2.5 border-b" style={{ borderColor: C.border }}>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: C.muted }}>Pinned Announcements</span>
                      </div>
                      <div className="p-4 space-y-2">
                        {[
                          { title: 'Q4 All-Hands — Agenda and Zoom Link', dept: 'Leadership', views: '1,102', badge: 'Pinned',          badgeColor: C.primary },
                          { title: 'Open Enrollment Closes Nov 15',        dept: 'HR · Benefits', views: '987', badge: 'Action Required', badgeColor: C.warning },
                          { title: 'New IT Security Policy — Please Read', dept: 'IT',          views: '743', badge: 'Ack Required',    badgeColor: C.error },
                        ].map((post) => (
                          <div key={post.title} className="flex items-start justify-between p-3 rounded-lg border"
                            style={{ backgroundColor: C.appBg, borderColor: C.border }}>
                            <div className="flex-1 min-w-0 mr-2">
                              <div className="text-sm font-medium truncate" style={{ color: C.navy }}>{post.title}</div>
                              <div className="text-xs mt-0.5" style={{ color: C.muted }}>{post.dept} · {post.views} views</div>
                            </div>
                            <StatusBadge label={post.badge} color={post.badgeColor} />
                          </div>
                        ))}
                      </div>
                    </Card>
                    <div className="order-1 md:order-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                        style={{ backgroundColor: C.primaryLight, color: C.primary }}>
                        <Monitor className="w-3 h-3" /> Intranet Messaging
                      </div>
                      <h2 className="text-2xl font-bold mb-3" style={{ color: C.navy }}>A company feed your employees actually check</h2>
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: C.slate }}>
                        Post announcements directly to your company intranet feed — pinned, categorized, and searchable. Employees see what matters most, and you see who's engaged.
                      </p>
                      <ul className="space-y-2">
                        {['Pinned and prioritized announcement feed', 'Department and role-based targeting', 'Post alongside email for maximum reach', 'View counts and engagement tracking', 'Acknowledgment-required posts with audit trail'].map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                            <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* SMS */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                        style={{ backgroundColor: C.primaryLight, color: C.primary }}>
                        <Smartphone className="w-3 h-3" /> SMS
                      </div>
                      <h2 className="text-2xl font-bold mb-3" style={{ color: C.navy }}>Reach every employee — even without email</h2>
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: C.slate }}>
                        For urgent alerts, shift changes, and time-sensitive notices, SMS cuts through the noise. Send to your entire workforce or specific groups — with 99%+ delivery rates and opt-out compliance built in.
                      </p>
                      <ul className="space-y-2">
                        {['Broadcast SMS to all employees or segments', '99%+ delivery rate with carrier-grade infrastructure', 'Opt-out management and compliance tracking', 'Urgent alert mode for time-sensitive notices', 'Combine with email for multi-channel reach'].map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm" style={{ color: C.slate }}>
                            <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Card>
                      <div className="px-4 py-2.5 border-b flex items-center gap-2" style={{ borderColor: C.border }}>
                        <AlertCircle className="w-4 h-4" style={{ color: C.warning }} />
                        <span className="text-sm font-semibold" style={{ color: C.navy }}>Urgent Alert — All Employees</span>
                      </div>
                      <div className="p-4">
                        <div className="rounded-lg p-3 mb-4 border" style={{ backgroundColor: '#FFF8EC', borderColor: '#F5D99A' }}>
                          <div className="text-xs font-semibold mb-1" style={{ color: C.warning }}>Urgent — All Employees (1,240)</div>
                          <div className="text-sm" style={{ color: C.navy }}>REMINDER: Open Enrollment closes Friday at 5pm. Complete your selections at benefits.company.com</div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { label: 'Delivered',      value: '1,237',  color: C.success },
                            { label: 'Delivery Rate',  value: '99.8%',  color: C.success },
                            { label: 'Opt-Outs',       value: '2',      color: C.muted },
                          ].map((m) => (
                            <div key={m.label} className="text-center p-2.5 rounded-lg" style={{ backgroundColor: C.appBg }}>
                              <div className="text-base font-bold" style={{ color: m.color }}>{m.value}</div>
                              <div className="text-xs mt-0.5" style={{ color: C.muted }}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 rounded-2xl p-10 text-center" style={{ backgroundColor: C.navy }}>
                  <h2 className="text-2xl font-bold text-white mb-3">See all channels working together</h2>
                  <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: '#8BA3B8' }}>
                    Book a 30-minute demo and we'll show you email, intranet, and SMS in action with your own employee data.
                  </p>
                  <Link href="/demo"
                    className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: C.primary }}>
                    Book a Demo
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
