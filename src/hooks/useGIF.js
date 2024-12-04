import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
/**
 * Returns a state variable and a function to retrieve a random GIF from Giphy's API.
 * If a tag is provided, the GIF is related to that tag.
 * @param {string} [tag] - The tag to use for a tag-specific GIF.
 * @returns {{ gif: string, getGif: () => Promise<void> }}
 */
const useGIF = (tag) => {
  const [gif, setGif] = useState("");
  /**
   * Fetches a random GIF from the Giphy API and updates the state with the GIF's URL.
   * If a tag is specified, the GIF will be related to that tag.
   * Utilizes axios for making HTTP requests.
   */
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
