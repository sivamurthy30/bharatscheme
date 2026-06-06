import { ChevronDown, ChevronRight, Languages } from 'lucide-react';
import { navItems } from '../../data/dashboardData.jsx';
import Brand from '../Brand/Brand.jsx';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Brand />

      <nav className="nav-list" aria-label="Main navigation">
        {navItems.map((item) => (
          <button className={`nav-item ${item.active ? 'active' : ''}`} key={item.label}>
            <item.icon size={20} strokeWidth={2.1} />
            <span>{item.label}</span>
            {item.badge && <strong>{item.badge}</strong>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="language">
          <Languages size={19} />
          <span>English</span>
          <ChevronDown size={18} />
        </button>

        <button className="profile">
          <div className="avatar">
            <span className="hair" />
            <span className="face" />
            <span className="shirt" />
          </div>
          <span>
            <b>Ramesh B</b>
            <small>View Profile</small>
          </span>
          <ChevronRight size={20} />
        </button>
      </div>
    </aside>
  );
}
