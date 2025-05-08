import AroundTheWorldHomePage from '../../../public/home-page.mp4';
import Destinations from './Destinations/Destinations.jsx';

import './HomePage.css';

import {useState} from 'react';

export default function HomePage(){
    const [showDestinations, setShowDestination] = useState(false);

    function handleNavigate(destination) {
        if(destination === 'Destinations'){
            setShowDestination(true);
        } else {
            setShowDestination(false);
        }
    }


    return (
    <div className="wrapper-home">
      {!showDestinations && (
        <div className="video-home">
          <video id="home-video" src={AroundTheWorldHomePage} autoPlay loop muted></video>
        </div>
      )}
      <div className="header">
        <div className="welcome-universe-tour">
          <h1>Universe TourX</h1>
        </div>
        <div className="nav-bar">
          <ul className="nav-ul">
            <li onClick={() => handleNavigate('Home')}>Home</li>
            <li onClick={() => handleNavigate('Destinations')}>Destinations</li>
            <li onClick={() => handleNavigate('Crew')}>Crew</li>
            <li onClick={() => handleNavigate('Technology')}>Technology</li>
          </ul>
        </div>
      </div>
      {!showDestinations && (
        <div className='welcome-name'>
            <h2>First LastName<br/> <span>Welcome</span><br/> to YOUR journey</h2>
        </div>
      )}
      {showDestinations && <Destinations />}
    </div>
)}