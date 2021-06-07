import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const { id, title, info } = question;

  const [show, setShow] = useState(false);

  return (
    <div className="question">
      <header>
        {" "}
        <h4 className="title">{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show ? <p>{info}</p> : ""}
    </div>
  );
};

export default Question;
