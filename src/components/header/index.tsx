import { useEffect, useState } from "react";
import classnames from "classnames";
import routes from "../../data/routes";
import { useLocation } from "react-router-dom";
import "./header.scss";

const CSS_PREFIX = "header";

type Props = {
  toggle: () => void;
};

const Header = (props: Props) => {
  const { toggle } = props;
  const [scrollNav, setScrollNav] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(0);
  const location = useLocation();
  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const current = routes.findIndex((i) => i === hash);
    setCurrentRoute(current);
  }, [location]);
  return (
    <nav
      className={classnames(CSS_PREFIX, {
        [`${CSS_PREFIX}--show-menu`]: scrollNav,
      })}
      aria-label="Main Navigation"
    >
      <div className="container">
        <a className="logo" aria-label="scroll to top" href="/">
          <img src="assets/zs.svg" alt=""></img>
        </a>
        <ul className="nav-links">
          {routes.map((route, index) => (
            <li
              key={index}
              aria-current={index === currentRoute ? "page" : false}
            >
              <a href={`/#${route}`} className="link">
                {route}
              </a>
            </li>
          ))}
        </ul>
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
