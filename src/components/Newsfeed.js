import React, { useState } from "react";
import Pagination from "./Pagination";
import VaderError from "./VaderError";
import { parseISO, formatDistance } from "date-fns";

const Newsfeed = (props) => {
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // Add error handling for props.news
  if (!props.news) {
    return <VaderError />;
  }

  // Ensure props.news is an array
  if (!Array.isArray(props.news)) {
    console.error(
      "Expected props.news to be an array, received:",
      typeof props.news
    );
    return <VaderError />;
  }

  const formatDate = (timestamp) => {
    try {
      if (!timestamp) {
        return "No date available";
      }
      const convertedTimeFromIso = parseISO(timestamp, {
        additionalDigits: 1,
      });
      // Check if the date is valid
      if (isNaN(convertedTimeFromIso.getTime())) {
        return "Invalid date";
      }
      const diff = formatDistance(convertedTimeFromIso, new Date(), {
        addSuffix: true,
      });
      return diff;
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  // 1. Deal with everything in pure Javascript
  // 2. use a library and manually calculate the diff
  // 3. use a library and automatically calculate the diff
  // 4. use an external package to do everything for you: https://www.npmjs.com/package/timeago-react

  const getHost = (url) => {
    let result;
    if (url) {
      try {
        result = new URL(url).host;
      } catch (e) {
        console.log(e);
        result = "No url";
      }
    } else {
      result = "No url";
    }
    return result;
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = props.news.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(props.news.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentItems.map((item, index) => (
        <div className="news-item" key={item.objectID}>
          <div className="news-title">
            <p className="index">{indexOfFirstItem + index + 1}</p>
            <p className="title">
              <a className="title-link" href={item.url}>
                {item.title}
              </a>
            </p>
            <p className="url">({getHost(item.url)})</p>
          </div>
          <div className="news-subtext">
            <p className="rank">{item.points} upvotes </p>
            <p className="author"> by {item.author}</p>
            <p className="date">
              posted {formatDate(item.created_at)} | hide |
            </p>
            <p className="comment">{item.num_comments} comments </p>
          </div>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Newsfeed;
