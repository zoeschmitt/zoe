import Col from "../../components/col";
import "./tech.scss";

const Tech = () => {
  return (
    <section id="tech" className="tech">
      <Col className="wrapper">
        <Col className="text">
          <h2>tech I work with</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </Col>
        <div className="grid">
          <img
            src="assets/logos/js.svg"
            alt="javascript"
            className="item item--vert"
          />

          <img
            src="assets/logos/flutter.svg"
            alt="flutter"
            className="item item--vert"
          />
          <img
            src="assets/logos/react.svg"
            alt="react js"
            className="item item--vert"
          />
        </div>
        <div className="grid">
          <img
            src="assets/logos/swift_h.svg"
            alt="swift programming language"
            className="item"
          />
          <img src="assets/logos/ts.svg" alt="typescript" className="item" />
          <img src="assets/logos/angular.svg" alt="angular" className="item" />
        </div>
      </Col>
    </section>
  );
};

export default Tech;
