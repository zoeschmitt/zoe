import Project from "../../types/project";
import Chip from "../chip";
import Row from "../row";
import "./card.scss";

const Card = (project: Project) => {
  return (
    <div className="card">
      <img
        className="project-image"
        src={`assets/${project.image}`}
        alt={project.alt}
      />
      <div className="details">
        <div className="content">
          <Row>
            <h3>{project.name}</h3>
            <div className="source-code-link">
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <img
                  src="assets/github_black.svg"
                  alt={`Source code link for ${project.name}`}
                />
              </a>
            </div>
          </Row>
          <div className="chips">
            {project.categories.map((chip, index) => (
              <Chip key={index} text={chip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
