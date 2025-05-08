import AroundTheWorldHomePage from '../../../public/home-page.mp4';

import './HomePage.css';

export default function HomePage(){


    return (
        <>
            <div className="wrapper-home">
            <div className="video-home">
                <video id="home-video" src={AroundTheWorldHomePage} autoPlay loop muted></video>
            </div>
            <div className="header">
                <div className='welcome-universe-tour'>
                    <h3>Name<br/> Welcome to the</h3>
                    <h1>Universe Tour</h1>
                </div>
                <div className="nav-bar">
                    <ul className="nav-ul">
                        <li>Home</li>
                        <li>Destination</li>
                        <li>Crew</li>
                        <li>Technology</li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}