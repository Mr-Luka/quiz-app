import './Destinations.css';
import { Link } from 'react-router-dom';

export default function Destinations({ planetName, planetWelcome, species, planetVideo }) {
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
            <br />Main Species: {species}
          </p>
          <Link to="/exodus" className="article-link">
            More Info
          </Link>
        </div>
      </div>
      {/* Render other destinations with their own Links if you create separate pages */}
      {/* Example for Mars: */}
      {/* <div>
        <Link to="/mars">More Info</Link>
      </div> */}
      {/* Example for Plantia: */}
      {/* <div>
        <Link to="/plantia">More Info</Link>
      </div> */}
    </>
  );
}