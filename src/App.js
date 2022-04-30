
import React, {useState, useEffect} from 'react';

import './index.css';

// import news from "./news.json";
import Footer from "./components/Footer.js"
import Navigation from "./components/Navigation"
import Newsfeed from './components/Newsfeed';
import VaderError from './components/VaderError';

const App = () => {

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://hn.algolia.com/api/v1/search_by_date?query=react&tags=story")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Random 404");
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.hits);
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        setIsError(true)
      })
  }, []);

  if (isError) {
    return <VaderError/>;
  }
  // console.log(news);

  const displayNews = news;

//  console.log(displayNews);

  return (
    <div className="App news-wrapper"   >
      <Navigation />
      <div className='newsfeed-wrapper'>
        {/* {isLoading ? <VaderLoader/> : } */}
        {displayNews.filter((element) => element.url).map((element, index) => 
        <Newsfeed news={element} key={element.objectID} index={index} /> 
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
