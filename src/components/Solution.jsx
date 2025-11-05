import React from 'react';
import { CheckCircle2, CalendarCheck2, Bell, Link2 } from 'lucide-react';

const features = [
  {
    icon: CalendarCheck2,
    title: 'Smart Planner',
    desc: 'Auto-imports course schedules and generates a unified weekly plan.',
  },
  {
    icon: Bell,
    title: 'Deadline Radar',
    desc: 'Aggregates due dates from LMS, email, and group chats—never miss a task.',
  },
  {
    icon: Link2,
    title: 'Campus Hub',
    desc: 'One place for links: office hours, lab resources, room bookings, and more.',
  },
];

const Solution = () => {
  return (
    <section id="solution" className="relative bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Solution</h2>
        </div>
        <p className="max-w-3xl text-lg leading-7 text-gray-600">
          We’re building a unified student command center that connects calendars, deadlines, and resources into a single, beautiful interface.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
