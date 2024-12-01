import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

function Random() {
  useEffect(() => {
    async function getGif() {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
