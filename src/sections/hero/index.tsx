import Button from "../../components/button";
import Col from "../../components/col";
import "./hero.scss";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Col>
        <h1 className="title">hi, i'm zoe</h1>
        <p className="subtitle">software engineer + designer</p>
        <Button
          onClick={() => document.getElementById("about")?.scrollIntoView()}
          aria-label="Go to about me section"
        >
          about me
        </Button>
        <img className="arrow" src="assets/big_arrow.svg" alt="" />
      </Col>
    </section>
  );
};

export default Hero;
