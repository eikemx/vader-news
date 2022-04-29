import React from "react";
import { parseISO, differenceInHours, formatDistanceToNow, differenceInDays, differenceInMonths, formatDistance   } from 'date-fns'

export default function Newsfeed(props, newsDate) {
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
    <div>
        <p>{props.index+1}</p>
        <p>{props.news.title}</p>
        <p>{props.news.url}</p>
        <p>{props.news.points}</p>
        <p>by {props.news.author}</p>
        <p>{props.news.created_at} | hide |</p>
        <p> posted {diff} | hide |</p>
        <p>{props.news.num_comments}</p>
    </div>
  );
}
