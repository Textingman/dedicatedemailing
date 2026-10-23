import Link from 'next/link';
import { Bell, Shield, Users, CheckCircle, ArrowRight, Star, Zap, BarChart3, Megaphone, MessageSquare, Lock, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20" style={{ backgroundColor: '#0891B2' }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#0891B2' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              <Bell className="w-4 h-4" />
              Internal Communications Hub for Your Team
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              About Dedicated Emails
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              We help companies keep every employee informed — combining reliable dedicated email delivery with a purpose-built internal communications hub so your announcements, alerts, and updates always reach the people who need them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
              <p className="text-lg mb-5" style={{ color: '#6B7280' }}>
                Internal communications is broken at most companies. Critical announcements get buried in Slack. HR notices go unread. IT alerts don&apos;t reach the right people in time. Employees feel out of the loop — and leadership has no visibility into whether their messages actually landed.
              </p>
              <p className="text-lg mb-5" style={{ color: '#6B7280' }}>
                We built Dedicated Emails to fix that. Our platform gives every team — HR, IT, Leadership, Operations — a dedicated channel to reach every employee directly in their inbox, with the analytics to prove it worked.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                The result: higher employee engagement, fewer missed announcements, and a company that actually feels connected — no matter how distributed your team is.
              </p>
            </div>
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: '#164E63' }}>
              <h3 className="text-2xl font-bold text-white mb-6">By the Numbers</h3>
              <div className="space-y-6">
                {[
                  { value: '99.9%', label: 'Average Delivery Rate', sub: 'Across all customer accounts' },
                  { value: '94%', label: 'Average Open Rate', sub: 'For internal announcements' },
                  { value: 'Instant', label: 'Alert Delivery', sub: 'Time-sensitive notices reach staff immediately' },
                  { value: '500+', label: 'Companies Trust Us', sub: 'From startups to enterprise teams' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-extrabold" style={{ color: '#A5F3FC' }}>{stat.value}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{stat.label}</div>
                      <div className="text-sm mt-0.5" style={{ color: '#67E8F9' }}>{stat.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What We Do</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Dedicated Emails is the only internal communications platform built around dedicated email delivery — so your announcements always reach every employee.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Company Announcements',
                desc: 'Broadcast company-wide news, leadership updates, and policy changes to your entire workforce — or target specific departments and locations.',
              },
              {
                icon: <Bell className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Instant Alert Delivery',
                desc: 'Time-sensitive alerts reach every employee immediately. Emergency notices, IT outages, and urgent updates — no one gets left behind.',
              },
              {
                icon: <Calendar className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Scheduled Campaigns',
                desc: 'Plan your internal comms calendar in advance. Schedule weekly digests, event reminders, and recurring updates automatically.',
              },
              {
                icon: <BarChart3 className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Engagement Analytics',
                desc: 'See exactly who opened, read, and engaged with each announcement. Know your message landed — and follow up with those who missed it.',
              },
              {
                icon: <Users className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Department Targeting',
                desc: 'Send to everyone or segment by department, location, or role. The right message reaches the right people every time.',
              },
              {
                icon: <Lock className="w-7 h-7" style={{ color: '#0891B2' }} />,
                title: 'Secure & Private',
                desc: 'Internal communications stay internal. Enterprise-grade security ensures your company announcements never leave your organization.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#0891B233' }}>
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                    {f.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>{f.title}</h3>
                <p className="text-center" style={{ color: '#6B7280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Our Principles</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>The values that guide how we build and how we operate.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Bell className="w-6 h-6" style={{ color: '#0891B2' }} />,
                title: 'Every Employee Deserves to Know',
                desc: 'We believe no employee should be left out of the loop. Every announcement, every alert, every update — should reach every person it was meant for.',
              },
              {
                icon: <Star className="w-6 h-6" style={{ color: '#0891B2' }} />,
                title: 'Transparency',
                desc: 'No black boxes. You can see exactly who received, opened, and engaged with every message — giving leadership full visibility into internal comms performance.',
              },
              {
                icon: <Zap className="w-6 h-6" style={{ color: '#0891B2' }} />,
                title: 'Speed When It Matters',
                desc: 'When something urgent happens, your team needs to know immediately. Our platform delivers time-sensitive alerts in real time — no delays, no missed messages.',
              },
              {
                icon: <Users className="w-6 h-6" style={{ color: '#0891B2' }} />,
                title: 'Built for People Teams',
                desc: 'HR, IT, Operations, Leadership — every team that communicates internally is our customer. We build tools that make their jobs easier and their messages more effective.',
              },
            ].map((v) => (
              <div key={v.title} className="flex gap-5 p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>{v.title}</h3>
                  <p style={{ color: '#6B7280' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Coverage */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Every Type of Internal Communication</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>From routine updates to urgent alerts — we handle every internal comms use case.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { label: 'All-Hands Announcements', desc: 'CEO updates, quarterly results, and company milestones delivered to every inbox' },
              { label: 'HR & Benefits Notices', desc: 'Open enrollment, policy changes, and compliance reminders sent on schedule' },
              { label: 'IT & Security Alerts', desc: 'Urgent system updates, outage notices, and security advisories reach staff instantly' },
              { label: 'Event & Meeting Reminders', desc: 'Town halls, training sessions, and team events with automated follow-ups' },
              { label: 'Department-Specific Updates', desc: 'Target messages to Sales, Engineering, HR, or any custom group you define' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-5 rounded-xl bg-white border" style={{ borderColor: '#E5E7EB' }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0891B2' }} />
                <div>
                  <div className="font-semibold" style={{ color: '#1F2937' }}>{item.label}</div>
                  <div className="text-sm mt-0.5" style={{ color: '#6B7280' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Ready to Keep Your Team Informed?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>
            Join 500+ companies that trust Dedicated Emails to reach every employee with every announcement that matters.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/signup" className="inline-flex items-center gap-2 px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#0891B2' }}>
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/demo" className="inline-flex items-center gap-2 px-10 py-5 text-xl font-semibold rounded-lg border-2 transition-opacity hover:opacity-90" style={{ color: '#0891B2', borderColor: '#0891B2', backgroundColor: '#FFFFFF' }}>
              Book a Demo
            </Link>
          </div>
          <p className="mt-4 text-sm" style={{ color: '#9CA3AF' }}>No credit card required. 14-day free trial.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
