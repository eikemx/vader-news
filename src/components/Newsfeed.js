import React from "react";

export default function Newsfeed(props) {
  return (
    <div>
      <ol>
      <li>
        <p>{props.news.title}</p>
        <p>{props.news.url}</p>
        <p>{props.news.points}</p>
        <p>by {props.news.author}</p>
        <p>{props.news.created_at} | hide |</p>
        <p>{props.news.num_comments}</p>
        </li>
      </ol>
    </div>
  );
}
