import React, { useState } from "react";
import useGIF from "../hooks/useGIF";

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
