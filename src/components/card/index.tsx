import Project from "../../types/project";
import Chip from "../chip";
import Row from "../row";
import classnames from "classnames";
import "./card.scss";
import Col from "../col";

const CSS_PREFIX = "project-image";

const Card = (project: Project) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img
          className={classnames(CSS_PREFIX, {
            [`${CSS_PREFIX}--small`]: Boolean(project.small),
          })}
          src={`assets/${project.image}`}
          alt={project.alt}
        />
      </div>
      <div className="details">
        <div className="content">
          <Row>
            <Col>
              <h3>{project.name}</h3>
              <p className="desc">{project.description}</p>
            </Col>
            {project.source && (
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
            )}
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
