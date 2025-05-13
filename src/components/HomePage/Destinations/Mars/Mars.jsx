import './Mars.css';
import { PLANETS } from '../../../Planets/planets';

export default function Mars(){

    return (
            <div className="destination-div">
                <div className="video-destination">
                     <video id="destination-video" src={PLANETS[2].promoVideo.video5} autoPlay loop muted></video>
                </div>
                <div className="destination-segment destination-mars">
                    <div className="destination-info mars-segment">
                        <p id="destination" className='mars-title'><span>MARS</span></p>
                        <p id="catch">A Journey Beyond Imagination</p>
                        <div className='mars-text'>
                            <div className="destination-promo-mars-1">
                                <video className="two-promo-vid" id="mars-video-1" src={PLANETS[2].promoVideo.video1} autoPlay loop muted></video>
                                <p className="destination-mars-p mars-p-1">Enjoy guided tours of past rover and landing sites, a Martian sunset, and the unique geological formations that make this planet so mysterious and captivating.<br/>
                                    With Us, You will Experience:<br/>
                                    The highest safety standards in the galaxy.<br/>
                                    Luxurious cabins for restful interplanetary journeys.<br/>
                                    Professional space guides to enhance your Mars adventure.<br/>
                                </p>
                            </div>
                            <div className="destination-promo-mars-1">
                                <p className="destination-mars-p mars-p-2">
                                    As one of our most sought-after destinations, <br/>
                                    Mars offers travelers an experience unlike any other.<br/> With the Future Tourist Space Agency, you’ll journey to the Red Planet in comfort and style, enjoying the safest and most affordable interplanetary travel.<br/><br/> Established since 2017, our agency is dedicated to making space exploration accessible and unforgettable.<br/>
                                    <br/>
                                </p>
                                <video className="two-promo-vid" id="mars-video-2" src={PLANETS[2].promoVideo.video3} autoPlay loop muted></video>
                            </div>
                                <p className="destination-mars-p mars-p-3">
                                    What to Expect on Mars:<br/>
                                    Passengers can look forward to breathtaking landscapes, from the towering Olympus Mons (the solar system's tallest volcano) to the vast, ancient valleys of Valles Marineris. Experience the thin, chill Martian atmosphere and witness the pinkish-red skies, unlike anything on Earth.<br/>
                                </p> 
                        </div>
                    </div>
                    <div className="destination-promo-mars-2">
                         <video className="two-promo-vid" id="mars-video-3" src={PLANETS[2].promoVideo.video2} autoPlay loop muted></video>
                         <video className="two-promo-vid" id="mars-video-4" src={PLANETS[2].promoVideo.video4} autoPlay loop muted></video>
                    </div>  
                    <p className="destination-mars-p mars-p-4">Let us make your dream of visiting Mars a reality!</p>
                </div>
            </div>
    )
}