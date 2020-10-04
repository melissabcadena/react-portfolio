import React from 'react';
import Contact from '../Contact'

function Content() {
    // const [currentPage, handlePageChange] = useState('About Me')

    // const renderPage = () => {
    //     case 'Portfolio':
    //         return <About />;
    //     case 'Contact Me':
    //         return <Contact />;
    //     case 'Resume':
    //         return <Resume />;
    //     default:
    //         return <About />;
    //     }
    // }

    return (
        <div>
            <Contact />
        </div>
    )
}

export default Content;

