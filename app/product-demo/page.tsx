import Link from 'next/link';
import {
  Mail, Monitor, Smartphone, Bell, CheckSquare, BarChart3,
  Users, Send, Shield, ArrowRight, ChevronRight, TrendingUp,
  FileText, Settings, Clock, AlertCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Design tokens ────────────────────────────────────────────────────
const C = {
  primary:      '#0795B7',
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

function Badge({ label, color = C.primary }: { label: string; color?: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ backgroundColor: color + '18', color }}>
      {label}
    </span>
  );
}

function FeatureCard({ icon: Icon, title, desc, bullets }: {
  icon: React.ElementType; title: string; desc: string; bullets: string[];
}) {
  return (
    <div className="rounded-2xl p-6 border" style={{ backgroundColor: C.card, borderColor: C.border }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: C.primaryLight }}>
        <Icon className="w-5 h-5" style={{ color: C.primary }} />
      </div>
      <h3 className="text-base font-semibold mb-2" style={{ color: C.navy }}>{title}</h3>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: C.slate }}>{desc}</p>
      <ul className="space-y-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm" style={{ color: C.slate }}>
            <CheckSquare className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: C.primary }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="py-20" style={{ backgroundColor: C.appBg }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge label="Platform Features" />
          <h1 className="text-5xl font-bold mt-4 mb-4 leading-tight" style={{ color: C.navy }}>
            Every channel your employees use.<br />
            <span style={{ color: C.primary }}>One platform to manage them all.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: C.slate }}>
            Dedicated Emailing gives HR, IT, and leadership teams a single place to send, track, and confirm internal communications — across email, intranet, and SMS.
          </p>
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            {[
              { icon: Mail,       label: 'Email' },
              { icon: Monitor,    label: 'Intranet' },
              { icon: Smartphone, label: 'SMS' },
              { icon: Bell,       label: 'Push Alerts' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                style={{ backgroundColor: C.card, color: C.primary, borderColor: C.border }}>
                <c.icon className="w-4 h-4" />
                {c.label}
              </div>
            ))}
          </div>
          <Link href="/demo"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: C.primary }}>
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Dashboard product snippet ── */}
      <section className="py-16 border-y" style={{ borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy }}>
              A communications dashboard built for operations teams
            </h2>
            <p className="text-lg" style={{ color: C.slate }}>
              See delivery rates, open rates, and acknowledgment status across every channel — in one view.
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-2xl overflow-hidden border shadow-2xl" style={{ borderColor: C.border }}>
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: C.navy }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded px-3 py-1 text-xs" style={{ backgroundColor: '#0E2233', color: C.muted }}>
                app.dedicatedemailing.com/dashboard
              </div>
            </div>

            {/* App content */}
            <div style={{ backgroundColor: C.appBg }}>
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-3 border-b" style={{ backgroundColor: C.card, borderColor: C.border }}>
                <div className="text-sm font-semibold" style={{ color: C.navy }}>Communications Overview</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: C.muted }}>October 2026 · All Departments</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                    style={{ backgroundColor: C.primary }}>
                    <Send className="w-3 h-3" /> Create Announcement
                  </button>
                </div>
              </div>

              <div className="p-5">
                {/* KPI row */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Messages Sent', value: '14,820', delta: '+8%', color: C.primary },
                    { label: 'Delivery Rate',  value: '99.1%',  delta: 'All channels', color: C.success },
                    { label: 'Acknowledgment Rate', value: '87%', delta: 'Critical notices', color: C.primary },
                    { label: 'Avg Open Rate', value: '71%', delta: 'vs 21% industry', color: C.success },
                  ].map((k) => (
                    <div key={k.label} className="rounded-xl p-3 border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                      <div className="text-xl font-bold" style={{ color: k.color }}>{k.value}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: C.navy }}>{k.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: k.color }}>{k.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="rounded-xl overflow-hidden border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                  <div className="grid grid-cols-12 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b"
                    style={{ color: C.muted, borderColor: C.border }}>
                    <div className="col-span-5">Announcement</div>
                    <div className="col-span-2 text-center">Channels</div>
                    <div className="col-span-2 text-center">Sent</div>
                    <div className="col-span-1 text-center">Ack</div>
                    <div className="col-span-2 text-right">Status</div>
                  </div>
                  {[
                    { name: 'Q4 All-Hands Meeting — Oct 28', ch: 'Email · Intranet', sent: '1,240', ack: '89%', status: 'Sent', sc: C.success },
                    { name: 'Open Enrollment Reminder', ch: 'Email · SMS', sent: '1,240', ack: '94%', status: 'Sent', sc: C.success },
                    { name: 'IT Security Policy Update', ch: 'Email · Intranet · SMS', sent: '1,240', ack: '76%', status: 'Pending Ack', sc: C.warning },
                    { name: 'Office Closure — Nov 11', ch: 'Email · Intranet', sent: '—', ack: '—', status: 'Scheduled', sc: C.primary },
                  ].map((row, i) => (
                    <div key={row.name} className="grid grid-cols-12 items-center px-4 py-3 border-t"
                      style={{ borderColor: C.border, backgroundColor: i % 2 === 0 ? C.card : C.appBg }}>
                      <div className="col-span-5">
                        <div className="text-sm font-medium" style={{ color: C.navy }}>{row.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: C.muted }}>{row.ch}</div>
                      </div>
                      <div className="col-span-2 flex justify-center gap-1">
                        {row.ch.includes('Email') && <Mail className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                        {row.ch.includes('Intranet') && <Monitor className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                        {row.ch.includes('SMS') && <Smartphone className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                      </div>
                      <div className="col-span-2 text-center text-sm" style={{ color: C.slate }}>{row.sent}</div>
                      <div className="col-span-1 text-center text-sm font-semibold" style={{ color: row.ack !== '—' ? C.success : C.muted }}>{row.ack}</div>
                      <div className="col-span-2 flex justify-end">
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: row.sc + '18', color: row.sc }}>{row.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core features grid ── */}
      <section className="py-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy }}>Everything you need to reach every employee</h2>
            <p className="text-lg" style={{ color: C.slate }}>Built for HR, People Ops, IT, and Leadership teams.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={Mail}
              title="Email Broadcasts"
              desc="Send branded company announcements with delivery tracking, open rates, and acknowledgment confirmation built in."
              bullets={['Drag-and-drop email composer', 'Per-message delivery and open tracking', 'Acknowledgment-required emails', 'Automated follow-up to non-openers']}
            />
            <FeatureCard
              icon={Monitor}
              title="Intranet Feed"
              desc="Post announcements to a pinned, prioritized company feed that employees actually check — with view counts and engagement data."
              bullets={['Pinned and prioritized posts', 'Department and role targeting', 'View counts and engagement tracking', 'Acknowledgment-required posts']}
            />
            <FeatureCard
              icon={Smartphone}
              title="SMS Broadcast"
              desc="Reach every employee instantly — including deskless and frontline workers — with 99%+ delivery rates and compliance built in."
              bullets={['Broadcast to all employees or segments', '99%+ delivery rate', 'Opt-out management and compliance', 'Urgent alert mode']}
            />
            <FeatureCard
              icon={CheckSquare}
              title="Acknowledgment Tracking"
              desc="Request confirmation that employees have read critical policies, compliance notices, and important updates — with a full audit trail."
              bullets={['One-click employee acknowledgment', 'Real-time confirmation tracking', 'Automated reminders to non-responders', 'Compliance audit trail and exports']}
            />
            <FeatureCard
              icon={BarChart3}
              title="Engagement Analytics"
              desc="See delivery rates, open rates, and acknowledgment rates across every channel and department — in one dashboard."
              bullets={['Cross-channel analytics dashboard', 'Department-level engagement reports', 'Non-opener follow-up lists', 'Acknowledgment rate by team']}
            />
            <FeatureCard
              icon={Users}
              title="Employee Targeting"
              desc="Send to your entire company or target specific departments, locations, and roles — synced directly from your HR directory."
              bullets={['HR directory and HRIS sync', 'Target by department, location, or role', 'Custom employee segments', 'All-company broadcast']}
            />
          </div>
        </div>
      </section>

      {/* ── Channel deep-dives ── */}
      <section className="py-20" style={{ backgroundColor: C.appBg }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Email */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge label="Email" />
              <h2 className="text-3xl font-bold mt-4 mb-3" style={{ color: C.navy }}>
                Dedicated email that actually gets read
              </h2>
              <p className="text-base mb-5 leading-relaxed" style={{ color: C.slate }}>
                Unlike Outlook or Gmail, Dedicated Emailing shows you exactly who opened, clicked, and acknowledged every message — so you know your communications landed.
              </p>
              <ul className="space-y-2.5">
                {['Drag-and-drop email composer with templates', 'Real-time delivery and open rate tracking', 'Acknowledgment-required emails for compliance', 'Automated follow-up to non-openers', 'Syncs with your HR directory or HRIS'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: C.slate }}>
                    <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Email snippet */}
            <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: C.border }}>
              <div className="px-4 py-2.5 border-b flex items-center justify-between" style={{ borderColor: C.border, backgroundColor: C.card }}>
                <span className="text-sm font-semibold" style={{ color: C.navy }}>Q4 All-Hands Meeting</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: C.success + '18', color: C.success }}>Sent</span>
              </div>
              <div className="p-4" style={{ backgroundColor: C.card }}>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'Delivered', value: '1,240', color: C.success },
                    { label: 'Opened',    value: '71%',   color: C.primary },
                    { label: 'Acknowledged', value: '89%', color: C.primary },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: C.appBg }}>
                      <div className="text-lg font-bold" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: C.muted }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl p-3" style={{ backgroundColor: C.primaryLight, border: `1px solid ${C.border}` }}>
                  <div className="text-xs font-semibold mb-1.5" style={{ color: C.primary }}>Acknowledgment Progress</div>
                  <div className="h-2 rounded-full mb-1.5" style={{ backgroundColor: C.border }}>
                    <div className="h-2 rounded-full" style={{ width: '89%', backgroundColor: C.success }} />
                  </div>
                  <div className="text-xs" style={{ color: C.slate }}>1,104 of 1,240 confirmed · 136 pending · Auto-reminder sent</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intranet */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Intranet snippet */}
            <div className="rounded-2xl overflow-hidden border shadow-lg order-2 md:order-1" style={{ borderColor: C.border }}>
              <div className="px-4 py-2.5 border-b" style={{ borderColor: C.border, backgroundColor: C.card }}>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: C.muted }}>Company Feed — Pinned</span>
              </div>
              <div className="p-4 space-y-2.5" style={{ backgroundColor: C.card }}>
                {[
                  { title: 'Q4 All-Hands — Agenda and Zoom Link', dept: 'Leadership', views: '1,102', badge: 'Pinned', bc: C.primary },
                  { title: 'Open Enrollment Closes Nov 15', dept: 'HR · Benefits', views: '987', badge: 'Action Required', bc: C.warning },
                  { title: 'New IT Security Policy — Please Read', dept: 'IT', views: '743', badge: 'Ack Required', bc: C.error },
                ].map((post) => (
                  <div key={post.title} className="flex items-start justify-between p-3 rounded-xl border"
                    style={{ backgroundColor: C.appBg, borderColor: C.border }}>
                    <div className="flex-1 min-w-0 mr-3">
                      <div className="text-sm font-medium truncate" style={{ color: C.navy }}>{post.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: C.muted }}>{post.dept} · {post.views} views</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0"
                      style={{ backgroundColor: post.bc + '18', color: post.bc }}>{post.badge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Badge label="Intranet Messaging" />
              <h2 className="text-3xl font-bold mt-4 mb-3" style={{ color: C.navy }}>
                A company feed employees actually check
              </h2>
              <p className="text-base mb-5 leading-relaxed" style={{ color: C.slate }}>
                Post announcements directly to your company intranet — pinned, categorized, and searchable. Employees see what matters most, and you see who's engaged.
              </p>
              <ul className="space-y-2.5">
                {['Pinned and prioritized announcement feed', 'Department and role-based targeting', 'Post alongside email for maximum reach', 'View counts and engagement tracking', 'Acknowledgment-required posts with audit trail'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: C.slate }}>
                    <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SMS */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge label="SMS" />
              <h2 className="text-3xl font-bold mt-4 mb-3" style={{ color: C.navy }}>
                Reach every employee — even without email
              </h2>
              <p className="text-base mb-5 leading-relaxed" style={{ color: C.slate }}>
                For urgent alerts, shift changes, and time-sensitive notices, SMS cuts through the noise. 99%+ delivery rates, opt-out compliance, and no app required.
              </p>
              <ul className="space-y-2.5">
                {['Broadcast SMS to all employees or segments', '99%+ delivery rate with carrier-grade infrastructure', 'Opt-out management and compliance tracking', 'Urgent alert mode for time-sensitive notices', 'Combine with email for multi-channel reach'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: C.slate }}>
                    <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* SMS snippet */}
            <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: C.border }}>
              <div className="px-4 py-2.5 border-b flex items-center gap-2" style={{ borderColor: C.border, backgroundColor: C.card }}>
                <AlertCircle className="w-4 h-4" style={{ color: C.warning }} />
                <span className="text-sm font-semibold" style={{ color: C.navy }}>Urgent Alert — All Employees</span>
              </div>
              <div className="p-4" style={{ backgroundColor: C.card }}>
                <div className="rounded-xl p-3 mb-4 border" style={{ backgroundColor: '#FFF8EC', borderColor: '#F5D99A' }}>
                  <div className="text-xs font-semibold mb-1" style={{ color: C.warning }}>Urgent — All Employees (1,240)</div>
                  <div className="text-sm" style={{ color: C.navy }}>REMINDER: Open Enrollment closes Friday at 5pm. Complete your selections at benefits.company.com</div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Delivered', value: '1,237', color: C.success },
                    { label: 'Delivery Rate', value: '99.8%', color: C.success },
                    { label: 'Opt-Outs', value: '2', color: C.muted },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: C.appBg }}>
                      <div className="text-lg font-bold" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: C.muted }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Acknowledgment deep-dive ── */}
      <section className="py-20 border-t" style={{ borderColor: C.border, backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Ack snippet */}
            <div className="rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: C.border }}>
              <div className="px-4 py-2.5 border-b flex items-center gap-2" style={{ borderColor: C.border, backgroundColor: C.card }}>
                <CheckSquare className="w-4 h-4" style={{ color: C.primary }} />
                <span className="text-sm font-semibold" style={{ color: C.navy }}>Acknowledgment Tracker</span>
              </div>
              <div className="p-4" style={{ backgroundColor: C.card }}>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: C.navy }}>IT Security Policy Update</span>
                    <span className="text-sm font-bold" style={{ color: C.success }}>76%</span>
                  </div>
                  <div className="h-2.5 rounded-full mb-1.5" style={{ backgroundColor: C.border }}>
                    <div className="h-2.5 rounded-full" style={{ width: '76%', backgroundColor: C.success }} />
                  </div>
                  <div className="text-xs" style={{ color: C.muted }}>942 of 1,240 confirmed · 298 pending · Auto-reminder sent</div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Sarah M.', dept: 'Engineering', ok: true,  time: '2 min ago' },
                    { name: 'James T.', dept: 'HR',          ok: true,  time: '5 min ago' },
                    { name: 'Priya K.', dept: 'Finance',     ok: false, time: 'Reminder sent' },
                    { name: 'Marcus L.',dept: 'Sales',       ok: false, time: 'Reminder sent' },
                  ].map((emp) => (
                    <div key={emp.name} className="flex items-center justify-between py-2 border-t" style={{ borderColor: C.border }}>
                      <div>
                        <div className="text-sm font-medium" style={{ color: C.navy }}>{emp.name}</div>
                        <div className="text-xs" style={{ color: C.muted }}>{emp.dept}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-semibold" style={{ color: emp.ok ? C.success : C.warning }}>
                          {emp.ok ? 'Acknowledged' : 'Pending'}
                        </div>
                        <div className="text-xs" style={{ color: C.muted }}>{emp.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Badge label="Acknowledgment Tracking" />
              <h2 className="text-3xl font-bold mt-4 mb-3" style={{ color: C.navy }}>
                Know who read it. Prove it.
              </h2>
              <p className="text-base mb-5 leading-relaxed" style={{ color: C.slate }}>
                For compliance notices, policy updates, and critical announcements, acknowledgment tracking gives you a timestamped record of who confirmed — and automatically follows up with those who haven't.
              </p>
              <ul className="space-y-2.5">
                {['One-click employee acknowledgment', 'Real-time confirmation tracking per message', 'Automated reminders to non-responders', 'Compliance audit trail with timestamps', 'Export reports for HR and legal'].map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: C.slate }}>
                    <CheckSquare className="w-4 h-4 flex-shrink-0" style={{ color: C.primary }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See every feature in action</h2>
          <p className="text-lg mb-8" style={{ color: '#8BA3B8' }}>
            Book a 30-minute demo and we'll walk you through email, intranet, SMS, and acknowledgment tracking with your own employee data.
          </p>
          <Link href="/demo"
            className="inline-flex items-center gap-2 px-10 py-4 text-white text-lg font-semibold rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: C.primary }}>
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
