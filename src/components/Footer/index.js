import React from 'react';
import Github from '../../images/003-github.png'
import Linkedin from '../../images/004-linkedin.png'

function Footer() {
    return(
        <footer>
            <h3>Check out my links!</h3>
            <a href="https://github.com/melissabcadena"><img alt="github logo link" src={Github}></img></a>
            <a href="https://github.com/melissabcadena"><img alt="linkedin logo link" src={Linkedin}></img></a>

        </footer>
    )
};

export default Footer;