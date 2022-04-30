
import React, {useState, useEffect} from 'react';

import './index.css';

import news from "./news.json";
import Footer from "./components/Footer.js"
import Navigation from "./components/Navigation"
import Newsfeed from './components/Newsfeed';

const App = () => {

  const displayNews = news.hits;
 // console.log(displayNews);

  return (
    <div className="App news-wrapper"   >
      <Navigation />
      <div className='newsfeed-wrapper'>
        {}
        {displayNews.filter((element) => element.url).map((element, index) => 
        <Newsfeed news={element} key={element.objectID} index={index} /> 
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
