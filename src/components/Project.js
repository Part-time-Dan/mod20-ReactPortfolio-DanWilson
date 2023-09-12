import React from 'react';
import '../styles/projectStyles.css'

const Project = ({ title, imageUrl, githubLink, websiteLink }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-buttons">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
          GitHub
        </a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="website-button">
          Website
        </a>
      </div>
    </div>
  );
};

export default Project;

// starting code for project links