import Col from "../../components/col";
import "./skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Col>
        <h2>My Tech Stack</h2>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum{" "}
        </p>
        <div className="tech">
          <img src="assets/js.svg" alt="javascript" />
          <img src="assets/ts.svg" alt="typescript" />
          <img src="assets/swift.svg" alt="swift programming language" />
          <img src="assets/python.svg" alt="python programming language" />
          <img src="assets/flutter.svg" alt="flutter" />
          <img src="assets/react.svg" alt="react js" />
          <img src="assets/angular.svg" alt="angular" />
        </div>
      </Col>
    </section>
  );
};

export default Skills;
