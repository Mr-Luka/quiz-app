import './Crew.css';
import {crew} from './crew-data.js'

export default function Crew(){

    return (
            <div className="crew">
                <div className="video-destination">
                     <video id="destination-video-screw" src={crew[0].spaceStation} autoPlay loop muted></video>
                </div>
                <div className="crew-segment">
                    <div className="crew-info">
                        <p id="crew" className="typewriter-animation cursor">Meet our crew</p>
                        <div className="general-1">
                            <img className="generals" id="main-general" src={crew[0].general1}/>
                            <div className='general-info'>
                                <p><span>Genera Ludvig Honof</span></p>
                                <p>
                                    General Ludvig Honof is a legendary tactician who has served the Interstellar Coalition for 150 years. At 213 years old, he has lived through multiple generations of space warfare, his life extended by advanced cryosleep and longevity tech. Known for his stoic leadership and unmatched strategic mind, Honof is a cornerstone of humanity’s defense in the cosmos.
                                </p>
                            </div>
                        </div>
                        <div className="general">
                            <img className="generals" id="second-general" src={crew[0].general2}/>
                            <div className='general-info general-2 general-info-2'>
                                <p><span>Captain Ezra Kael</span></p>
                                <p id="general-info-2">
                                A seasoned Mars explorer, Kael is a master navigator and leads expeditions across the harsh Martian terrain. Known for his resilience, he’s often called "The Martian Ghost" for his ability to disappear and reappear across red deserts with precision.
                            </p>
                            </div> 
                        </div>
                        <div className="general general-3">
                            <img className="generals" id="third-general" src={crew[0].general3}/>
                            <div className='general-info general-info-2'>
                            <p><span>Commander Iris Vale</span></p>
                                <p id="general-info-3">
                                    Specialist in Plantia missions, Vale is a skilled biologist and survival expert, adept at navigating the dense, exotic jungles of the vibrant but hazardous planet. Her keen senses and adaptability have earned her the nickname "Plantia’s Whisper."
                                </p>

                            </div>
                        </div>
                        <div className="general">
                            <img className="generals" id="fourth-general" src={crew[0].general4}/>
                            <div className='general-info general-info-2'>
                                <p><span>Lieutenant Jax Fenn</span></p>
                                <p id="general-info-4">
                                    A tactical engineer, Fenn is responsible for critical supply runs and exploration on Exodus, a planet with extreme gravitational shifts. Known as "The Rock" by his crew, he’s grounded and reliable, always finding solutions to the planet’s unpredictable terrain.
                                </p>
                            </div>
                            
                        </div>
                        <div className="general general-5">
                            <img className="generals" id="fifth-general" src={crew[0].general5}/>
                            <div className='general-info general-info-2'>
                                <p><span>Dr. Selene Moray</span></p>
                                <p id="general-info-5">
                                    Chief medical officer, Moray has spent her career managing the physical toll of space travel on long-haul missions. Respected for her compassion and quick thinking, she ensures the crew’s well-being on their challenging journeys.
                                 </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}