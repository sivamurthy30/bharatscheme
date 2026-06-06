import { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import SchemeDetails from '../SchemeDetails/SchemeDetails.jsx';

export default function App() {
  const [view, setView] = useState('landing');

  if (view === 'dashboard') {
    return <Dashboard onBack={() => setView('landing')} onOpenScheme={() => setView('schemeDetails')} />;
  }

  if (view === 'schemeDetails') {
    return <SchemeDetails onBack={() => setView('landing')} onApply={() => setView('dashboard')} />;
  }

  return (
    <LandingPage
      onExploreSchemes={() => setView('schemeDetails')}
      onLogin={() => setView('dashboard')}
    />
  );
}
