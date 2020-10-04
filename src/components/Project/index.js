import React from 'react';
import Github from '../../images/003-github.png'
import WWW from '../../images/world-wide-web.png'


function Project ({ project }) {
    <div className="project">
        <div className="flex-row">
            <h3>Project Name:<span>{project.name}</span></h3>
            <h4>Description:</h4>
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
                    alt="WWW Logo Link"
                    ></img>
            </a>
        </div>
        <div className="flex-row">
            <img src={project.imageLink}></img>
        </div>
    </div>
}

export default Project;