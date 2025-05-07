import welcomeVideo from '../../public/welcome-page.mp4';
import '../index.css';

export default function WelcomePage(){
    
    return (
        <>
            <div className="welcome-video-sign-up">
                <div className="content-welcome">
                    <h1>Welcome to Space Tourism</h1>
                    <button className="btn-sign-up" id="form-open-btn">Sign Up</button>
                </div>
                <video src={welcomeVideo} autoPlay loop muted></video>
            </div>
        </>
    )
}