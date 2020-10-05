import React from 'react';

function Header (props) {

    
    return (
        <header>
            <h2>Melissa Cadena Portfolio</h2>
                {props.children}
        </header>
    )
}

export default Header;