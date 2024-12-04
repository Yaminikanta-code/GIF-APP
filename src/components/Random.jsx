import React from "react";
import useGif from "../hooks/useGIF";
import useGIF from "../hooks/useGIF";

/**
 * A React component that displays a random GIF from the Giphy API and allows
 * users to fetch a new GIF by clicking a button.
 *
 * The component uses the `useGIF` hook to fetch a GIF and store it in state.
 *
 * @returns {React.ReactElement} A React component.
 */
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
