import React from "react";

const Newsfeed = (props) => {
  return (
    <div className="news-item">
      <div className="news-title">
          <p className="rank">{props.index+1}</p>
          <p className="title">{props.news.title}</p>
          <p className="url">{props.news.url}</p>
        </div>
        <div className="news-subtext">
          <p className="rank">{props.news.points}</p>
          <p className="author">by {props.news.author}</p>
          <p className="date">{props.news.created_at} | hide |</p>
          <p className="comment">{props.news.num_comments}</p>
        </div>
    </div>
  );
};

export default Newsfeed;
