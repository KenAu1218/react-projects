import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  const { id, image, title, name, quote } = people[index];
  // let value = 0;

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  useEffect(() => {
    console.log("bb");
  }, [index, value]);

  // useEffect will be  trigger depend either one element in the second parameters array

  return (
    <section className="section">
      <div className="title">
        <h2>Reviews</h2>
      </div>

      <article className="section-center">
        <img src={image} alt={title} className="person-img" />
        <h4>{name}</h4>{" "}
        <button
          className="prev"
          onClick={() => {
            index - 1 < 0 ? setIndex(people.length - 1) : setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <h3 className="title">{title}</h3>{" "}
        <button
          className="next"
          onClick={() => {
            index + 1 < people.length ? setIndex(index + 1) : setIndex(0);
          }}
        >
          <FiChevronRight />
        </button>
        <p className="text">{quote}</p>
        <span>
          <FaQuoteRight className="icon" />
        </span>
        <button onClick={() => setValue(value + 1)}> click </button>
      </article>
    </section>
  );
}

export default App;
