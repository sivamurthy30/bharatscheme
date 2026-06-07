import {
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  GraduationCap,
  HeartPulse,
  Home,
  UserRound,
  WalletCards,
} from 'lucide-react';
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

const featuredSchemes = [
  {
    title: 'PM Mudra Yojana',
    description: 'Collateral-free business loans for micro and small enterprises.',
    icon: BriefcaseBusiness,
    amount: 'Up to ₹10 Lakh',
  },
  {
    title: 'PMAY Housing Support',
    description: 'Housing assistance and subsidies for eligible families.',
    icon: Home,
    amount: 'Home subsidy',
  },
  {
    title: 'Scholarship Support',
    description: 'Education benefits for students across central and state schemes.',
    icon: GraduationCap,
    amount: 'Fee support',
  },
  {
    title: 'Health Protection',
    description: 'Medical coverage and wellness benefits for households.',
    icon: HeartPulse,
    amount: 'Coverage benefits',
  },
];

const platformBenefits = [
  'Personalized scheme matches based on your profile',
  'Eligibility checks before you start applying',
  'Document reminders and application status tracking',
  'Simple guidance for central and state benefits',
];

export default function LandingPage({ onEnterDashboard, onExploreSchemes }) {
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

          <button className="landing-login" onClick={onEnterDashboard}>
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
              <button className="primary-action" onClick={onEnterDashboard}>
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

        <section className="featured-schemes" id="schemes">
          <div className="section-title">
            <h2>Popular Schemes</h2>
            <p>Explore benefits commonly matched for citizens and small businesses</p>
          </div>

          <div className="featured-grid">
            {featuredSchemes.map((scheme) => (
              <article className="featured-card" key={scheme.title}>
                <div className="featured-icon">
                  <scheme.icon size={28} />
                </div>
                <span>{scheme.amount}</span>
                <h3>{scheme.title}</h3>
                <p>{scheme.description}</p>
                <button onClick={onExploreSchemes}>View Details</button>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div>
            <p className="hero-kicker">Why BharatSchemes?</p>
            <h2>One place to discover, understand, and apply for benefits.</h2>
          </div>

          <div className="benefit-list">
            {platformBenefits.map((benefit) => (
              <article key={benefit}>
                <CheckCircle2 size={24} />
                <span>{benefit}</span>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
