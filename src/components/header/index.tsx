import Button from "../button";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="/" className="logo">
          <img src="assets/zs.svg" alt=""></img>
        </a>
        <Button>contact</Button>
      </div>
    </div>
  );
};

export default Header;
