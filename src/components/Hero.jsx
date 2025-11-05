import React from 'react';
import { Rocket, Users } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-indigo-700 shadow-sm">
            <Users className="h-4 w-4" />
            Student Hackathon Project
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Build, learn, and launch—in 24 hours
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-600">
            A modern landing page concept for a student hackathon submission. Clear problem, sharp solution, and a sleek presentation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#solution"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <Rocket className="h-5 w-5" /> Explore Solution
            </a>
            <a
              href="#problem"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              See the Problem
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
