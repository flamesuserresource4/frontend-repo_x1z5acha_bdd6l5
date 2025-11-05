import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('Ready for input.');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Running demo…');

    // Fake async to mimic sending
    await new Promise((r) => setTimeout(r, 1000));

    setStatus('Complete. Output below.');
  }

  return (
    <section id="contact" className="w-full bg-zinc-950 py-20 text-zinc-100">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Send a Whisper</h2>
        <p className="mt-2 text-zinc-400">Speak softly; the realm listens.</p>

        <div className="mt-8 rounded-lg border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-zinc-400">Name</label>
              <input id="name" className="your-input-class mt-1 w-full rounded-md border border-zinc-800/80 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-zinc-400">Email</label>
              <input id="email" type="email" className="your-input-class mt-1 w-full rounded-md border border-zinc-800/80 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs text-zinc-400">Message</label>
              <textarea id="message" rows="4" className="your-input-class mt-1 w-full rounded-md border border-zinc-800/80 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Your message..." />
            </div>
            <button type="submit" className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2">
              <Send className="h-4 w-4" /> Send
            </button>
          </form>

          <div id="demo-status" className="mt-4 text-sm text-gray-500">{status}</div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 640px) {
            .your-demo-container-class { padding: 1.5rem !important; }
            .your-input-class { font-size: 1rem !important; }
          }
        `}
      </style>
    </section>
  );
}
