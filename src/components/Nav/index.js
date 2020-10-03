import React from 'react';

function Nav() {
    return(
        <div>
            <h2>Melissa Cadena Portfolio</h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                            </a>
                    </li>
                    <li>
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;