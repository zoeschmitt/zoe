import Col from "../../components/col";
import "./tech.scss";

const Tech = () => {
  return (
    <section id="skills" className="tech">
      <Col className="wrapper">
        <Col className="text">
          <h2>tech I work with</h2>
          <p>
            You'll usually find me building web apps with JavaScript, TypeScript, React, and
            Angular. For mobile development, I enjoy using Flutter, Swift, and
            Java to build cross-platform apps. Occasionally, I dabble in back-end
            development with Node, Express, AWS, and MongoDB. I also have
            intermediate experience with machine learning and web3 using Python.
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
