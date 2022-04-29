import React, {useState, useEffect} from 'react';
import { formatDistance, subDays, parseISO, differenceInHours, differenceInDays, differenceInWeeks, differenceInMonths } from 'date-fns';
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
      {displayNews.map((element, index) => 
       <Newsfeed news={element} key={element.objectID} index={index} newsDate={element.created_at} /> 
      )}
      <Footer />
    </div>
  );
};

export default App;
