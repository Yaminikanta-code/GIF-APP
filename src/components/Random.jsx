import React from "react";
import useGif from "../hooks/useGIF";
import useGIF from "../hooks/useGIF";

function Random() {
  const { gif, getGif } = useGIF();

  return (
    <>
      <div className="container">
        <h1>Random GIF</h1>
        <img
          width="250"
          height="250"
          src={gif}
          alt="Ramdom GIF"
          style={{ borderRadius: "20px" }}
        />
        <button onClick={getGif}>NEW GIF</button>
      </div>
    </>
  );
}

export default Random;
