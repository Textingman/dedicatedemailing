import Link from 'next/link';
import { CheckCircle, XCircle, MinusCircle, ArrowRight, Mail, Monitor, Smartphone, Bell, Users, BarChart3, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Check = () => <CheckCircle className="w-5 h-5 mx-auto" style={{ color: '#10B981' }} />;
const X = () => <XCircle className="w-5 h-5 mx-auto" style={{ color: '#EF4444' }} />;
const Partial = () => <MinusCircle className="w-5 h-5 mx-auto" style={{ color: '#F59E0B' }} />;

const features = [
  { category: 'Communication Channels', items: [
    { name: 'Dedicated Email Broadcasts', de: true, slack: 'partial', teams: 'partial' },
    { name: 'Intranet / Company Feed', de: true, slack: false, teams: 'partial' },
    { name: 'SMS Broadcast to Employees', de: true, slack: false, teams: false },
    { name: 'Push Alerts & Notifications', de: true, slack: true, teams: true },
    { name: 'Multi-Channel in One Send', de: true, slack: false, teams: false },
  ]},
  { category: 'Delivery & Reach', items: [
    { name: 'Reaches Employees Without App', de: true, slack: false, teams: false },
    { name: 'Email Delivery Tracking', de: true, slack: false, teams: false },
    { name: 'SMS Delivery Confirmation', de: true, slack: false, teams: false },
    { name: '99%+ Delivery Rate', de: true, slack: 'partial', teams: 'partial' },
    { name: 'Works for Deskless / Frontline Workers', de: true, slack: false, teams: false },
  ]},
  { category: 'Acknowledgment & Compliance', items: [
    { name: 'Read Acknowledgment Tracking', de: true, slack: false, teams: false },
    { name: 'Compliance Audit Trail', de: true, slack: false, teams: 'partial' },
    { name: 'Automated Reminders to Non-Responders', de: true, slack: false, teams: false },
    { name: 'Policy Acknowledgment Reports', de: true, slack: false, teams: false },
    { name: 'HR / Legal Compliance Exports', de: true, slack: false, teams: 'partial' },
  ]},
  { category: 'Analytics & Reporting', items: [
    { name: 'Per-Message Open Rate Tracking', de: true, slack: false, teams: false },
    { name: 'Department-Level Engagement Reports', de: true, slack: 'partial', teams: 'partial' },
    { name: 'Cross-Channel Analytics Dashboard', de: true, slack: false, teams: false },
    { name: 'Non-Opener Follow-Up Lists', de: true, slack: false, teams: false },
    { name: 'Acknowledgment Rate by Team', de: true, slack: false, teams: false },
  ]},
  { category: 'Employee Targeting', items: [
    { name: 'HR Directory Sync', de: true, slack: 'partial', teams: true },
    { name: 'Target by Department / Location', de: true, slack: 'partial', teams: 'partial' },
    { name: 'All-Company Broadcast', de: true, slack: true, teams: true },
    { name: 'Custom Employee Segments', de: true, slack: 'partial', teams: 'partial' },
    { name: 'Frontline / Non-Desk Worker Reach', de: true, slack: false, teams: false },
  ]},
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check />;
  if (value === false) return <X />;
  return <Partial />;
}

export default function ComparePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4" style={{ color: '#1F2937' }}>
            Why Dedicated Emailing?
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: '#6B7280' }}>
            Slack and Teams are great for chat. But when you need to reach every employee — including frontline and deskless workers — with a tracked, acknowledged, compliant message, you need a dedicated internal communications platform.
          </p>
          {/* Channel pills */}
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { icon: <Mail className="w-4 h-4" />, label: 'Email' },
              { icon: <Monitor className="w-4 h-4" />, label: 'Intranet' },
              { icon: <Smartphone className="w-4 h-4" />, label: 'SMS' },
              { icon: <Bell className="w-4 h-4" />, label: 'Push Alerts' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
                {c.icon} {c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 border-b" style={{ borderColor: '#E5E7EB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1F2937' }}>The gaps in your current tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Regular Email (Outlook / Gmail)',
                problems: [
                  'No visibility into who opened or read it',
                  'No acknowledgment or confirmation tracking',
                  'No targeting by department or role',
                  'Buried in inboxes alongside external email',
                ],
              },
              {
                icon: <Monitor className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'Chat Tools (Slack / Teams)',
                problems: [
                  'Messages scroll away and get missed',
                  'No email or SMS reach for non-app users',
                  'No compliance acknowledgment trail',
                  'Frontline workers often don\'t have access',
                ],
              },
              {
                icon: <Smartphone className="w-8 h-8" style={{ color: '#0891B2' }} />,
                title: 'No SMS Channel',
                problems: [
                  'Urgent alerts don\'t reach employees fast enough',
                  'Deskless workers miss critical notices',
                  'No opt-out compliance management',
                  'No delivery confirmation or tracking',
                ],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-6" style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#CFFAFE' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: '#1F2937' }}>{item.title}</h3>
                <ul className="space-y-2">
                  {item.problems.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm" style={{ color: '#6B7280' }}>
                      <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Snippet — Multi-channel dashboard */}
      <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#1F2937' }}>One platform. Every channel. Full visibility.</h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>Send the same announcement via email, intranet, and SMS — and see exactly who received, opened, and acknowledged it.</p>
          </div>
          {/* Dashboard snippet */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: '#0891B233' }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#164E63' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 flex-1 rounded px-3 py-1 text-xs" style={{ backgroundColor: '#0E3A4A', color: '#A5F3FC' }}>
                app.dedicatedemailing.com/announcements
              </div>
            </div>
            <div className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-base font-bold" style={{ color: '#1F2937' }}>Open Enrollment Reminder — Oct 2026</div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>Sent</span>
              </div>
              {/* Channel breakdown */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { channel: '📧 Email', sent: '1,240', opened: '71%', ack: '94%', color: '#0891B2' },
                  { channel: '🖥 Intranet', sent: '1,240', opened: '64%', ack: '88%', color: '#0891B2' },
                  { channel: '📱 SMS', sent: '480', opened: '96%', ack: '91%', color: '#10B981' },
                ].map((ch) => (
                  <div key={ch.channel} className="rounded-xl p-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    <div className="text-sm font-bold mb-2" style={{ color: '#1F2937' }}>{ch.channel}</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span style={{ color: '#6B7280' }}>Sent</span>
                        <span className="font-medium" style={{ color: '#374151' }}>{ch.sent}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span style={{ color: '#6B7280' }}>Opened</span>
                        <span className="font-bold" style={{ color: ch.color }}>{ch.opened}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span style={{ color: '#6B7280' }}>Acknowledged</span>
                        <span className="font-bold" style={{ color: '#10B981' }}>{ch.ack}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Acknowledgment progress */}
              <div className="rounded-xl p-4" style={{ backgroundColor: '#F0FDFF', border: '1px solid #CFFAFE' }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-semibold" style={{ color: '#0891B2' }}>Overall Acknowledgment Progress</div>
                  <div className="text-sm font-bold" style={{ color: '#10B981' }}>91%</div>
                </div>
                <div className="h-2.5 rounded-full mb-2" style={{ backgroundColor: '#E2E8F0' }}>
                  <div className="h-2.5 rounded-full" style={{ width: '91%', backgroundColor: '#10B981' }} />
                </div>
                <div className="flex justify-between text-xs" style={{ color: '#6B7280' }}>
                  <span>1,128 of 1,240 confirmed</span>
                  <span>112 pending · Auto-reminder scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1F2937' }}>Feature Comparison</h2>
          <p className="text-center mb-8" style={{ color: '#6B7280' }}>How Dedicated Emailing compares to Slack and Microsoft Teams for internal communications.</p>

          {/* Legend */}
          <div className="flex items-center gap-6 mb-8 justify-center flex-wrap">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
              <CheckCircle className="w-4 h-4" style={{ color: '#10B981' }} /> Included
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
              <MinusCircle className="w-4 h-4" style={{ color: '#F59E0B' }} /> Partial / Limited
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
              <XCircle className="w-4 h-4" style={{ color: '#EF4444' }} /> Not Available
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E5E7EB' }}>
            {/* Header */}
            <div className="grid grid-cols-4 text-center" style={{ backgroundColor: '#164E63' }}>
              <div className="p-5 text-left">
                <span className="text-sm font-semibold" style={{ color: '#A5F3FC' }}>Feature</span>
              </div>
              <div className="p-5 border-l-2" style={{ borderColor: '#0891B2' }}>
                <div className="text-white font-bold text-lg">Dedicated Emailing</div>
                <div className="text-xs mt-1" style={{ color: '#A5F3FC' }}>Internal Comms Platform</div>
              </div>
              <div className="p-5 border-l" style={{ borderColor: '#0E3A4A' }}>
                <div className="text-white font-bold text-lg">Slack</div>
                <div className="text-xs mt-1" style={{ color: '#A5F3FC' }}>Salesforce</div>
              </div>
              <div className="p-5 border-l" style={{ borderColor: '#0E3A4A' }}>
                <div className="text-white font-bold text-lg">Microsoft Teams</div>
                <div className="text-xs mt-1" style={{ color: '#A5F3FC' }}>Microsoft 365</div>
              </div>
            </div>

            {/* Feature rows */}
            {features.map((section) => (
              <div key={section.category}>
                <div className="grid grid-cols-4 py-3 px-5" style={{ backgroundColor: '#F0FDFF' }}>
                  <div className="col-span-4 font-bold text-sm uppercase tracking-wider" style={{ color: '#0891B2' }}>
                    {section.category}
                  </div>
                </div>
                {section.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-4 text-center border-t"
                    style={{
                      borderColor: '#F3F4F6',
                      backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                    }}
                  >
                    <div className="p-4 text-left text-sm" style={{ color: '#374151' }}>{item.name}</div>
                    <div className="p-4 border-l-2 flex items-center justify-center" style={{ borderColor: '#0891B2', backgroundColor: '#F0FDFF' }}>
                      <Cell value={item.de} />
                    </div>
                    <div className="p-4 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                      <Cell value={item.slack} />
                    </div>
                    <div className="p-4 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                      <Cell value={item.teams} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-4 text-center border-t" style={{ borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' }}>
              <div className="p-6" />
              <div className="p-6 border-l-2" style={{ borderColor: '#0891B2' }}>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-3 text-white font-semibold rounded-lg text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#0891B2' }}
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-6 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                <span className="text-sm" style={{ color: '#9CA3AF' }}>slack.com</span>
              </div>
              <div className="p-6 border-l flex items-center justify-center" style={{ borderColor: '#F3F4F6' }}>
                <span className="text-sm" style={{ color: '#9CA3AF' }}>microsoft.com/teams</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-center mt-4" style={{ color: '#9CA3AF' }}>
            Comparison based on publicly available information as of 2026. Features may vary by plan. Contact us for a detailed evaluation.
          </p>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section className="py-16" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1F2937' }}>When you need more than chat</h2>
          <p className="text-center mb-12" style={{ color: '#6B7280' }}>Real scenarios where Dedicated Emailing fills the gap.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-7 h-7" style={{ color: '#0891B2' }} />,
                scenario: 'Compliance Notice',
                problem: 'You need every employee to confirm they\'ve read the new data security policy — and you need a legal audit trail.',
                solution: 'Send via email + intranet with acknowledgment required. Get a timestamped report of who confirmed and auto-remind those who haven\'t.',
              },
              {
                icon: <Users className="w-7 h-7" style={{ color: '#0891B2' }} />,
                scenario: 'Benefits Open Enrollment',
                problem: 'Open enrollment closes Friday. Half your workforce is deskless and doesn\'t check Slack or Teams.',
                solution: 'Send an email + SMS reminder to all employees. Track who opened it and send a follow-up SMS to those who haven\'t acted.',
              },
              {
                icon: <Bell className="w-7 h-7" style={{ color: '#0891B2' }} />,
                scenario: 'Urgent Office Alert',
                problem: 'There\'s a building emergency and you need to reach all 1,200 employees immediately — including those not at their desks.',
                solution: 'Trigger an SMS broadcast to all employees in seconds. 99%+ delivery rate, no app required, reaches everyone instantly.',
              },
            ].map((item) => (
              <div key={item.scenario} className="bg-white rounded-2xl p-6 shadow-md border" style={{ borderColor: '#E5E7EB' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#CFFAFE' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#1F2937' }}>{item.scenario}</h3>
                <div className="mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#EF4444' }}>The Challenge</div>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{item.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#10B981' }}>With Dedicated Emailing</div>
                  <p className="text-sm" style={{ color: '#374151' }}>{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product snippet — SMS + Email side by side */}
      <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#1F2937' }}>Reach employees wherever they are</h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>Email for the desk. SMS for the floor. Intranet for everyone. All tracked in one place.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* SMS snippet */}
            <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: '#164E63' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: '#A5F3FC' }}>📱 SMS Broadcast</span>
              </div>
              <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="rounded-xl p-3 mb-3" style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A' }}>
                  <div className="text-xs font-bold mb-1" style={{ color: '#92400E' }}>⚡ Urgent — All Employees</div>
                  <div className="text-sm" style={{ color: '#1F2937' }}>REMINDER: Open Enrollment closes Friday 5pm. Complete your selections at benefits.company.com</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Delivered', value: '1,237' },
                    { label: 'Delivery Rate', value: '99.8%' },
                    { label: 'Opt-Outs', value: '2' },
                  ].map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <div className="font-bold text-sm" style={{ color: '#0891B2' }}>{m.value}</div>
                      <div className="text-xs" style={{ color: '#6B7280' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Acknowledgment snippet */}
            <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: '#164E63' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs" style={{ color: '#A5F3FC' }}>✓ Acknowledgment Tracker</span>
              </div>
              <div className="p-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="text-sm font-bold mb-3" style={{ color: '#1F2937' }}>IT Security Policy — Acknowledgment</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-2.5 rounded-full" style={{ backgroundColor: '#E2E8F0' }}>
                    <div className="h-2.5 rounded-full" style={{ width: '76%', backgroundColor: '#10B981' }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#10B981' }}>76%</span>
                </div>
                <div className="text-xs mb-3" style={{ color: '#9CA3AF' }}>942 of 1,240 confirmed · 298 pending · Auto-reminder sent</div>
                <div className="space-y-2">
                  {[
                    { name: 'Sarah M. — Engineering', status: '✓ Acknowledged', time: '2 min ago', ok: true },
                    { name: 'James T. — HR', status: '✓ Acknowledged', time: '5 min ago', ok: true },
                    { name: 'Priya K. — Finance', status: '⏳ Pending', time: 'Reminder sent', ok: false },
                    { name: 'Marcus L. — Sales', status: '⏳ Pending', time: 'Reminder sent', ok: false },
                  ].map((emp) => (
                    <div key={emp.name} className="flex items-center justify-between p-2 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                      <span className="text-xs" style={{ color: '#374151' }}>{emp.name}</span>
                      <div className="text-right">
                        <div className="text-xs font-medium" style={{ color: emp.ok ? '#10B981' : '#F59E0B' }}>{emp.status}</div>
                        <div className="text-xs" style={{ color: '#9CA3AF' }}>{emp.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#164E63' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to close the communication gap?</h2>
          <p className="text-lg mb-8" style={{ color: '#A5F3FC' }}>
            Book a demo and see how email, intranet, and SMS work together to reach every employee — with full tracking and acknowledgment built in.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#0891B2' }}
          >
            Book a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
