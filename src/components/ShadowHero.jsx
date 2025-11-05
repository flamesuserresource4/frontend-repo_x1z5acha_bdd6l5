import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function ShadowHero() {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden bg-black text-zinc-100">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-black/40 px-3 py-1 text-xs text-zinc-300">
          <Sparkles className="h-3.5 w-3.5" />
          Embrace the dark aesthetic
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Lord of Shadows
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-300 sm:text-lg">
          A minimalist realm of motion and light. Explore the shades, read the echoes, and send a whisper.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <a
            href="#shades"
            className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Enter the Shades
          </a>
          <a
            href="#contact"
            className="rounded-md border border-zinc-800/80 bg-black/40 px-4 py-2 text-sm font-semibold text-zinc-100 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Send a Whisper
          </a>
        </div>
      </div>
    </section>
  );
}
