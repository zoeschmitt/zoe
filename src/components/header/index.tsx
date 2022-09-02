import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="assets/zs.svg" alt=""></img>
        </a>
        <Link to="/about">about</Link>
        <Link to="/experience">experience</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
};

export default Header;
