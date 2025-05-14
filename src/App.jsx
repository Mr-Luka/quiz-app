import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRouts.jsx';

function App() {
  const [userRegistered, setUserRegistered] = useState(false);
  const [userName, setUserName] = useState('Explorer');

  const handleRegistrationSuccess = (name) => {
    setUserName(name);
    setUserRegistered(true);
  };

  return (
    <Router>
      <AppRoutes
        userRegistered={userRegistered}
        userName={userName}
        handleRegistrationSuccess={handleRegistrationSuccess}
      />
    </Router>
  );
}

export default App;