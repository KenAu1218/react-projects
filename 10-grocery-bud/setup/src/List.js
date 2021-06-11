import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return items.map((item) => {
    const { id, title } = item;
    return (
      <div>
        <p>{title}</p>
        <button>
          <FaEdit onClick={() => editItem(id)}></FaEdit>
        </button>
        <button>
          <FaTrash onClick={() => removeItem(id)}></FaTrash>
        </button>
      </div>
    );
  });
};

export default List;
