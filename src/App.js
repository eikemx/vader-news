import React, { useState, useEffect } from "react";

import "./index.css";

import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation";
import Newsfeed from "./components/Newsfeed";
import VaderError from "./components/VaderError";
import VaderLoader from "./components/VaderLoader";
import NoSearchResult from "./components/NoSearchResult";

const App = () => {
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const url = new URL("http://hn.algolia.com/api/v1/search_by_date");
    url.searchParams.set("tags", "story");
    search && url.searchParams.set("query", search);


    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Random 404");
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.hits);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [search]);

  if (isError) {
    return <VaderError />;
  }

  return (
    <div className="App news-wrapper container">
      <div className="row">
        <Navigation setSearch={setSearch} />
        <div className="newsfeed-wrapper row">
          {isLoading && <VaderLoader />}
          {news && !news.length && <NoSearchResult search={search} />}
          {news &&
            news.length &&
            news
              .filter((element) => element.url)
              .map((element, index) => (
                <Newsfeed news={element} key={element.objectID} index={index} />
              ))}
          <div className="more-button row">
            <button>Next</button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
