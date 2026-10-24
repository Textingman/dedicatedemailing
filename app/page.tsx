import Link from 'next/link';
import { Bell, Shield, Zap, BarChart3, Mail, Users, Building2, Megaphone, CheckCircle, ArrowRight, MessageSquare, Calendar, Lock, ChevronRight, Eye, FileText, Send, TrendingUp, AlertCircle, Settings, Home, Inbox, PieChart } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20" style={{ backgroundColor: '#0891B2' }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#0891B2' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              <Bell className="w-4 h-4" />
              Employee Communications Platform
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl" style={{ color: '#1F2937' }}>
              The smarter way to keep
              <span className="block" style={{ color: '#0891B2' }}>your entire team informed.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Centralize announcements, company updates, and employee communications in one platform — with delivery tracking, engagement analytics, and acknowledgment confirmation built in.
            </p>
            {/* Value props row */}
            <div className="mt-8 flex justify-center gap-8 flex-wrap">
              {[
                { label: 'Delivery Tracking', icon: <Send className="w-4 h-4" /> },
                { label: 'Read Acknowledgments', icon: <CheckCircle className="w-4 h-4" /> },
                { label: 'Engagement Analytics', icon: <BarChart3 className="w-4 h-4" /> },
              ].map((v) => (
                <div key={v.label} className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#0891B2' }}>
                  {v.icon}
                  {v.label}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link href="/demo" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Sophisticated Dashboard Mockup */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="rounded-2xl shadow-2xl overflow-hidden border" style={{ borderColor: '#0891B233' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#164E63' }}>
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 rounded px-3 py-1 text-xs" style={{ backgroundColor: '#0E3A4A', color: '#A5F3FC' }}>
                  app.dedicatedemailing.com/dashboard
                </div>
              </div>
              {/* App shell with sidebar */}
              <div className="flex" style={{ backgroundColor: '#F8FFFE', minHeight: '380px' }}>
                {/* Left sidebar */}
                <div className="w-48 flex-shrink-0 border-r py-4 px-3" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-4 px-2" style={{ color: '#9CA3AF' }}>Platform</div>
                  {[
                    { icon: <Home className="w-4 h-4" />, label: 'Dashboard', active: true },
                    { icon: <Send className="w-4 h-4" />, label: 'Campaigns' },
                    { icon: <Inbox className="w-4 h-4" />, label: 'Announcements' },
                    { icon: <Users className="w-4 h-4" />, label: 'Employees' },
                    { icon: <PieChart className="w-4 h-4" />, label: 'Analytics' },
                    { icon: <CheckCircle className="w-4 h-4" />, label: 'Acknowledgments' },
                    { icon: <Settings className="w-4 h-4" />, label: 'Settings' },
                  ].map((item) => (
                    <div key={item.label} className={`flex items-center gap-2 px-2 py-2 rounded-lg mb-1 text-sm ${item.active ? 'font-semibold' : ''}`}
                      style={{ backgroundColor: item.active ? '#CFFAFE' : 'transparent', color: item.active ? '#0891B2' : '#6B7280' }}>
                      {item.icon}
                      {item.label}
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-base font-bold" style={{ color: '#1F2937' }}>Communications Dashboard</div>
                      <div className="text-xs" style={{ color: '#9CA3AF' }}>October 2026 · All Departments</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ backgroundColor: '#0891B2' }}>
                        + Create Announcement
                      </div>
                    </div>
                  </div>
                  {/* Metrics row */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {[
                      { label: 'Delivery Rate', value: '98.7%', change: '+1.2%', color: '#10B981' },
                      { label: 'Open Rate', value: '71%', change: '+4%', color: '#0891B2' },
                      { label: 'Acknowledgment Rate', value: '89%', change: '+6%', color: '#0891B2' },
                      { label: 'Active Campaigns', value: '4', change: '2 scheduled', color: '#F59E0B' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl p-3" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                        <div className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{stat.label}</div>
                        <div className="text-xs mt-1 font-medium" style={{ color: '#10B981' }}>{stat.change}</div>
                      </div>
                    ))}
                  </div>
                  {/* Campaigns table */}
                  <div className="rounded-xl overflow-hidden" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: '#F3F4F6' }}>
                      <div className="text-sm font-semibold" style={{ color: '#1F2937' }}>Recent Campaigns</div>
                      <div className="text-xs" style={{ color: '#0891B2' }}>View all →</div>
                    </div>
                    <div className="divide-y" style={{ borderColor: '#F3F4F6' }}>
                      {[
                        { name: 'Q4 All-Hands Meeting — Oct 28', dept: 'All Employees', sent: '1,240', opened: '71%', ack: '89%', status: 'Sent', statusColor: '#10B981' },
                        { name: 'Open Enrollment Reminder', dept: 'HR · Benefits', sent: '1,240', opened: '68%', ack: '94%', status: 'Sent', statusColor: '#10B981' },
                        { name: 'Office Closure — Nov 11', dept: 'All Employees', sent: '—', opened: '—', ack: '—', status: 'Scheduled', statusColor: '#0891B2' },
                        { name: 'IT Security Policy Update', dept: 'All Employees', sent: '—', opened: '—', ack: '—', status: 'Draft', statusColor: '#F59E0B' },
                      ].map((row) => (
                        <div key={row.name} className="grid grid-cols-5 items-center px-4 py-2.5 text-xs">
                          <div className="col-span-2">
                            <div className="font-medium" style={{ color: '#374151' }}>{row.name}</div>
                            <div style={{ color: '#9CA3AF' }}>{row.dept}</div>
                          </div>
                          <div style={{ color: '#6B7280' }}>{row.sent} sent</div>
                          <div style={{ color: '#6B7280' }}>{row.opened} opened</div>
                          <div className="flex items-center justify-between">
                            <span style={{ color: '#6B7280' }}>{row.ack} ack</span>
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ color: row.statusColor, backgroundColor: row.statusColor + '20' }}>{row.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not Just Use Email Section */}
      <section className="py-16 border-y" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold" style={{ color: '#1F2937' }}>Why not just use Outlook or Gmail?</h2>
            <p className="mt-3 text-lg" style={{ color: '#6B7280' }}>Regular email lets you send announcements. Dedicated Emailing lets you <em>manage</em> them.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'No visibility',
                problem: 'With regular email, you never know if employees actually read the message.',
                solution: 'Dedicated Emailing shows delivery rates, open rates, and who acknowledged each communication.',
              },
              {
                title: 'No targeting',
                problem: 'Sending to the right people means manually managing distribution lists.',
                solution: 'Smart employee groups let you target by department, location, role, or any custom segment.',
              },
              {
                title: 'No accountability',
                problem: 'Critical policy updates and compliance notices have no confirmation trail.',
                solution: 'Acknowledgment tracking lets employees confirm they\'ve read important communications.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                <div className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: '#EF4444' }}>❌ {item.title}</div>
                <p className="text-sm mb-4" style={{ color: '#6B7280' }}>{item.problem}</p>
                <div className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: '#10B981' }}>✓ With Dedicated Emailing</div>
                <p className="text-sm" style={{ color: '#374151' }}>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: '#9CA3AF' }}>Trusted by HR & Operations teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['Acme Corp', 'TechWorks', 'BuildRight', 'NovaCare', 'PeakOps'].map((name) => (
              <div key={name} className="text-lg font-bold" style={{ color: '#D1D5DB' }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Platform Features */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Everything your team needs to stay connected</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Reach employees · Measure engagement · Stay organized</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <FileText className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Announcement Builder',
                desc: 'Create branded company updates with templates, rich text, images, and scheduled delivery. No design skills required.',
                bullets: ['Drag-and-drop email composer', 'Pre-built announcement templates', 'Schedule for optimal send times'],
              },
              {
                icon: <BarChart3 className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Communication Analytics',
                desc: 'Track deliveries, opens, clicks, and employee engagement across departments. Know your message landed.',
                bullets: ['Real-time delivery & open tracking', 'Department-level engagement reports', 'Follow-up lists for non-openers'],
              },
              {
                icon: <Users className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Smart Employee Groups',
                desc: 'Target communications by department, office, location, or any custom employee group you define.',
                bullets: ['Sync with your HR system or directory', 'Custom segments by role, location, or team', 'One-click all-company broadcasts'],
              },
              {
                icon: <CheckCircle className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Acknowledgment Tracking',
                desc: 'Request confirmation that employees have read important company policies, compliance notices, and critical updates.',
                bullets: ['One-click employee acknowledgment', 'Compliance audit trail & reporting', 'Automated reminders for non-responders'],
              },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0891B233' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CFFAFE' }}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1F2937' }}>{f.title}</h3>
                </div>
                <p className="mb-4" style={{ color: '#6B7280' }}>{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0891B2' }} />
                      <span className="text-sm" style={{ color: '#374151' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How it works</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>From draft to delivered in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: <FileText className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Create',
                desc: 'Build your announcement using templates or the drag-and-drop composer. Add images, buttons, and custom branding.',
              },
              {
                step: '02',
                icon: <Send className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Deliver',
                desc: 'Send to your entire company or target specific departments, locations, or employee groups. Schedule for the right moment.',
              },
              {
                step: '03',
                icon: <TrendingUp className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Measure',
                desc: 'See who opened, clicked, and acknowledged. Follow up with employees who haven\'t engaged. Close the loop.',
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: '#CFFAFE' }}>
                  {step.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#0891B2' }}>Step {step.step}</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1F2937' }}>{step.title}</h3>
                <p style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Built for HR, People Ops & Leadership</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Company news · Benefits · Policy updates · Internal alerts</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'HR & People Teams',
                desc: 'Keep employees informed on benefits, policies, and culture initiatives. Ensure compliance notices and enrollment deadlines never get missed.',
                bullets: ['Benefits enrollment reminders', 'Policy update announcements', 'Acknowledgment-required compliance notices'],
              },
              {
                icon: <Building2 className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Leadership & Executives',
                desc: 'Communicate company direction, quarterly results, and strategic updates directly to your workforce — with visibility into who\'s seen it.',
                bullets: ['All-hands meeting announcements', 'Quarterly business updates', 'Company milestone celebrations'],
              },
              {
                icon: <Shield className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'IT & Security',
                desc: 'Send urgent system alerts, maintenance windows, and security advisories that employees actually see — not buried in Slack or missed in email.',
                bullets: ['Urgent outage & incident alerts', 'Security awareness notices', 'System maintenance windows'],
              },
              {
                icon: <MessageSquare className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Operations & Facilities',
                desc: 'Coordinate office logistics, event reminders, and operational updates across locations and departments with ease.',
                bullets: ['Office closure & holiday notices', 'Event & training reminders', 'Multi-location announcements'],
              },
            ].map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0891B233' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CFFAFE' }}>
                    {uc.icon}
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1F2937' }}>{uc.title}</h3>
                </div>
                <p className="mb-4" style={{ color: '#6B7280' }}>{uc.desc}</p>
                <ul className="space-y-2">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#0891B2' }} />
                      <span className="text-sm" style={{ color: '#374151' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#164E63' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Bring your company communications together</h2>
          <p className="text-xl mb-10" style={{ color: '#A5F3FC' }}>
            Unlike traditional email, Dedicated Emailing gives HR and leadership a centralized way to send targeted company communications, measure engagement, and track who has acknowledged important updates.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/demo" className="inline-flex items-center gap-2 px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2', color: '#FFFFFF' }}>
              Book a Demo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
