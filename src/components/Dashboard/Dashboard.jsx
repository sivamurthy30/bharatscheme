import { schemes, stats } from '../../data/dashboardData.jsx';
import HelpPanel from '../HelpPanel/HelpPanel.jsx';
import ReminderPanel from '../ReminderPanel/ReminderPanel.jsx';
import SchemesPanel from '../SchemesPanel/SchemesPanel.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import StatsGrid from '../StatsGrid/StatsGrid.jsx';
import Topbar from '../Topbar/Topbar.jsx';

export default function Dashboard() {
  return (
    <main className="app-shell">
      <Sidebar />

      <section className="main-panel">
        <Topbar />

        <div className="content">
          <section className="greeting">
            <h1>Hello Ramesh! 👋</h1>
            <p>Here are your scheme summary</p>
          </section>

          <StatsGrid stats={stats} />
          <SchemesPanel schemes={schemes} />

          <section className="bottom-grid">
            <HelpPanel />
            <ReminderPanel />
          </section>
        </div>
      </section>
    </main>
  );
}
