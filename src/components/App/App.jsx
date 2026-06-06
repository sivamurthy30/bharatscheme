import { useState } from 'react';
import ActivitiesPage from '../ActivitiesPage/ActivitiesPage.jsx';
import ApplicationsPage from '../ApplicationsPage/ApplicationsPage.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';
import SchemeDetails from '../SchemeDetails/SchemeDetails.jsx';
import SignIn from '../SignIn/SignIn.jsx';

export default function App() {
  const [view, setView] = useState('landing');

  if (view === 'dashboard') {
    return (
      <Dashboard
        onBack={() => setView('landing')}
        onOpenApplications={() => setView('applications')}
        onOpenScheme={() => setView('schemeDetails')}
      />
    );
  }

  if (view === 'applications') {
    return (
      <ApplicationsPage
        onBack={() => setView('dashboard')}
        onOpenActivities={() => setView('activities')}
        onSignOut={() => setView('landing')}
      />
    );
  }

  if (view === 'activities') {
    return (
      <ActivitiesPage
        onBack={() => setView('dashboard')}
        onOpenApplications={() => setView('applications')}
        onSignOut={() => setView('landing')}
      />
    );
  }

  if (view === 'schemeDetails') {
    return <SchemeDetails onBack={() => setView('landing')} onApply={() => setView('dashboard')} />;
  }

  if (view === 'signIn') {
    return <SignIn onBack={() => setView('landing')} onSignIn={() => setView('dashboard')} />;
  }

  return (
    <LandingPage
      onExploreSchemes={() => setView('schemeDetails')}
      onSignIn={() => setView('signIn')}
    />
  );
}
