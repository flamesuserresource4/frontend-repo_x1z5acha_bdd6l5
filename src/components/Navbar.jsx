import { useState } from 'react';
import { Menu, Moon } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#shades', label: 'Shades' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-zinc-200 to-zinc-500" />
          <span className="text-sm font-semibold tracking-wider text-zinc-100">Lord of Shadows</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
          <button
            aria-label="Toggle dark mode"
            className="rounded-md border border-zinc-800/80 p-2 text-zinc-300 transition hover:bg-zinc-900 hover:text-zinc-100"
          >
            <Moon className="h-4 w-4" />
          </button>
        </div>

        <button
          className="md:hidden"
          aria-label="Open Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-6 w-6 text-zinc-200" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-800/80 bg-zinc-950/95 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
