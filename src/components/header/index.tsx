import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import classnames from "classnames";
import "./header.scss";

const CSS_PREFIX = "header";

type Props = {
  toggle: () => void;
};

const Header = (props: Props) => {
  const { toggle } = props;
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <nav
      className={classnames(CSS_PREFIX, {
        [`${CSS_PREFIX}--show-menu`]: scrollNav,
      })}
    >
      <div className="container content">
        <button
          className="logo"
          onClick={toggleHome}
          aria-label="scroll to top"
        >
          <img src="assets/zs.svg" alt=""></img>
        </button>
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
        <button className="menu" aria-label="open menu" onClick={toggle}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
    </nav>
  );
};

export default Header;
