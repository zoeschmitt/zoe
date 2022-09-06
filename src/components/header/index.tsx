import { useEffect, useState } from "react";
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
  return (
    <nav
      className={classnames(CSS_PREFIX, {
        [`${CSS_PREFIX}--show-menu`]: scrollNav,
      })}
    >
      <div className="container">
        <button
          className="logo"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          aria-label="scroll to top"
        >
          <img src="assets/zs.svg" alt=""></img>
        </button>
        <div className="nav-links">
          {routes.map((route) => (
            <a href={`/#${route}`} className="link">
              {route}
            </a>
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
