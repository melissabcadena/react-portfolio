import React, {useState} from 'react';
import Header from './components/Header'
import Nav from './components/Nav'
import Content from './components/Content';
import Footer from './components/Footer';
import Background from './images/hero.jpg'
import './App.css';

const style = {
  backgroundImage: `url(${ Background })`
};

function App() {

  const [categories] = useState([ 
    {
        name: "About Me"
    },
    {
        name: "Portfolio"
    },
    {
        name: "Resume"
    },
    {
        name: "Contact Me"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div style= { style }>
      <Header>
          <Nav 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          ></Nav>
      </Header>
      <main>

        <Content currentCategory={currentCategory}/>
      </main>
      <Footer />

    </div>
  );
}

export default App;
