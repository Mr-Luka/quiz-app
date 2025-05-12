import './Destinations.css';

export default function Destinations({planetName, planetWelcome, species, planetVideo}){
    return (
        <>
                <div>
                    <video src={planetVideo} autoPlay muted loop></video>
                    <div className="text">
                        <p className="sub-heading">
                            Destination:
                        </p>
                            <h1 className="title-destination">
                                {planetName}
                            </h1>
                            <p className="planet-preview-p">
                                {planetWelcome}
                                <br/>Main Species: {species}
                            </p>
                            <a href="#" className="article-link">
                                More Info
                            </a>
                    </div>
                </div>
            </>
    )
}