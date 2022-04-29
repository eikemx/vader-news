import React from "react";
import { parseISO, differenceInHours, formatDistanceToNow, differenceInDays, differenceInMonths, formatDistance   } from 'date-fns'


const Newsfeed = (props, newsDate) => {
// Current date
const dateInMs = new Date()
// console.log(dateInMs)

// const result = differenceInHours(
//   new Date(2021, 1, 31, 11, 0),
//   new Date(2022, 4, 29, 21, 0)
// )

// console.log(result);

// News Date
const convertedTimeFromIso = parseISO("2021-01-31T11:05:47.000Z", { additionalDigits: 1 } )
const convervedTimeToMs = convertedTimeFromIso.getTime()
console.log(convertedTimeFromIso);
console.log(convervedTimeToMs);

const timeDiffInDays = differenceInDays(
  new Date(dateInMs),
  new Date(convertedTimeFromIso)
)
const timeDiffInHrs = differenceInHours(
  new Date(dateInMs),
  new Date(convertedTimeFromIso)
)
const timeDiffInMonths = differenceInMonths(
  new Date(dateInMs),
  new Date(convertedTimeFromIso)
)

const diff = formatDistance(
  new Date(convertedTimeFromIso),
  new Date(dateInMs),
  { addSuffix: true }
)
console.log(diff);
// console.log(timeDiffInDays, timeDiffInHrs, timeDiffInMonths ); 

// if (timeDiffInMonths < 1) {
//   return <h1> posted  {differenceInDays} ago</h1>
// } else if { }


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
          <p className="date">posted {diff} | hide |</p>
          <p className="comment">{props.news.num_comments}</p>
        </div>

    </div>
  );
};

export default Newsfeed;
