import React from 'react';
import '../../styles/aboutStyles.css'

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

export default function About() {
  return (
    <div style={styles.headerStyle} className="about-container">
        <h1 style={styles.headingStyle} className="about-title">About Page</h1>
        <p>
          Text here
        </p>
    </div>
  );
}