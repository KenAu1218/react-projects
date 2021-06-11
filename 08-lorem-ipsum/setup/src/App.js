import React, { useState } from "react";
import data from "./data";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(0);
  const generate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }

    if (amount > 10) {
      amount = 10;
    }

    setParagraphs(data.slice(0, amount));
  };

  return (
    <section class="section-center">
      <form onSubmit={generate}>
        <h2>TIRED OF BORING LOREM IPSUM?</h2>
        <label>
          Paragraphs:
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </label>

        <button class="btn">GENERATE</button>
      </form>
      {paragraphs.map((p) => {
        return (
          <article>
            <div>
              <p>{p}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default App;
