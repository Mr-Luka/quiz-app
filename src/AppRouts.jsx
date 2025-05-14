import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import WelcomePage from './components/welcome-page.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import HomePageLayout from './components/HomePage/Home-page-layout.jsx';
import Crew from './components/HomePage/Crew/Crew.jsx';
import Technology from './components/HomePage/Technology/Technology.jsx';

import Exodus from './components/HomePage/Destinations/Exodus/Exodus.jsx';
import Plantia from './components/HomePage/Destinations/Plantia/Plantia.jsx';
import Mars from './components/HomePage/Destinations/Mars/Mars.jsx';

function AppRoutes({ userRegistered, userName, handleRegistrationSuccess }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/welcome' || location.pathname === '/') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          userRegistered ? (
            <Navigate to="/home" replace />
          ) : (
            <WelcomePage onRegisterSuccess={handleRegistrationSuccess} />
          )
        }
      />
      <Route path="/home" element={<HomePage userName={userName} />} />
      <Route path="/destinations" element={<HomePage showDestinations={true} userName={userName} />} />
      <Route path="/exodus" element={<HomePageLayout><Exodus /></HomePageLayout>} />
      <Route path="/plantia" element={<HomePageLayout><Plantia /></HomePageLayout>} />
      <Route path="/mars" element={<HomePageLayout><Mars /></HomePageLayout>} />
      <Route path="/crew" element={<HomePageLayout><Crew /></HomePageLayout>} />
      <Route path="/technology" element={<HomePageLayout><Technology /></HomePageLayout>} />
    </Routes>
  );
}

export default AppRoutes;