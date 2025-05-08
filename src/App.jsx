import './index.css';
import {useState} from 'react';

import WelcomePage from './components/welcome-page.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Destinations from './components/HomePage/Destinations/Destinations.jsx';

function App() {
    const [userRegistered, setUserRegistered] = useState();

    return (
        <>
        <Destinations />
            {/* {userRegistered 
            ? 
                <HomePage /> 
            :
                <WelcomePage />
            } */}
        </>
    )
}

export default App;
