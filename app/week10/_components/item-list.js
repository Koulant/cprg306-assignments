"use client";

import { useState } from "react";

import Item from "./item"; // Import the Item component


//ItemList Component
export default function ItemList({items, onItemSelect}) {

  //Initializing State Variables
  const [sortBy, setSortBy] = useState("name");

  //Sorting the items without mutating the original array
  const sortItems = {
    name: (a, b) => (a.name?.localeCompare(b.name)) || 0,
    category: (a, b) => (a.category?.localeCompare(b.category)) || 0,
  };
  

  const sortedItems = [...items].sort(sortItems[sortBy] || (() => 0));


  const handleItemClick = (item) => {
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  //Render the Component
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
          {sortedItems.map((item) => (
            <Item
              key={item.name} // Use a unique key, e.g., item.name
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={handleItemClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
}