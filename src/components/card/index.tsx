import Project from "../../types/project";
import Chip from "../chip";
import Row from "../row";
import classnames from "classnames";
import "./card.scss";

const CSS_PREFIX = "project-image";

const Card = (project: Project) => {
  return (
    <button className="card">
      <img
        className={classnames(CSS_PREFIX, {
          [`${CSS_PREFIX}--small`]: Boolean(project.small),
        })}
        src={`assets/${project.image}`}
        alt={project.alt}
      />
      <div className="details" aria-hidden="true">
        <div className="content">
          <Row>
            <h3>{project.name}</h3>
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
    </button>
  );
};

export default Card;
