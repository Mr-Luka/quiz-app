import './index.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import WelcomePage from './components/welcome-page.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Destinations from './components/HomePage/Destinations/Destinations.jsx';
import Exodus from './components/HomePage/Destinations/Exodus/Exodus.jsx';

function App() {
  const [userRegistered, setUserRegistered] = useState(false); 

  // Function to handle successful registration
  const handleRegistrationSuccess = () => {
    setUserRegistered(true);
  };

   return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userRegistered ? <Navigate to="/home" replace /> : <WelcomePage onRegisterSuccess={handleRegistrationSuccess} />
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/destinations" element={<HomePage showDestinations={true} />} /> {/* Pass prop to trigger rendering */}
        <Route path="/exodus" element={<Exodus />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
