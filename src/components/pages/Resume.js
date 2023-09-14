import React from 'react';
import '../../styles/resumeStyles.css'
import '../../styles/pageStyles.css'
import Graph from '../Graph';




export default function Resume() {

  const pdfUrl = 'https://drive.google.com/file/d/1Sy8buvBVqsZG9zUCPMmmCXyoyNfJ3VJl/view?usp=sharing';

  return (
      <div className='page-container'>
        <div>
          <h2 className='page-title'>My Resume</h2>
          <p className='resume-content'>View or download my resume:</p>
          <a className='download-btn' href={pdfUrl} download="DanWilson-dev-resume.pdf">
            Download Resume
          </a>
          
        </div>
        <div className='graph-container'>
        <h3>Skills</h3>
        <Graph />
        </div>
      </div>
  );
}
