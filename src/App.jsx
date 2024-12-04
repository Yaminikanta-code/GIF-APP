import { useState } from "react";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

/**
 * The main application component.
 *
 * This component renders a page with a heading of "Random GIF Application" and
 * two child components: `Random` and `Tag`. The `Random` component renders a
 * random GIF and a button to fetch a new random GIF. The `Tag` component renders
 * a form to enter a tag and a button to fetch a new GIF with the given tag.
 */
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
