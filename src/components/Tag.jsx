import React, { useState } from "react";
import useGIF from "../hooks/useGIF";

/**
 * React component that displays a random GIF from the Giphy API.
 * It allows user to input a tag and fetch a random GIF related to that tag.
 * @function
 * @return {ReactElement} The rendered element
 */
function Tag() {
  const [tag, setTag] = useState("random");
  const { gif, getGif } = useGIF(tag);
  return (
    <>
      <div className="container">
        <h1>Random {tag}</h1>
        <img
          width="250"
          height="250"
          src={gif}
          alt="Ramdom GIF"
          style={{ borderRadius: "20px" }}
        />
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button onClick={() => getGif(tag)}>NEW GIF</button>
      </div>
    </>
  );
}

export default Tag;
