import React from 'react';
import { AlertTriangle } from 'lucide-react';

const bullets = [
  'Students juggle classes, clubs, and jobs—time is scarce.',
  'Campus information is scattered across portals and emails.',
  'Coordinating group work and deadlines is chaotic.',
];

const Problem = () => {
  return (
    <section id="problem" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">The Problem</h2>
        </div>
        <p className="max-w-3xl text-lg leading-7 text-gray-600">
          Staying organized and informed on campus shouldn’t be this hard. Students waste hours hunting for resources, tracking deadlines, and syncing across multiple tools that don’t talk to each other.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {bullets.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
