import {
  Accessibility,
  ArrowLeft,
  Bell,
  FileText,
  LogOut,
  Search,
  Sun,
  User,
} from 'lucide-react';

const profileItems = [
  { label: 'Profile', icon: User },
  { label: 'My Activity', icon: Bell },
  { label: 'My Applications', icon: FileText, active: true },
  { label: 'Sign Out', icon: LogOut },
];

export default function ApplicationsPage({ onBack, onOpenActivities, onSignOut }) {
  return (
    <main className="applications-shell">
      <header className="applications-header">
        <div className="myscheme-brand">
          <div className="gov-emblem">♜</div>
          <div className="myscheme-wordmark">
            <span>my</span>Scheme
          </div>
          <div className="digital-india">Digital India</div>
        </div>

        <label className="scheme-search">
          <span>Search scheme</span>
          <input placeholder="Enter scheme name to search..." />
          <Search size={22} />
        </label>

        <div className="applications-actions">
          <Bell size={24} />
          <span className="user-chip">P</span>
          <span className="language-chip">Aअ</span>
          <button>English</button>
          <button className="theme-toggle" aria-label="Toggle theme">
            <Sun size={22} />
          </button>
        </div>
      </header>

      <section className="applications-layout">
        <aside className="profile-menu">
          <button className="profile-back" onClick={onBack}>
            <ArrowLeft size={17} />
            <span>Back</span>
          </button>

          <nav aria-label="Profile navigation">
            {profileItems.map((item) => (
              <button
                className={item.active ? 'active' : ''}
                key={item.label}
                onClick={
                  item.label === 'My Activity'
                    ? onOpenActivities
                    : item.label === 'Sign Out'
                      ? onSignOut
                      : undefined
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="applications-content">
          <div className="applications-title">
            <h1>Applications</h1>
          </div>

          <article className="applications-table-card">
            <div className="applications-table-head">
              <span>Tracking Id</span>
              <span>Scheme Name</span>
              <span>Applied On</span>
              <span>Action</span>
            </div>
            <p>You haven't applied for any schemes</p>
          </article>
        </section>
      </section>

      <button className="accessibility-button" aria-label="Accessibility options">
        <Accessibility size={26} />
      </button>
    </main>
  );
}
