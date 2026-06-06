import {
  Accessibility,
  ArrowLeft,
  Bell,
  Bookmark,
  FileText,
  LogOut,
  Search,
  Sun,
  User,
} from 'lucide-react';

const profileItems = [
  { label: 'Profile', icon: User },
  { label: 'My Activity', icon: Bell, active: true },
  { label: 'My Applications', icon: FileText },
  { label: 'Sign Out', icon: LogOut },
];

export default function ActivitiesPage({ onBack, onOpenApplications, onSignOut }) {
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
                  item.label === 'My Applications'
                    ? onOpenApplications
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
            <h1>My Activities</h1>
          </div>

          <article className="activity-card">
            <header>
              <Bookmark size={19} />
              <span>Bookmarks</span>
            </header>
            <p>You don't have any bookmarks</p>
          </article>
        </section>
      </section>

      <button className="accessibility-button" aria-label="Accessibility options">
        <Accessibility size={26} />
      </button>

      <button className="chatbot-button" aria-label="myScheme chatbot">
        my
      </button>
    </main>
  );
}
