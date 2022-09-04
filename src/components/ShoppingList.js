import React, {useState} from "react";
import Item from "./Item";
let filArr =[]
function ShoppingList({ items }) {
  const [selectedCategory, changeCat] = useState("All")
  
  function handleChange(event){
    changeCat(event.target.value);
  }
  if (selectedCategory == "All"){
    filArr = [...items];
  }else{
    filArr = items.filter(items => items.category === selectedCategory)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
