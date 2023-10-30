//ItemList Component

"use client";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {

  //Initializing State Variables
  const [sortBy, setSortBy] = useState("name");

  //Sorting the items without mutating the original array
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  };

  const handleItemClick = (item) => {
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  //Render the Component
  //Creating sort buttons
  return (
    <> 
      <div className="font-bold text-xl text-center">
        <label>Filter by:</label>
      </div>
      <div className= "font-bold text-black text-xl text-center justify-center">
        <button className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg" onClick={() => setSortBy("name")}>Name</button>
        <button className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg" onClick={() => setSortBy("category")}>Category</button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li 
              key={item.id}
              className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg w-1/2 mx-auto"
              onClick={() => handleItemClick(item)}
            >
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}