import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="assets/zs.svg" alt=""></img>
        </a>
        <div className="nav-links">
          <Link to="/about" className="link">
            about
          </Link>
          <Link to="/experience" className="link">
            experience
          </Link>
          <Link to="/work" className="link">
            work
          </Link>
          <Link to="/contact" className="link">
            contact
          </Link>
        </div>
        <div className="menu">

        </div>
      </div>
    </div>
  );
};

export default Header;
