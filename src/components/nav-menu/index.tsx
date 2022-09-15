import classnames from "classnames";
import { Link } from "react-router-dom";
import routes from "../../data/routes";
import Route from "../../types/route";
import Row from "../row";
import "./nav-menu.scss";

const CSS_PREFIX = "nav-menu";

type Props = {
  show?: boolean;
  toggle: () => void;
};

const NavMenu = (props: Props) => {
  const { show, toggle } = props;

  const navLinkOnClick = (route: Route) => {
    toggle();
    if (route.href) window.location.href = route.href;
    else document.getElementById(route.name)?.scrollIntoView();
  };
  return (
    <nav
      className={classnames(CSS_PREFIX, {
        [`${CSS_PREFIX}--show`]: show,
      })}
      id="nav-menu"
    >
      <Row className="header-row">
        <div className="top-header">
          <a className="logo" aria-label="scroll to top" href="/">
            <img src="assets/zs_white.svg" alt=""></img>
          </a>
          <button className="menu" aria-label="open menu" onClick={toggle}>
            <div className="line-top"></div>
            <div className="line-mid"></div>
            <div className="line-bot"></div>
          </button>
        </div>
      </Row>
      <div className="list-wrapper">
        <div>
          <ul className="list">
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  className="link"
                  to={route.href ? "#" : `/#${route.name}`}
                  onClick={() => navLinkOnClick(route)}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
          <Row className="socials">
            <a
              href="https://github.com/zoeschmitt"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="socials"
            >
              <img src="assets/github_white.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/zmschmitt/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="socials"
            >
              <img src="assets/linkedin_white.svg" alt="" />
            </a>
          </Row>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
