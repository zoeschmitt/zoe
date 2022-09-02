import Col from "../../components/col";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-grid">
        <Col>
          <h1 className="title">hi, i'm zoe</h1>
          <p className="subtitle">software engineer + designer</p>
        </Col>
        <div className="end">
          <div className="circle" aria-hidden="true">
            <img src="assets/skills.svg" alt="" />
            <p className="emoji">👩🏼‍💻</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
