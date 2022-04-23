import React from 'react';
import './index.css';
import news from "./news.json";

const App = () => {
  const displayNews = news.hits;
  console.log(displayNews);

  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
          Vader News.
        </p>
      </header>
    </div>
  );
};

export default App;
