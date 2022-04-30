import React from "react";

const Newsfeed = (props) => {
  

    const getHost = (url) => {
      let result;
      if (url) {
        try {
          result = new URL(url).host
        } catch(e) {
          console.log(e)
          result = "No url"
        } 
      } else {
        result = "No url"
      }
      return result
    }

  return (
    <div className="news-item">
      <div className="news-title">
        <p className="index">{props.index + 1}</p>
        <p className="title">{props.news.title}</p>
        <p className="url">({getHost(props.news.url)})</p>
      </div>
      <div className="news-subtext">
        <p className="rank">{props.news.points} points</p>
        <p className="author">by {props.news.author}</p>
        {/* <p className="date">posted {diff} | hide |</p> */}
        <p className="comment">{props.news.num_comments} comments </p>
      </div>
    </div>
  );
};

export default Newsfeed;
