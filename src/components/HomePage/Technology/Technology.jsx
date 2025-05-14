import './technology.css';
import { technology } from './technology-data';

export default function (){

    return (
        <div className="technology-wrapper">
                <div className="video-technology">
                     <video id="technology-video" src={technology.technology} autoPlay loop muted></video>
                </div>
                <div className="tech-segment">
                    <div className="tech-info">
                        <p className='technology-title'>Our Technology</p>
                        <div className="tech">
                            <video id="technology-video-rocket" src={technology.rocket} autoPlay loop muted></video>
                        </div>
                        <h2 className="tech-title">Advanced Technology</h2>
                        <p className="tech-p">Our spacecraft is equipped with cutting-edge technology, designed to withstand the harsh conditions of
                        interstellar travel. From advanced propulsion systems to state-of-the-art life support, every aspect of
                        our vessel is engineered for efficiency and safety.</p>
                        <div className="our-scientist">
                            <div className="scientist" id="scientist1">
                                <h3 className="h-scien">Piere Zix</h3>
                                <p className="p-scien">
                                Chief Engineer, Zix is responsible for the design and maintenance of our spacecraft's propulsion systems.
                                His expertise in advanced propulsion technologies has enabled us to reach previously inaccessible regions of
                                the galaxy.
                                </p>
                                <img className="scientist-working" src={technology.scientist1}/>
                            </div>
                            <div className="scientist" id="scientist2">
                                <h3 className="h-scien">Gadama Han</h3>
                                <p className="p-scien">Our chief scientist, Han, is a renowned expert in exoplanetary geology
                                and astrobiology. Her research has been instrumental in the discovery of
                                new worlds and the development of our spacecraft's advanced propulsion
                                systems.</p>
                                <img className="scientist-working" src={technology.scientist2}/>
                            </div>
                        </div>
                        <div className="suits">
                            <img  className="suit" id="suit-1" src={technology.spaceSuit1}/>
                            <img className="suit" id="suit-2" src={technology.spaceSuit2}/>
                            <img className="suit" id="suit-3" src={technology.spaceSuit3}/>
                        </div>
                        <p className="universe-logo">Universe Tour</p>
                    </div>
                </div>
            </div>
    )
}