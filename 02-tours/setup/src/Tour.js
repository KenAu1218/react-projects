import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [readMore, setreadMore] = useState(false);
  // const [del, setDel] = useState(false);

  return (
    <>
      <div className="single-tour">
        <img src={image}></img>
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setreadMore(!readMore)}>
              {readMore ? "show less" : "read more"}{" "}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() => {
              deleteTour(id);
            }}
          >
            {" "}
            Not interested
          </button>
        </footer>
      </div>
    </>
  );
};

export default Tour;
