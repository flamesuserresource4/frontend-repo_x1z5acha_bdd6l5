import React from 'react';
import Spline from '@splinetool/react-spline';
import { Moon, Sparkles } from 'lucide-react';

export default function ShadowHero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
          <Sparkles className="h-4 w-4" />
          Enter the Dominion
        </div>
        <h1 className="font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
          Lord of Shadows
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
          A realm forged in darkness where every whisper shapes the void. Command the shades and bend the night to your will.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-black shadow-lg shadow-emerald-500/30 transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Bind the Shadows"
          >
            <Moon className="h-5 w-5" />
            Bind the Shadows
          </a>
          <a
            href="#shades"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition-transform duration-200 hover:scale-[1.03] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Explore the Shades
          </a>
        </div>
      </div>
    </section>
  );
}
