import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  Clock,
  FileText,
  Heart,
  Percent,
  ShieldCheck,
} from 'lucide-react';
import Brand from '../Brand/Brand.jsx';

const facts = [
  { label: 'Loan Amount', value: 'Up to ₹10 Lakh', icon: BriefcaseBusiness },
  { label: 'Interest Rate', value: '8% - 12%', icon: Percent },
  { label: 'Max Tenure', value: '5 Years', icon: Clock },
  { label: 'Processing Fee', value: '0% - 1%', icon: Calendar },
];

const benefits = [
  'Collateral-free loans',
  'Support for new and existing businesses',
  'Easy repayment options',
  'Promotes self employment',
];

const applicants = [
  'Small business owners',
  'Shop owners, manufacturers, service providers',
  'Individuals involved in non-farm income activities',
];

const categories = [
  'Shishu: Up to ₹50,000',
  'Kishor: ₹50,001 - ₹5 Lakh',
  'Tarun: ₹5,00,001 - ₹10 Lakh',
];

export default function SchemeDetails({ onApply, onBack }) {
  return (
    <main className="scheme-details-shell">
      <section className="scheme-details-panel">
        <button className="scheme-back" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back to Schemes</span>
        </button>

        <div className="scheme-details-header">
          <h1>Scheme Details</h1>
          <Brand />
        </div>

        <section className="scheme-detail-grid">
          <article className="scheme-summary-card">
            <div className="summary-heading">
              <div className="scheme-icon-large">
                <ShieldCheck size={34} />
              </div>
              <div>
                <h2>PM Mudra Yojana</h2>
                <p>Government of India</p>
              </div>
              <span className="match-pill high">High Match</span>
            </div>

            <p className="scheme-description">
              Provides loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises.
            </p>

            <div className="scheme-facts">
              {facts.map((fact) => (
                <article key={fact.label}>
                  <span>
                    <fact.icon size={22} />
                  </span>
                  <small>{fact.label}</small>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>

            <div className="benefits-block">
              <h3>Benefits</h3>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="scheme-info-card">
            <nav className="details-tabs" aria-label="Scheme details tabs">
              <button className="active">Overview</button>
              <button>Eligibility</button>
              <button>Documents</button>
              <button>How to Apply</button>
              <button>FAQ</button>
            </nav>

            <div className="detail-copy-block">
              <h2>Who can apply?</h2>
              <ul>
                {applicants.map((applicant) => (
                  <li key={applicant}>{applicant}</li>
                ))}
              </ul>
            </div>

            <div className="detail-copy-block">
              <h2>Loan Categories</h2>
              <ul>
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>

            <div className="resources-block">
              <h2>Helpful Resources</h2>
              <div>
                <button>
                  <FileText size={22} />
                  <span>Official Guidelines</span>
                </button>
                <button>
                  <FileText size={22} />
                  <span>Application Form</span>
                </button>
              </div>
            </div>
          </article>
        </section>

        <footer className="scheme-action-bar">
          <button className="save-scheme">
            <Heart size={24} />
            <span>Save Scheme</span>
          </button>
          <button className="scheme-apply" onClick={onApply}>
            <span>Apply Now</span>
            <ArrowRight size={24} />
          </button>
        </footer>
      </section>
    </main>
  );
}
