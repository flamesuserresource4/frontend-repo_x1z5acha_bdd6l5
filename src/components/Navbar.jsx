import React from 'react';
import { Moon, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold">
          <Moon className="h-5 w-5 text-emerald-400" />
          Lord of Shadows
        </a>

        <button
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 p-2 text-white sm:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-6 sm:flex">
          <a href="#shades" className="text-sm text-white/80 transition hover:text-white">Shades</a>
          <a href="#testimonials" className="text-sm text-white/80 transition hover:text-white">Whispers</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Oath</a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow shadow-emerald-500/30 transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400"
          >
            Bind the Shadows
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-3 text-white sm:hidden">
          <div className="flex flex-col gap-3">
            <a href="#shades" onClick={() => setOpen(false)} className="text-sm text-white/80 transition hover:text-white">Shades</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="text-sm text-white/80 transition hover:text-white">Whispers</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-white/80 transition hover:text-white">Oath</a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow shadow-emerald-500/30 transition-transform duration-200 hover:scale-[1.03] hover:bg-emerald-400"
            >
              Bind the Shadows
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
