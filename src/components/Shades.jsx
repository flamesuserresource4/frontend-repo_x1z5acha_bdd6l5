import React from 'react';
import { Shield, Eye, Ghost, Crown } from 'lucide-react';

const shades = [
  {
    title: 'Veilguard',
    icon: Shield,
    description:
      'Defenders of the realm. They fortify the boundaries where light dares not pass and keep the domain sealed.',
  },
  {
    title: 'Nightwatch',
    icon: Eye,
    description:
      'Silent observers. They see through the abyss and map the echoes of every step taken in the dark.',
  },
  {
    title: 'Wraithbinders',
    icon: Ghost,
    description:
      'Masters of binding. They weave contracts with specters and harness ethereal power for the court.',
  },
  {
    title: 'Crownshade',
    icon: Crown,
    description:
      'The inner circle. Strategists and envoys who carry the will of the Lord of Shadows across the void.',
  },
];

export default function Shades() {
  return (
    <section id="shades" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/5" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Shades of the Dominion</h2>
          <p className="mt-3 text-white/70">Four orders sworn to the night, each with a singular purpose.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shades.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
