import React, { useState } from 'react';
import Navigation from './Navigation';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import '../styles/gradientStyles.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About setCurrentPage={setCurrentPage} />;
            case 'Portfolio':
                return <Portfolio setCurrentPage={setCurrentPage} />;
            case 'Resume':
                return <Resume setCurrentPage={setCurrentPage} />;
            case 'Contact':
                return <Contact setCurrentPage={setCurrentPage} />;
            default:
                return null;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='App animated-background'>

            <Header />

            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}

            <Footer />
            
        </div>
    );
}
