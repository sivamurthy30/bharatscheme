import { ArrowLeft, Bell } from 'lucide-react';
import Brand from '../Brand/Brand.jsx';

export default function Topbar({ onBack }) {
  return (
    <header className="topbar">
      <button className="dashboard-back" onClick={onBack}>
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>
      <Brand mobile />
      <div className="topbar-actions">
        <button className="assistant-button">
          <Bell size={18} />
          <span>Talk to AI Assistant</span>
        </button>
        <button className="notification" aria-label="Notifications">
          <Bell size={24} />
          <span />
        </button>
      </div>
    </header>
  );
}
