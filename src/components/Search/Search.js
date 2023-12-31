import React from "react";
import { useState } from "react";
import "./search.css";

// //Opt 1: use React form
// const Search = ({ setCurrentSearch }) => {
//   const [input, setInput] = useState("");
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setCurrentSearch(input);
// };
// return (
//   <form
//     className="search"
//     method="post"
//     value={input}
//     onSubmit={handleSubmit}
//   >
//     <label>
//       <input
//         className="searchInput"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         type="text"
//       />
//     </label>
//     <label>
//       <button type="submit">Search</button>
//     </label>
//   </form>

//Opt 2: write my own;
const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const onButtonClick = async () => {
    console.log("go onButtonClick. input = " + input);
    await onSearch(input);
  };

  return (
    <div className="search">
      <input
        className="input"
        value={input}
        onChange={inputHandler}
        type="text"
      />
      <button onClick={onButtonClick}>Search</button>
    </div>
  );
};

export default Search;
