import './Mars.css';

export default function Mars(){

    return (
            <div className="destination-div">
                <div className="video-destination">
                     <video id="destination-video" src="media/mars/mars.mp4" autoplay loop muted></video>
                </div>
                <div className="destination-segment">
                    <div className="destination-info">
                        <p id="destination"><span>MARS</span></p>
                        <p id="catch">A Journey Beyond Imagination</p>
                        <p id="destination-p">
                            As one of our most sought-after destinations, <br/>
                            Mars offers travelers an experience unlike any other.<br/> With the Future Tourist Space Agency, you’ll journey to the Red Planet in comfort and style, enjoying the safest and most affordable interplanetary travel.<br/><br/> Established since 2017, our agency is dedicated to making space exploration accessible and unforgettable.<br/>
                            <br/>
                        </p>
                        <p id="destination-p1">
                            What to Expect on Mars:<br/>
                            Passengers can look forward to breathtaking landscapes, from the towering<br/>Olympus Mons (the solar system's tallest volcano) to the vast, ancient valleys of Valles Marineris. Experience the thin, chill Martian atmosphere and witness the pinkish-red skies, unlike anything on Earth.<br/>
                        </p> 
                        <p id="destination-p2">Enjoy guided tours of past rover and landing sites, a Martian sunset, and the unique geological formations that make this planet so mysterious and captivating.<br/>
                            With Us, You will Experience:<br/>
                            The highest safety standards in the galaxy.<br/>
                            Luxurious cabins for restful interplanetary journeys.<br/>
                            Professional space guides to enhance your Mars adventure.<br/>
                        </p>
                        <p id="destination-p3">Let us make your dream of visiting Mars a reality!
                        </p>
                    </div>
                    <div className="destination-promo">
                         <video className="two-promo-vid" id="destination-promo-video" src="/media/mars/mars-america.mp4" autoplay loop muted></video>
                         <video class="two-promo-vid" id="destination-promo-video2" src="./media/mars/mars-hiking.mp4" autoplay loop muted></video>
                    </div>
                    <div className="destination-promo2">
                         <video className="two-promo-vid" id="destination-promo-video3" src="/media/mars/mars-exploring.mp4" autoplay loop muted></video>
                         <video className="two-promo-vid" id="destination-promo-video4" src="./media/mars/mars-walking.mp4" autoplay loop muted></video>
                    </div>  
                </div>
            </div>
    )
}