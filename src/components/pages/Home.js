import React from 'react';
import '../../styles/homeStyles.css'

const styles = {
  headerStyle: {
    background: 'blue',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

export default function Home() {
  return (
    <div style={styles.headerStyle} className="home-container">
        <h1 style={styles.headingStyle} className="home-title">Home Page</h1>
        <p>
          Text here
        </p>
    </div>
  );
}
