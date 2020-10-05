import React from 'react';
import Github from '../../images/003-github.png'
import WWW from '../../images/world-wide-web.png'


function Project ({ project, i }) {
    return (
        <div className="project flex-container">
            <div className="project-info flex-row">
                <h3>Project Name: <span>{project.name}</span></h3>
                <p>{project.description}</p>
                <a href={project.githubLink}>
                    <img 
                        src={Github}
                        alt="Github Logo Link">
                    </img>
                </a>
                <a href={project.deployedLink}>
                    <img 
                        src={WWW}
                        className="logo"
                        alt="WWW Logo Link"
                        ></img>
                </a>
            </div>
            <div>
                <img 
                    src={require(`../../images/item-${i + 1}.png`)}
                    alt="project screenshot"
                ></img>
            </div>
        </div>
    )}

export default Project;