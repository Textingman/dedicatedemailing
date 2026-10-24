import Link from 'next/link';
import {
  ArrowRight, BarChart3, CheckSquare, Mail, Monitor,
  Smartphone, Users, Shield, FileText, Send, TrendingUp, MessageSquare
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ─── Enterprise Design Tokens ─────────────────────────────────────────
const C = {
  primary:      '#0795B7',
  primaryLight: '#EBF8FC',
  navy:         '#0F1E2E',
  slate:        '#4A5E72',
  muted:        '#8A9BAD',
  appBg:        '#F6F8FA',
  card:         '#FFFFFF',
  border:       '#DDE4EC',
  success:      '#0D9E76',
  warning:      '#C47D0E',
};

// ─── Numbered bullet list — replaces generic icon bullets ─────────────
function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-5 h-5 rounded text-xs font-bold flex items-center justify-center mt-0.5"
            style={{ backgroundColor: C.primaryLight, color: C.primary }}>
            {i + 1}
          </span>
          <span className="text-sm leading-relaxed" style={{ color: C.slate }}>{item}</span>
        </li>
      ))}
    </ol>
  );
}

// ─── Feature card with numbered bullets ───────────────────────────────
function FeatureCard({ icon: Icon, title, desc, bullets }: {
  icon: React.ElementType; title: string; desc: string; bullets: string[];
}) {
  return (
    <div className="p-7 border rounded-lg" style={{ backgroundColor: C.card, borderColor: C.border }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: C.primaryLight }}>
          <Icon className="w-4.5 h-4.5" style={{ color: C.primary }} />
        </div>
        <h3 className="text-base font-semibold" style={{ color: C.navy }}>{title}</h3>
      </div>
      <p className="text-sm mb-5 leading-relaxed" style={{ color: C.slate }}>{desc}</p>
      <NumberedList items={bullets} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="py-24 border-b" style={{ backgroundColor: C.appBg, borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold tracking-wide uppercase mb-6"
              style={{ backgroundColor: C.primaryLight, color: C.primary }}>
              Internal Communications Platform
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-5" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              The communications platform built for HR and operations teams.
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: C.slate }}>
              Dedicated Emailing gives HR, IT, and leadership a single place to send targeted company communications, measure engagement, and confirm that critical notices have been read.
            </p>
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <Link href="/demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: C.primary }}>
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/product-demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-md border transition-colors hover:opacity-80"
                style={{ color: C.navy, borderColor: C.border, backgroundColor: C.card }}>
                See Features
              </Link>
            </div>
            {/* Stat row */}
            <div className="flex items-center gap-8 flex-wrap pt-6 border-t" style={{ borderColor: C.border }}>
              {[
                { value: '99.1%', label: 'Delivery rate' },
                { value: '71%',   label: 'Average open rate' },
                { value: '87%',   label: 'Acknowledgment rate' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ color: C.primary }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: C.muted }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard mockup ── */}
      <section className="py-20 border-b" style={{ borderColor: C.border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              One dashboard for every communication
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.slate }}>
              See delivery rates, open rates, and acknowledgment status across every channel — in one view.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border shadow-xl" style={{ borderColor: C.border }}>
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: C.navy }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded px-3 py-1 text-xs" style={{ backgroundColor: '#0A1520', color: C.muted }}>
                app.dedicatedemailing.com/dashboard
              </div>
            </div>
            {/* App content */}
            <div style={{ backgroundColor: C.appBg }}>
              <div className="flex items-center justify-between px-6 py-3 border-b" style={{ backgroundColor: C.card, borderColor: C.border }}>
                <div className="text-sm font-semibold" style={{ color: C.navy }}>Communications Overview</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: C.muted }}>October 2026 · All Departments</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-white"
                    style={{ backgroundColor: C.primary }}>
                    <Send className="w-3 h-3" /> Create Announcement
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: 'Messages Sent',       value: '14,820', sub: '+8% this month',    color: C.primary },
                    { label: 'Delivery Rate',        value: '99.1%',  sub: 'All channels',      color: C.success },
                    { label: 'Acknowledgment Rate',  value: '87%',    sub: 'Critical notices',  color: C.primary },
                    { label: 'Avg Open Rate',        value: '71%',    sub: 'vs 21% industry',   color: C.success },
                  ].map((k) => (
                    <div key={k.label} className="rounded-md p-3 border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                      <div className="text-xl font-bold" style={{ color: k.color }}>{k.value}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: C.navy }}>{k.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: C.muted }}>{k.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-md overflow-hidden border" style={{ backgroundColor: C.card, borderColor: C.border }}>
                  <div className="grid grid-cols-12 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b"
                    style={{ color: C.muted, borderColor: C.border }}>
                    <div className="col-span-5">Announcement</div>
                    <div className="col-span-2 text-center">Channels</div>
                    <div className="col-span-2 text-center">Sent</div>
                    <div className="col-span-1 text-center">Ack</div>
                    <div className="col-span-2 text-right">Status</div>
                  </div>
                  {[
                    { name: 'Q4 All-Hands Meeting — Oct 28',  ch: 'Email · Intranet',       sent: '1,240', ack: '89%', status: 'Sent',        sc: C.success },
                    { name: 'Open Enrollment Reminder',        ch: 'Email · SMS',            sent: '1,240', ack: '94%', status: 'Sent',        sc: C.success },
                    { name: 'IT Security Policy Update',       ch: 'Email · Intranet · SMS', sent: '1,240', ack: '76%', status: 'Pending Ack', sc: C.warning },
                    { name: 'Office Closure — Nov 11',         ch: 'Email · Intranet',       sent: '—',     ack: '—',   status: 'Scheduled',   sc: C.primary },
                  ].map((row, i) => (
                    <div key={row.name} className="grid grid-cols-12 items-center px-4 py-3 border-t"
                      style={{ borderColor: C.border, backgroundColor: i % 2 === 0 ? C.card : C.appBg }}>
                      <div className="col-span-5">
                        <div className="text-sm font-medium" style={{ color: C.navy }}>{row.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: C.muted }}>{row.ch}</div>
                      </div>
                      <div className="col-span-2 flex justify-center gap-1">
                        {row.ch.includes('Email')    && <Mail       className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                        {row.ch.includes('Intranet') && <Monitor    className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                        {row.ch.includes('SMS')      && <Smartphone className="w-3.5 h-3.5" style={{ color: C.muted }} />}
                      </div>
                      <div className="col-span-2 text-center text-sm" style={{ color: C.slate }}>{row.sent}</div>
                      <div className="col-span-1 text-center text-sm font-semibold"
                        style={{ color: row.ack !== '—' ? C.success : C.muted }}>{row.ack}</div>
                      <div className="col-span-2 flex justify-end">
                        <span className="px-2 py-0.5 rounded text-xs font-semibold"
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

      {/* ── Why not just use email ── */}
      <section className="py-20 border-b" style={{ borderColor: C.border, backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              Why not just use Outlook or Gmail?
            </h2>
            <p className="text-base" style={{ color: C.slate }}>
              Regular email lets you send announcements. Dedicated Emailing lets you <em>manage</em> them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: 'No visibility',
                problem: 'With regular email, you never know if employees actually read the message.',
                solution: 'Dedicated Emailing shows delivery rates, open rates, and who acknowledged each communication.',
              },
              {
                label: 'No targeting',
                problem: 'Sending to the right people means manually managing distribution lists.',
                solution: 'Smart employee groups let you target by department, location, role, or any custom segment.',
              },
              {
                label: 'No accountability',
                problem: 'Critical policy updates and compliance notices have no confirmation trail.',
                solution: 'Acknowledgment tracking lets employees confirm they\'ve read important communications — with a full audit trail.',
              },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-lg border" style={{ backgroundColor: C.appBg, borderColor: C.border }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.muted }}>{item.label}</div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: C.slate }}>{item.problem}</p>
                <div className="h-px mb-4" style={{ backgroundColor: C.border }} />
                <p className="text-sm leading-relaxed font-medium" style={{ color: C.navy }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core features ── */}
      <section className="py-20 border-b" style={{ borderColor: C.border, backgroundColor: C.appBg }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              Everything your team needs to stay connected
            </h2>
            <p className="text-base" style={{ color: C.slate }}>
              Built for HR, People Ops, IT, and Leadership teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <FeatureCard
              icon={FileText}
              title="Announcement Builder"
              desc="Create branded company updates with templates, rich text, images, and scheduled delivery. No design skills required."
              bullets={['Drag-and-drop email composer', 'Pre-built announcement templates', 'Schedule for optimal send times']}
            />
            <FeatureCard
              icon={BarChart3}
              title="Communication Analytics"
              desc="Track deliveries, opens, clicks, and employee engagement across departments. Know your message landed."
              bullets={['Real-time delivery and open tracking', 'Department-level engagement reports', 'Follow-up lists for non-openers']}
            />
            <FeatureCard
              icon={Users}
              title="Smart Employee Groups"
              desc="Target communications by department, office, location, or any custom employee group you define."
              bullets={['Sync with your HR system or directory', 'Custom segments by role, location, or team', 'One-click all-company broadcasts']}
            />
            <FeatureCard
              icon={CheckSquare}
              title="Acknowledgment Tracking"
              desc="Request confirmation that employees have read important company policies, compliance notices, and critical updates."
              bullets={['One-click employee acknowledgment', 'Compliance audit trail and reporting', 'Automated reminders for non-responders']}
            />
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 border-b" style={{ borderColor: C.border, backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              From draft to delivered in minutes
            </h2>
            <p className="text-base" style={{ color: C.slate }}>Three steps to close the loop on every communication.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: FileText,
                title: 'Create',
                desc: 'Build your announcement using templates or the drag-and-drop composer. Add images, buttons, and custom branding.',
              },
              {
                step: '02',
                icon: Send,
                title: 'Deliver',
                desc: 'Send to your entire company or target specific departments, locations, or employee groups. Schedule for the right moment.',
              },
              {
                step: '03',
                icon: TrendingUp,
                title: 'Measure',
                desc: 'See who opened, clicked, and acknowledged. Follow up with employees who haven\'t engaged. Close the loop.',
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: C.primaryLight }}>
                    <step.icon className="w-5 h-5" style={{ color: C.primary }} />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: C.muted }}>Step {step.step}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: C.navy }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="py-20 border-b" style={{ borderColor: C.border, backgroundColor: C.appBg }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: C.navy, letterSpacing: '-0.02em' }}>
              Built for HR, People Ops, and Leadership
            </h2>
            <p className="text-base" style={{ color: C.slate }}>
              Company news · Benefits · Policy updates · Internal alerts
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Users,
                title: 'HR & People Teams',
                desc: 'Keep employees informed on benefits, policies, and culture initiatives. Ensure compliance notices and enrollment deadlines never get missed.',
                bullets: ['Benefits enrollment reminders', 'Policy update announcements', 'Acknowledgment-required compliance notices'],
              },
              {
                icon: FileText,
                title: 'Leadership & Executives',
                desc: 'Communicate company direction, quarterly results, and strategic updates directly to your workforce — with visibility into who\'s seen it.',
                bullets: ['All-hands meeting announcements', 'Quarterly business updates', 'Company milestone communications'],
              },
              {
                icon: Shield,
                title: 'IT & Security',
                desc: 'Send urgent system alerts, maintenance windows, and security advisories that employees actually see — not buried in Slack or missed in email.',
                bullets: ['Urgent outage and incident alerts', 'Security awareness notices', 'System maintenance windows'],
              },
              {
                icon: MessageSquare,
                title: 'Operations & Facilities',
                desc: 'Coordinate office logistics, event reminders, and operational updates across locations and departments with ease.',
                bullets: ['Office closure and holiday notices', 'Event and training reminders', 'Multi-location announcements'],
              },
            ].map((uc) => (
              <FeatureCard key={uc.title} icon={uc.icon} title={uc.title} desc={uc.desc} bullets={uc.bullets} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                Bring your company communications together
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#8BA3B8' }}>
                Unlike traditional email, Dedicated Emailing gives HR and leadership a centralized way to send targeted company communications, measure engagement, and track who has acknowledged important updates.
              </p>
              <Link href="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: C.primary }}>
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Delivery Rate',       value: '99.1%' },
                { label: 'Average Open Rate',   value: '71%' },
                { label: 'Acknowledgment Rate', value: '87%' },
                { label: 'Time to First Send',  value: '< 5 min' },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-3 border-b"
                  style={{ borderColor: '#1E3347' }}>
                  <span className="text-sm" style={{ color: '#8BA3B8' }}>{s.label}</span>
                  <span className="text-lg font-bold" style={{ color: C.primary }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
