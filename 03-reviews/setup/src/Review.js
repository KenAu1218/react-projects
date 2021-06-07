import React, { useState, useEffect } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  // useEffect(() => {
  //   setReviews(people);
  // }, []);

  const next = () => {
    if (index == people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const pre = () => {
    if (index == 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const random = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container ">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h3 className="author">{name}</h3>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div>
        <button
          className="prev-btn FaChevronLeft"
          onClick={() => {
            pre();
          }}
        >
          <FaChevronLeft />
        </button>

        <button
          className="next-btn FaChevronRight"
          onClick={() => {
            next();
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          random();
        }}
      >
        {" "}
        suprise me
      </button>
    </article>
  );
};

export default Review;
