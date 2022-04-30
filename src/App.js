import React, { useState, useEffect } from "react";
import "./index.css";
// import news from "./news.json";
import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation";
import Newsfeed from "./components/Newsfeed";

const App1 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search_by_date?tags=story ")
      .then((response) => response.json())
      .then((data) => setNews(data.hits));
  }, []);
  console.log(news);

  const displayNews = news;

  console.log(displayNews);

  return (
    <div className="App news-wrapper">
      <Navigation />
      <div className="newsfeed-wrapper">
        {displayNews
          .filter((element) => element.url)
          .map((element, index) => (
            <Newsfeed news={element} key={element.objectID} index={index} />
          ))}
        <Footer />
      </div>
    </div>
  );
};

export default App1;
