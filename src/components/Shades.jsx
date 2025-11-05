import { Shield, Eye, Ghost, Crown } from 'lucide-react';

const shades = [
  {
    icon: Shield,
    title: 'Aegis of Night',
    desc: 'Guarded by obsidian calm. Strength in stillness.',
  },
  { icon: Eye, title: 'Watcher of Veils', desc: 'Perception beyond the pale. See between the lines.' },
  { icon: Ghost, title: 'Wisp of Echoes', desc: 'Fading, flowing, forever. Motion etched in silence.' },
  { icon: Crown, title: 'Thorned Diadem', desc: 'Elegance with edge. Monarch of monochrome.' },
];

export default function Shades() {
  return (
    <section id="shades" className="w-full bg-zinc-950 py-20 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">The Shades</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">Artifacts from the realm of shadow. Minimal. Precise. Intentional.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {shades.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-lg border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-5 transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-zinc-800/80 bg-black/40">
                  <Icon className="h-5 w-5 text-zinc-100" />
                </span>
                <h3 className="text-sm font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
