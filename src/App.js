import React from 'react';
import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import Calculator from './components/calculator';
import Articles from './components/articles';
import Related from './components/related';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='main-content'>
          <Header/>
          <Banner/>
          <Calculator/>
          <Articles />
          <Related/>
          <Footer />
      </div>  
    </div>
  );
}

export default App;





