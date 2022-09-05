import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import classnames from "classnames";
import routes from "../../data/routes";
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
          {routes.map((route) => (
            <Link to={`/${route}`} className="link">
              {route}
            </Link>
          ))}
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
