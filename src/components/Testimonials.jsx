import { Quote } from 'lucide-react';

const quotes = [
  {
    text: 'A study in shadows. Clean, quiet, and captivating.',
    author: 'Serin of the Night Court',
  },
  {
    text: 'Where motion whispers and light obeys.',
    author: 'Archivist of Echoes',
  },
  {
    text: 'Minimalism with teeth. I approve.',
    author: 'Keeper of Crowns',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-zinc-950 py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Testimonies</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">Echoes from those who walked the corridor before you.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-lg border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-5">
              <Quote className="h-5 w-5 text-zinc-400" />
              <blockquote className="mt-3 text-sm text-zinc-300">“{q.text}”</blockquote>
              <figcaption className="mt-3 text-xs text-zinc-500">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
