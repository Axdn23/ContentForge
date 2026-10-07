export function ModeCard({
  name,
  description,
  badge,
  accent,
}: {
  name: string;
  description: string;
  badge: string;
  accent: string;
}) {
  return (
    <div className={`card bg-gradient-to-br ${accent}`}>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-white/70">{badge}</p>
        <span className="rounded-full bg-black/20 px-2 py-1 text-[10px] font-bold uppercase">Pro-ready</span>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-3 text-sm text-white/80">{description}</p>
    </div>
  );
}
