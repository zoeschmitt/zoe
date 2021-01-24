import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectElements'

const Projects = () => {
    return (
        <ProjectsContainer id="work">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper> 
                <ProjectsCard>
                    <ProjectsIcon src="/images/rocket.svg" alt="space"/>
                    <ProjectsH2>Project Name</ProjectsH2>
                    <ProjectsP>This project was made with blah using blah and does blah</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src="/images/rocket.svg" alt="space"/>
                    <ProjectsH2>Project Name</ProjectsH2>
                    <ProjectsP>This project was made with blah using blah and does blah</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src="/images/rocket.svg" alt="space"/>
                    <ProjectsH2>Project Name</ProjectsH2>
                    <ProjectsP>This project was made with blah using blah and does blah</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
