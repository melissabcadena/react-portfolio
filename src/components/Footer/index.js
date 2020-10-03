import React from 'react';
import Github from '../../images/003-github.png'

function Footer() {
    return(
        <footer>
            <h3>Check out my Github!</h3>
            <a href="https://github.com/melissabcadena"><img alt="github logo link" src={Github}></img></a>
        </footer>
    )
};

export default Footer;