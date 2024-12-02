import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;

function Random() {
  const [gif, setGif] = useState("");
  async function getGif() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    //console.log(imageSource);
    setGif(imageSource);
  }
  useEffect(() => {
    getGif();
  }, []);
  const handleClick = () => {
    getGif();
  };

  return (
    <>
      <div className="container">
        <h1>Random GIF</h1>
        <img width="500" height="500" src={gif} alt="Ramdom GIF" />
        <button onClick={handleClick}>Random GIF</button>
      </div>
    </>
  );
}

export default Random;
