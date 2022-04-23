import React, {useState, useEffect} from 'react';
import './index.css';
import news from "./news.json";
import Footer from "./components/Footer.js"
import Navigation from "./components/Navigation"
import Newsfeed from './components/Newsfeed';

const App = () => {

  // const [news, setNews] = useState()



  const displayNews = news.hits;
  console.log(displayNews);





  return (
    <div className="App"   >
      <Navigation />
      {displayNews.map((element) => 
       <Newsfeed news={element} key={element.objectID} /> 
      )}
      <Footer />
    </div>
  );
};

export default App;
