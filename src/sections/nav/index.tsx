import { useEffect, useState } from "react";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import "./nav.scss";
import routes from "../../data/routes";
import NavMenu from "../../components/nav-menu";

const CSS_PREFIX = "nav";

const Nav = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(0);
  const location = useLocation();

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  const toggleMenu = () => {
    const body = document.getElementById("body");
    body?.classList.toggle("no-scroll");
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const current = routes.findIndex((i) => i.name === hash);
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
              <a href={route.href ?? `/#${route}`} className="link">
                {route.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="menu" aria-label="open menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
      <NavMenu show={menuOpen} toggle={toggleMenu} />
    </nav>
  );
};

export default Nav;
