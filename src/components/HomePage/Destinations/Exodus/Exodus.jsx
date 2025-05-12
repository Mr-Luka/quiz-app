import './Exodus.css';
import {PLANETS} from '../../../Planets/planets.js';

export default function Exodus(){

    return (
        <>
            <div className="destination-div">
                <div className="video-destination">
                     <video id="destination-video" src={PLANETS[0].planetVideo} autoPlay loop muted></video>
                </div>
                <div className="destination-segment exodus-segment">
                    <div className="destination-info">
                        <p id="destination" className="destination-exodus"><span>Exodus</span></p>
                        <p id="catch" className="catch-exodus">A Journey Beyond Imagination</p>
                        <div className="destination-promo-wrapper">
                            <div className="destination-promo">
                                <video className="two-promo-vid" id="destination-promo-video-exodus-2" src={PLANETS[0].promoVideo.video2} autoPlay loop muted></video>
                                <p id="destination-p-exodus1">
                                As one of our most sought-after destinations, <br/>
                                Exodus offers travelers an experience unlike any other.<br/> With the Future Tourist Space Agency, you’ll journey to the Blue Planet in comfort and style, enjoying the safest and most affordable interplanetary travel.<br/><br/> Established since 2017, our agency is dedicated to making space exploration accessible and unforgettable.
                                </p>
                            </div>
                            <div className="destination-promo">
                                <p id="destination-exodus2">
                                What to Expect on Exodus:<br/>
                                Passengers can look forward to breathtaking underwater landscapes, from the towering<br/>Canyon Eternal (the deepest point) to the vast, ancient valleys of Valles Exodus. Experience the thin, chill Exodus atmosphere, clean water and witness the pinkish-red skies, unlike anything on Earth.<br/>
                                </p> 
                                <video className="two-promo-vid" id="destination-promo-video-exodus-3" src={PLANETS[0].promoVideo.video3} autoPlay loop muted></video>
                            </div>
                            <div className="destination-promo">
                                <video className="two-promo-vid" id="destination-promo-video-exodus-1" src={PLANETS[0].promoVideo.video1} autoPlay loop muted></video>
                                <p id="destination-exodus3">Enjoy guided tours of past rover and landing sites, a Exodus sunset, and the unique geological formations that make this planet so mysterious and captivating.<br/>
                                With Us, You will Experience:<br/>
                                The highest safety standards in the galaxy.<br/>
                                Luxurious cabins for restful interplanetary journeys.<br/>
                                Professional space guides to enhance your Exodus adventure.<br/>
                                </p>
                            </div>
                            <div className="destination-promo">
                                <video className="two-promo-vid" id="destination-promo-video-exodus-4" src={PLANETS[0].promoVideo.video4} autoPlay loop muted></video>
                                <p className="last-say" id="destination-exodus4">Let us make your dream of visiting Exodus a reality!
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}