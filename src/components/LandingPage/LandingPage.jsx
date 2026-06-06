import { ClipboardCheck, FileSearch, UserRound, WalletCards } from 'lucide-react';
import landingHero from '../../assets/landing-hero.png';
import Brand from '../Brand/Brand.jsx';

const metrics = [
  { value: '5000+', label: 'Schemes Listed' },
  { value: '50L+', label: 'Users Helped' },
  { value: '₹200 Cr+', label: 'Benefits Disbursed' },
  { value: '28', label: 'States Covered' },
];

const steps = [
  {
    title: 'Create Profile',
    description: 'Tell us about yourself',
    icon: UserRound,
  },
  {
    title: 'Get Matched',
    description: 'We find schemes for you',
    icon: FileSearch,
  },
  {
    title: 'Check Eligibility',
    description: 'See which schemes you qualify for',
    icon: ClipboardCheck,
  },
  {
    title: 'Apply & Track',
    description: 'Apply and track application status',
    icon: WalletCards,
  },
];

export default function LandingPage({ onExploreSchemes, onSignIn }) {
  return (
    <main className="landing-shell">
      <section className="landing-panel">
        <header className="landing-header">
          <Brand />

          <nav className="landing-nav" aria-label="Landing navigation">
            <a href="#home">Home</a>
            <button onClick={onExploreSchemes}>Schemes</button>
            <a href="#how-it-works">How It Works</a>
            <a href="#blog">Blog</a>
            <a href="#about">About Us</a>
          </nav>

          <button className="landing-login" onClick={onSignIn}>
            Sign In
          </button>
        </header>

        <section className="landing-hero" id="home">
          <div className="hero-copy">
            <p className="hero-kicker">Find. Understand. Apply.</p>
            <h1>
              Get <span>government benefits</span> you deserve.
            </h1>
            <p className="hero-summary">
              AI-powered platform to discover schemes, check eligibility and apply with ease.
            </p>

            <div className="hero-actions">
              <button className="primary-action" onClick={onSignIn}>
                Get Started
              </button>
              <button className="secondary-action" onClick={onExploreSchemes}>
                Explore Schemes
              </button>
            </div>

            <div className="metrics-card" aria-label="BharatSchemes platform metrics">
              {metrics.map((metric) => (
                <article key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <img src={landingHero} alt="Person browsing government schemes on a mobile app" />
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>Simple steps to get the benefits you are eligible for</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <div className="step-top">
                  <step.icon size={34} strokeWidth={2} />
                  <span>{index + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
