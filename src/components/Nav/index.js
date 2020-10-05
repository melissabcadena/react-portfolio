import React, {useEffect} from 'react';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
      } = props;

      useEffect(()=>{
          document.title = ('MC - ' + currentCategory.name)
      }, [currentCategory])
      
    return (
        <div className="flex-container">
            <nav>
                <ul>
                {categories.map((category) => (
                    <li
                        className={ `${
                            currentCategory.name === category.name && 'navActive'
                        }`}
                        key={category.name}
                    >
                        <a onClick={() => {setCurrentCategory(category)}} href={'#' + category.name}>
                        {category.name}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;