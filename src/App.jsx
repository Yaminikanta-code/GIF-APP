import { useState } from "react";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <>
      <h1>Random GIF Application</h1>
      <div className="main-container">
        <Random />
        <Tag />
      </div>
    </>
  );
}

export default App;
