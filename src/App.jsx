import './index.css';
import {useState} from 'react';

import WelcomePage from './components/welcome-page.jsx';
import HomePage from './components/HomePage/HomePage.jsx';

function App() {
    const [userRegistered, setUserRegistered] = useState();

    return (
        <>
        <HomePage />
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
