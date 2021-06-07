import React, { useState } from "react";
import data from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState(data);

  return (
    <section>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <span>
        Paragraphs:
        <input type="text" />
      </span>
      <button onClick="value">GENERATE</button>
    </section>
  );
}

export default App;
