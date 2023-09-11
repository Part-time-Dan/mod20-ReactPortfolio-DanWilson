import React from 'react';
import '../../styles/resumeStyles.css'
import '../../styles/pageStyles.css'

export default function Resume() {

  const pdfUrl = 'https://drive.google.com/file/d/1Sy8buvBVqsZG9zUCPMmmCXyoyNfJ3VJl/view?usp=sharing'; 

  return (
    <div className='page-container'>
      <h2 className='page-title'>My Resume</h2>
      <p className='resume-content'>View or download my resume:</p>
      <a className='download-btn' href={pdfUrl} download="DanWilson-dev-resume.pdf">
        Download Resume
      </a>
    </div>
  );
}
