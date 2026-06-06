import { Bell } from 'lucide-react';
import Brand from '../Brand/Brand.jsx';

export default function Topbar() {
  return (
    <header className="topbar">
      <Brand mobile />
      <button className="assistant-button">
        <Bell size={18} />
        <span>Talk to AI Assistant</span>
      </button>
      <button className="notification" aria-label="Notifications">
        <Bell size={24} />
        <span />
      </button>
    </header>
  );
}
