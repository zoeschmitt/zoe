import Col from "../../components/col";
import classnames from "classnames";
import tech from "../../data/stack";
import "./tech.scss";

const Tech = () => {
  return (
    <section id="skills" className="tech">
      <Col className="wrapper">
        <Col className="text">
          <h2>tech I work with</h2>
          <p>
            You'll usually find me building web apps with JavaScript,
            TypeScript, React, and Angular. For mobile development, I enjoy
            using Flutter, Swift, and Java to build cross-platform apps.
            Occasionally, I dabble in back-end development with Node, Express,
            AWS, and MongoDB. I also have intermediate experience with machine
            learning and web3 using Python.
          </p>
        </Col>
        <div className="grid">
          {tech.map((i) => (
            <img
              src={`assets/logos/${i.src}`}
              alt={i.alt}
              className={classnames("item", {
                "item--vert": i.vert,
              })}
            />
          ))}
        </div>
      </Col>
    </section>
  );
};

export default Tech;
