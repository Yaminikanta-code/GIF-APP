import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGIF = (tag) => {
  const [gif, setGif] = useState("");
  const getGif = async function () {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    //console.log(imageSource);
    setGif(imageSource);
  };
  useEffect(() => {
    getGif(tag);
  }, [tag]);
  return { gif, getGif };
};

export default useGIF;
