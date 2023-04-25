import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const changeClass = inCart ? "in-cart" : ""
  const changeCart = inCart ? "Remove From Cart" : "Add To Cart";

  function handleButtonClick(){
    setInCart(!inCart)
  }


  return (
    <li className={changeClass} onClick={handleButtonClick}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>{changeCart}</button>
    </li>
  );
}
export default Item;