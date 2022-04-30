import React from "react";
import {
  parseISO,
  formatDistance,
} from "date-fns";

const Newsfeed = (props) => {

  const formatDate = (timestamp) => {
    const convertedTimeFromIso = parseISO(timestamp, {
      additionalDigits: 1,
    });
    const diff = formatDistance(
      new Date(convertedTimeFromIso),
      new Date(),
      { addSuffix: true }
    );
    return diff
  }

  // 1. Deal with everything in pure Javascript
  // 2. use a library and manually calculate the diff
  // 3. use a library and automatically calculate the diff
  // 4. use an external package to do everything for you: https://www.npmjs.com/package/timeago-react 

 
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
        <p className="rank">{props.news.points} upvotes </p>
        <p className="author">by {props.news.author}</p>
        <p className="date">posted {formatDate(props.news.created_at)} | hide |</p>
        <p className="comment">{props.news.num_comments} comments </p>
      </div>
    </div>
  );
};

export default Newsfeed;
