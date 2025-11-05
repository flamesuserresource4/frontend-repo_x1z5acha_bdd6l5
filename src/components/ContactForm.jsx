import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Your pledge has been received. The night will answer.');
  }

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-black to-black" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Swear Your Oath</h2>
          <p className="mt-3 text-white/70">Send word to the court. We remember every name spoken in the dark.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70" htmlFor="name">Name</label>
              <input id="name" type="text" required className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your shadow-name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70" htmlFor="email">Email</label>
              <input id="email" type="email" required className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@void.realm" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70" htmlFor="message">Message</label>
            <textarea id="message" required rows={4} className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Speak your vow..." />
          </div>
          <div className="flex items-center justify-between gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              <Send className="h-5 w-5" />
              Bind the Shadows
            </button>
            {status && <p className="text-sm text-emerald-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
