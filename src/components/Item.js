import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addItem,setAddItem ] =useState()

  function handleClick(){
    setAddItem(!addItem);
    }
    return (
    <li className={addItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItem ? "remove" : "add"} onClick={handleClick}>
      {addItem ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
