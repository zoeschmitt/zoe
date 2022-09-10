import Card from "../../components/card";
import Col from "../../components/col";
import "./projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Col className="center-text">
        <h2>projects</h2>
        <p>Here are some of my favorite projects I've worked on.</p>
      </Col>
      <div className="grid">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  );
};

export default Projects;
