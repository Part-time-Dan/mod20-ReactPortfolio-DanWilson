import React from 'react';
import '../../styles/portfolioStyles.css';

const styles = {
  headingStyle: {
    fontSize: '100px',
  },
};

export default function Portfolio() {
  return (
    <div className="portfolio-container">
        <h2 style={styles.headingStyle} className="portfolio-title">My Portfolio</h2>
        <p>
          List of portfolio links to deployed app and git hub
        </p>
    </div>
  );
}