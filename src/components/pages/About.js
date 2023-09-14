import React from 'react';
import '../../styles/aboutStyles.css';
import '../../styles/pageStyles.css'

export default function About() {
  return (
    <div className='page-container custom-scrollbar'>
      <h2 className='page-title'>About Me</h2>
      <img src="/assets/business-cat.jpg" alt="This is not actually me. It is, in fact, a business cat." className="about-image" />
      <p className='about-content'>
        I live in the greater Salt Lake City metropolitan area. I work full-time while attending coding bootcamp through the University of Utah part-time, with a focus on full-stack web development. I enjoy solving puzzles
        and working with computers so coding seemed like an exciting opportunity that I'd like to turn into a career some day soon. <br />
        <br />
        So far, I have mainly studied MERN stack through class. But I am interested in branching out into other coding languages for fun projects.
        This portfolio you're visiting right now is my introduction to React.js.<br />
      </p>
    </div>
  );
}
