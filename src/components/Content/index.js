import React from 'react';
import Contact from '../Contact';
import About from '../AboutMe';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Content({ currentCategory }) {
    console.log(currentCategory);
    const renderPage = () => {

        switch(currentCategory.name) {
        case 'Portfolio':
            return <Portfolio />;
        case 'Contact Me':
            return <Contact />;
        case 'Resume':
            return <Resume />;
        default:
            return <About />;
        }
    }

    return (
        <div>
            {renderPage(currentCategory)}
        </div>
    )
}

export default Content;

