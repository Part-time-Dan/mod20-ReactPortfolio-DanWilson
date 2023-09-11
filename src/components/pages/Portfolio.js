import React from 'react';
import '../../styles/portfolioStyles.css';
import '../../styles/pageStyles.css';
import Project from '../Project.js';

export default function Portfolio() {
  // Array of projects (sample data)
  const projects = [
    {
      title: 'PWA Text Editor',
      imageUrl: '/assets/dw-pwa-jate-ptd-63fb8dd4fd48.herokuapp.com_.png',
      githubLink: 'https://github.com/Part-time-Dan/mod19-TextEditorPWA-DanWilson',
      websiteLink: 'https://dw-pwa-jate-ptd-63fb8dd4fd48.herokuapp.com/',
    },
    {
      title: 'Weather App (API keys disabled)',
      imageUrl: '/assets/Weatherapp_ptd.png',
      githubLink: 'https://github.com/Part-time-Dan/mod06-Weather-DanWilson',
      websiteLink: 'https://part-time-dan.github.io/mod06-Weather-DanWilson/',
    },
    {
      title: 'Quiz App (Concept)',
      imageUrl: '/assets/part-time-dan.github.io_mod04-Quiz-DanWilson_.png',
      githubLink: 'https://github.com/Part-time-Dan/mod04-Quiz-DanWilson',
      websiteLink: 'https://part-time-dan.github.io/mod04-Quiz-DanWilson/',
    },
    {
      title: 'HTML/CSS Portfolio',
      imageUrl: '/assets/html_css_portfoliov1_ptd.png',
      githubLink: 'https://github.com/Part-time-Dan/mod02-Portfolio-DanWilson',
      websiteLink: 'https://part-time-dan.github.io/mod02-Portfolio-DanWilson/',
    },
    {
      title: 'Social Network Backend API',
      imageUrl: '/assets/insomnia_socialmediaAPI_ptd.PNG',
      githubLink: 'https://github.com/Part-time-Dan/mod18-SocialNetworkAPI-DanWilson',
    },
    {
      title: 'mySQL Database Node.js',
      imageUrl: '/assets/mySQL_database_node_ptd.PNG',
      githubLink: 'https://github.com/Part-time-Dan/mod12-EmployeeDatabaseApp-DanWilson',
    },
    // add projects here as desired
  ];


  return (
    <div className="page-container custom-scrollbar">
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
