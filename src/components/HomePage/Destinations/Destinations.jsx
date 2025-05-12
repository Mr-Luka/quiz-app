import './Destinations.css';
import { Link } from 'react-router-dom';

export default function Destinations({ planetName, planetWelcome, species, planetVideo }) {

  // Function that will determine correct route
  const getDestinationLink = (name) => {
    switch (name.toLowerCase()) {
      case 'exodus':
        return '/exodus';
      case 'mars':
        return '/mars';
      case 'plantia':
        return '/plantia';
      default:
        return '/destinations'; // fallback
    }
  };

  return (
    <div className="destination-card">
      <video src={planetVideo} autoPlay muted loop className="planet-video" />
      <div className="text">
        <p className="sub-heading">Destination:</p>
        <h1 className="title-destination">{planetName}</h1>
        <p className="planet-preview-p">
          {planetWelcome}
          <br />
          Main Species: {species}
        </p>
        <Link to={getDestinationLink(planetName)} className="article-link">
          More Info
        </Link>
      </div>
    </div>
  );
}