export default function StatsGrid({ stats }) {
  return (
    <section className="stats-grid" aria-label="Scheme summary">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <strong className={stat.tone}>{stat.value}</strong>
          <p>{stat.label}</p>
        </article>
      ))}
    </section>
  );
}
