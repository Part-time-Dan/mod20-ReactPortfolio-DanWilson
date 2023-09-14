// import React, { useEffect, useRef } from 'react';
import React from 'react';
import '../../styles/portfolioStyles.css';
import '../../styles/pageStyles.css';
import Project from '../Project.js';

export default function Portfolio() {
  // Array of projects (sample data)
  const projects = [
    {
      title: 'Project 1',
      imageUrl: '/assets/mountain-8242717_1280.jpg',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      title: 'Project 2',
      imageUrl: '/assets/mountain-8242717_1280.jpg',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      title: 'Project 3',
      imageUrl: '/assets/mountain-8242717_1280.jpg',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      title: 'Project 4',
      imageUrl: '/assets/mountain-8242717_1280.jpg',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      title: 'Project 5',
      imageUrl: '/assets/mountain-8242717_1280.jpg',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      title: 'Project 6',
      imageUrl: '/assets/mountain-8242717_1280.jpg',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    // add projects here as desired
  ];

  // const pageContainerRef = useRef(null);

  // useEffect(() => {
  //   window.onload = adjustContainerHeight;
  //   return () => {
  //     window.onload = null;
  //   };
  // }, []);

  // const adjustContainerHeight = () => {
  //   const pageContainer = pageContainerRef.current;
  //   if (pageContainer) {
  //     const totalHeight = Array.from(pageContainer.children).reduce(
  //       (acc, child) => acc + child.getBoundingClientRect().height,
  //       0
  //     );
  //     pageContainer.style.minHeight = `${totalHeight}px`;
  //   }
  // };

  return (
    <div className="page-container custom-scrollbar" 
    // ref={pageContainerRef}
    >
      <h2 className="page-title">My Portfolio</h2>
      <div className="portfolio-content">
        {/* map through project array */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}