import { ShieldCheck } from 'lucide-react';

export default function SchemesPanel({ onOpenScheme, schemes }) {
  return (
    <section className="schemes-panel">
      <div className="section-heading">
        <h2>Best Matching Schemes</h2>
        <button onClick={onOpenScheme}>View All</button>
      </div>

      <div className="scheme-list">
        {schemes.map((scheme) => (
          <article className="scheme-row" key={scheme.title}>
            <SchemeIcon type={scheme.symbol} />
            <div className="scheme-info">
              <h3>{scheme.title}</h3>
              <p>{scheme.agency}</p>
            </div>
            <p className="scheme-detail">{scheme.detail}</p>
            <span className={`match-pill ${scheme.level}`}>{scheme.match}</span>
            <button className="apply-button" onClick={onOpenScheme}>
              Apply Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function SchemeIcon({ type }) {
  if (type === 'people') {
    return (
      <div className="scheme-icon people">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="scheme-icon seal">
      <ShieldCheck size={30} />
    </div>
  );
}
