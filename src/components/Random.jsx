import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import.meta.env.REACT_APP_API_KEY;
const API_KEY = "process.env.REACT_APP_API_KEY";

function Random() {
  useEffect(() => {
    async function getGif() {
      const url =
        "https://api.giphy.com/v1/gifs/random?api_key=J6MbP5UjiEz8tSDhxV5WzwAAijYQ34CP";
      const { data } = await axios.get(url);
      console.log(data);
    }
    getGif();
  }, []);
  return (
    <>
      <h1>Random</h1>
    </>
  );
}

export default Random;
