import React, {useState} from "react";

function Item({ name, category }) {
  const [cartState, cartUpdate]= useState (false)
  const cName = cartState ? "in-cart" : "";

  function handleClick(){
    cartUpdate(!cartState);
  }
  return (
    <li className={cName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartState ? "Remove from cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
