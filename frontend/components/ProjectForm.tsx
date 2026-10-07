'use client';

import { useState } from 'react';

const contentTypes = [
  'Presentation',
  'Report',
  'Essay',
  'Proposal',
  'Brief',
  'Study notes',
  'Meeting summary',
];

export function ProjectForm() {
  const [mode, setMode] = useState('student');
  const [contentType, setContentType] = useState('Presentation');
  const [title, setTitle] = useState('AI in education');
  const [description, setDescription] = useState('Create a short yet clear presentation for a classroom audience.');
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerate() {
    setIsLoading(true);
    setResult(null);

    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/projects/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, contentType, title, description }),
      });

      const data = await resp.json();
      setResult(data.content || JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(`Mock fallback result:\n\nTitle: ${title}\n\nObjective: ${description}\n\nOutline:\n1. Introduction\n2. Core ideas\n3. Evidence\n4. Conclusion\n\nScript: Start with the problem, explain your findings, and close with a clear recommendation.`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Create content</p>
          <h2 className="mt-2 text-3xl font-bold">Build a project from a prompt</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Mode</label>
            <select className="input" value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="student">Student mode</option>
              <option value="business">Adult / Business mode</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Content type</label>
            <select className="input" value={contentType} onChange={(e) => setContentType(e.target.value)}>
              {contentTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Title</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Prompt</label>
            <textarea
              className="input min-h-[140px] resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <button className="primary-btn" onClick={handleGenerate} disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate content'}
            </button>
            <button className="secondary-btn">Save draft</button>
          </div>
        </div>
      </div>

      <div className="card">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Generated output</p>
        <div className="mt-4 whitespace-pre-wrap rounded-xl border border-white/10 bg-slate-900 p-4 text-sm leading-7 text-slate-200">
          {result || 'Your generated content will appear here.'}
        </div>
      </div>
    </section>
  );
}
