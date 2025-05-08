import ExodusVideo from '../../../assets/media/exodus/water-planet.mp4';
import PlantiaVideo from '../../../assets/media/plantia/nature-planet.mp4';
import MarsVideo from '../../../assets/media/mars/mars.mp4';

import './Destinations.css';

export default function Destinations(){

    return (
        <section className="destinations">
                <div>
                    <video src={ExodusVideo} autoPlay muted loop></video>
                    <div className="text">
                        <p className="sub-heading">
                            Destination:
                        </p>
                            <h1 className="title-destination">
                                EXODUS
                            </h1>
                            <p className="planet-preview-p">
                                Welcome to Water Planet EXODUS.
                                <br/>Main Species: Naga
                            </p>
                            <a href="#" className="article-link" onclick="location.href='exodus.html'">
                                More Info
                            </a>
                    </div>
                </div>
                <div>
                    <video src={MarsVideo} autoPlay muted loop></video>
                    <div className="text">
                        <p className="sub-heading">
                            Destination:
                        </p>
                            <h1 className="title-destination">
                                MARS
                            </h1>
                            <p className="planet-preview-p">
                                Welcome to Mars, our red planet sister.
                                <br/>Main Species: Second generation People (Martian)
                            </p>
                            <a href="#" className="article-link" onclick="location.href='mars.html'">
                                More Info
                            </a>
                    </div>
                </div>
                <div>
                    <video src={PlantiaVideo} autoPlay muted loop></video>
                    <div className="text">
                        <p className="sub-heading">
                            Destination:
                        </p>
                            <h1 className="title-destination">
                                PLANTIA
                            </h1>
                            <p className="planet-preview-p">
                                Welcome to nature planet, merged with Plants.
                                <br/>Main Species: Plantians
                            </p>
                            <a href="#" className="article-link" onclick="location.href='plantia.html'">
                                More Info
                            </a>
                    </div>
                </div>
                
            </section>
    )
}