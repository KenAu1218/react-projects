import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <hr className="underline"></hr>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>;
      })}
    </main>
  );
};

export default Tours;
