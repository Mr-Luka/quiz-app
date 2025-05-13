import {PLANETS} from '../../../Planets/planets.js';
import './Plantia.css';

export default function Plantia(){

    return (
            <div className="destination-div">
                <div className="video-destination">
                     <video id="destination-video" src={PLANETS[1].planetVideo} autoPlay loop muted></video>
                </div>
                <div className="destination-segment plantia-segment">
                    <div className="destination-info">
                        <p id="destination" className="destination-plantia-title"><span>PLANTIA</span></p>
                        <p id="catch" className="plantia-catch">A Journey Beyond Imagination</p>
                        <div className="destination-promo-wrapper promo-plantia">
                            <div className="destination-promo promo-exodus">
                                <p id="destination-plantia-1">
                                    As one of our most sought-after destinations, <br/>
                                    Plantia offers travelers an experience unlike any other.<br/> With the Future Tourist Space Agency, you’ll journey to the Green Planet in comfort and style, enjoying the safest and most affordable interplanetary travel.<br/><br/> Established since 2017, our agency is dedicated to making space exploration accessible and unforgettable.
                                </p>
                                <video className="plantia-promo-vid" id="plantia-1-video" src={PLANETS[1].promoVideo.video2} autoPlay loop muted></video>
                            </div>
                            <div className="destination-promo">
                                <video className="plantia-promo-vid" id="plantia-2-video" src={PLANETS[1].promoVideo.video1} autoPlay loop muted></video>
                                <p id="destination-plantia-2">
                                    What to Expect on Plantia:<br/>
                                    Passengers can look forward to breathtaking landscapes, from the towering<br/>Plantia Forests (the solar system's biggest forest) to the vast, ancient valleys of Kaladria Rora. Experience the thin, chill Plantia atmosphere and witness the blue skies, unlike anything on Earth.<br/>
                                </p> 
                            </div>
                            <div className="destination-promo">
                                <p id="destination-plantia-3">Enjoy guided tours of past rover and landing sites, a Plantia sunset, and the unique geological formations that make this planet so mysterious and captivating.<br/>
                                    With Us, You will Experience:<br/>
                                    The highest safety standards in the galaxy.<br/>
                                    Luxurious cabins for restful interplanetary journeys.<br/>
                                    Professional space guides to enhance your Plantia adventure.<br/>
                                </p>
                                <video className="plantia-promo-vid" id="plantia-3-video" src={PLANETS[1].promoVideo.video5} autoPlay loop muted></video>
                            </div>
                            <div className="destination-promo">
                                <p id="destination-plantia-4">
                                    What to Expect on Plantia:<br/>
                                    Passengers can look forward to breathtaking landscapes, from the towering<br/>Exodia Forests (the solar system's biggest forest) to the vast, ancient valleys of Kaladria Rora. Experience the thin, chill Plantia atmosphere and witness the blue skies, unlike anything on Earth.<br/>
                                </p> 
                                <video className="plantia-promo-vid" id="plantia-4-video" src={PLANETS[1].promoVideo.video4} autoPlay loop muted></video>
                            </div>
                            <div className="destination-promo">
                                <video className="plantia-promo-vid" id="plantia-5-video" src={PLANETS[1].promoVideo.video3} autoPlay loop muted></video>
                                <p id="destination-plantia-5">
                                    What to Expect on Plantia:<br/>
                                    Passengers can look forward to breathtaking landscapes, from the towering<br/>Exodia Forests (the solar system's biggest forest) to the vast, ancient valleys of Kaladria Rora. Experience the thin, chill Plantia atmosphere and witness the blue skies, unlike anything on Earth.<br/>
                                </p> 
                            </div>
                        </div>
                        
                        <video className="plantia-promo-vid" id="plantia-6-video" src={PLANETS[1].promoVideo.video6} autoPlay loop muted></video>
                        <p id="destination-plantia-6">Let us make your dream of visiting Plantia a reality!
                        </p>
                    </div>    
                </div>
            </div>
    )
}