import React from 'react';
import '../styles/footerStyles.css'

export default function Footer() {
  return (
    <div className='footer-container'>
            <div className="footer-icons">
        <a href="https://github.com/Part-time-Dan" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/graftvhost" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/daniel-wilson-98675bb6/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>

      </div>
      <p className='footer-content'>
      </p>
    </div>
  );
}