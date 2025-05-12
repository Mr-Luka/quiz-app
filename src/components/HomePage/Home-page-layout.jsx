import { Link } from 'react-router-dom';

export default function HomePageLayout({ children }) {
  return (
    <div className="layout-wrapper">
      <header className="header">
        <div className="welcome-universe-tour">
          <h1>Universe TourX</h1>
        </div>
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/crew">Crew</Link></li>
            <li><Link to="/technology">Technology</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}