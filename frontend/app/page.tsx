import React from 'react';
import { ModeCard } from '@/components/ModeCard';
import { ProjectForm } from '@/components/ProjectForm';

const modes = [
  {
    id: 'student',
    name: 'Student mode',
    description: 'Reports, essays, research summaries, class presentations, and study notes.',
    badge: 'School-ready',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'business',
    name: 'Adult / Business mode',
    description: 'Proposals, pitches, briefs, performance reports, and client-ready materials.',
    badge: 'Work-ready',
    accent: 'from-blue-500 to-indigo-500',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">ContentForge</p>
            <h1 className="mt-3 text-4xl font-black md:text-6xl">AI content generation for school and business</h1>
          </div>

          <button className="rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10">
            Continue with Google
          </button>
        </header>

        <section className="mb-12 grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <ModeCard key={mode.id} {...mode} />
          ))}
        </section>

        <ProjectForm />
      </div>
    </main>
  );
}
