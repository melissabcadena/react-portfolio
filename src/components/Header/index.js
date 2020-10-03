import React from 'react';

function Header (props) {

    
    return (
        <header>
            <h2>Melissa Cadena Portfolio</h2>

            <div className="hero-image">
                {props.children}
            </div>
        </header>
    )
}

export default Header;