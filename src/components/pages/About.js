import React from 'react';
import '../../styles/aboutStyles.css';

const styles = {
  headingStyle: {
    fontSize: '100px',
  },
};

export default function About() {
  return (
    <div className="about-container">
        <h2 style={styles.headingStyle} className="about-title">About Page</h2>
        <p>
          Text here
        </p>
    </div>
  );
}