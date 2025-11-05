import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'In the quiet between heartbeats, I felt the veil answer. Power, patient and absolute.',
    author: 'Serin of the Nightwatch',
  },
  {
    quote:
      'We do not conquer the dark. We become it, and in that surrender, we are limitless.',
    author: 'Lyra the Wraithbinder',
  },
  {
    quote:
      'When the Crownshade speaks, the void listens. Our will is the empire unseen.',
    author: 'Lord Regent Kael',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Whispers from the Void</h2>
          <p className="mt-3 text-white/70">Testimonies of those who pledged to the shadow.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Quote className="h-5 w-5 text-emerald-400" />
              <blockquote className="mt-3 text-sm text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-white/60">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
