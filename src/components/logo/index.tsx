import "./logo.scss";

const Logo = ({ light }: { light?: boolean }) => {
  return (
    <a className="logo" aria-label="scroll to top" href="/">
      <img src={`assets/${light ? "zs_white" : "zs"}.svg`} alt="ZS"></img>
    </a>
  );
};

export default Logo;
