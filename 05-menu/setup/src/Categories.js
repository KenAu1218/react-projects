import items from "./data";
import React, { useState } from "react";

const Categories = () => {
  const [item, setItem] = useState(items);

  return (
    <>
      <button>All</button>
      <button>Breakfast</button>
      <button>Lunch</button>
      <button>Shake</button>

      <section>
        <div className="menu-item">
          {item.map((i) => {
            const { id, title, category, price, img, desc } = i;

            return (
              <>
                <div className="item-info">
                  <header>
                    <img src={img} alt={title} className="photo" />
                    <h2>{title}</h2>
                    <span>${price}</span>
                    <p className="item-text">{desc}</p>
                  </header>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;
