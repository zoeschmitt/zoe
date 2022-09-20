import { useState } from "react";
import Card from "../../components/card";
import Col from "../../components/col";
import Dialog from "../../components/dialog";
import projects from "../../data/projects";
import "./projects.scss";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <section id="projects" className="projects">
      {show && (
        <Dialog>
          <div>
            <button
              className="menu"
              aria-label="open menu"
              onClick={() => setShow(false)}
            >
              <div className="line-top"></div>
              <div className="line-bot"></div>
            </button>
            <h3>content</h3>
          </div>
        </Dialog>
      )}
      <Col className="center-text">
        <h2>projects</h2>
        <p>Here are some of my recent projects.</p>
      </Col>
      <div className="grid">
        {projects.map((project, index) => (
          <Card key={index} project={project} showDialog={setShow} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
