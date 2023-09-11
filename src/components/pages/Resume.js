import React from 'react';

export default function Resume() {

  const pdfUrl = 'https://drive.google.com/file/d/1Sy8buvBVqsZG9zUCPMmmCXyoyNfJ3VJl/view?usp=sharing'; 

  return (
    <div>
      <h2>My Resume</h2>
      <p>View or download my resume:</p>
      <a href={pdfUrl} download="DanWilson-dev-resume.pdf">
        Download Resume
      </a>
    </div>
  );
}
