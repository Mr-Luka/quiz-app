import './index.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import WelcomePage from './components/welcome-page.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import HomePageLayout from './components/HomePage/Home-page-layout';
import Crew from './components/HomePage/Crew/Crew.jsx';

import Exodus from './components/HomePage/Destinations/Exodus/Exodus.jsx';
import Plantia from './components/HomePage/Destinations/Plantia/Plantia.jsx';
import Mars from './components/HomePage/Destinations/Mars/Mars.jsx';

function App() {
  const [userRegistered, setUserRegistered] = useState(false); 
  const [userName, setUserName] = useState('Explorer');

  // Function to handle successful registration
  const handleRegistrationSuccess = (name) => {
    setUserName(name)
    setUserRegistered(true);
  };

   return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
