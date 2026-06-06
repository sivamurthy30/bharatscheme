import { schemes, stats } from '../../data/dashboardData.jsx';
import HelpPanel from '../HelpPanel/HelpPanel.jsx';
import ReminderPanel from '../ReminderPanel/ReminderPanel.jsx';
import SchemesPanel from '../SchemesPanel/SchemesPanel.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import StatsGrid from '../StatsGrid/StatsGrid.jsx';
import Topbar from '../Topbar/Topbar.jsx';

export default function Dashboard({ onBack, onOpenApplications, onOpenScheme }) {
  return (
    <main className="app-shell">
      <Sidebar onOpenApplications={onOpenApplications} onOpenScheme={onOpenScheme} />

      <section className="main-panel">
        <Topbar onBack={onBack} />

        <div className="content">
          <section className="greeting">
            <h1>Hello Ramesh! 👋</h1>
            <p>Here are your scheme summary</p>
          </section>

          <StatsGrid stats={stats} />
          <SchemesPanel onOpenScheme={onOpenScheme} schemes={schemes} />

          <section className="bottom-grid">
            <HelpPanel />
            <ReminderPanel />
          </section>
        </div>
      </section>
    </main>
  );
}
