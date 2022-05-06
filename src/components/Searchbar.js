import React, { useState } from "react";

const Searchbar = (props) => {
  const [userInput, setUserInput] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.setSearch(userInput)
      
      }}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
    </form>
  );
};

export default Searchbar;

// // // 1. fetch the real HN api inside a useEffect
// // // 2. store the data in a state
// // // 3. you need a way to capture the user input (input field into a form) ==> one state
// // // 4. you need a way for the user to fire the search query (button) "search" ==> different state
// // // 5. re-fire the useEffect based on one of its dependencies (dependency array)
// // // original url: http://hn.algolia.com/api/v1/search_by_date?tags=story  need to append: &query=whatever
// // // 6. re-render will take care of the rest
