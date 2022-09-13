import Card from "../../components/card";
import Col from "../../components/col";
import projects from "../../data/projects";
import "./projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Col className="center-text">
        <h2>projects</h2>
        <p>Here are some of my recent projects!</p>
      </Col>
      <div className="grid">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
