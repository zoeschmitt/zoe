import Button from "../../components/button";
import Circle from "../../components/circle";
import Col from "../../components/col";
import "./about.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="grid">
        <Col>
          <h2>about me</h2>
          <p>
            I'm currently a design engineer at Visa, where I build fully
            accessible applications that help shape the direction of our brand and
            products. In the past I've worked as a UI/UX designer and developer.
          </p>
          <p>
            I enjoy working on challenging problems and finding straight forward
            solutions through design and code. I focus on simplicity,
            accessibility, and human-centered approaches to both development and
            design.
          </p>
          <p>
            After hours, you'll find me outdoors on a hike, reading, or working
            on a project!
          </p>
          <Button
            onClick={() => document.getElementById("projects")?.scrollIntoView()}
            aria-label="go to projects"
          >
            projects
            <img src="assets/arrow.svg" alt="" />
          </Button>
        </Col>
        <div className="end">
          <Circle />
        </div>
      </div>
    </section>
  );
};

export default About;
