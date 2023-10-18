"use client";

//1 Setup ItemList Component
//Import the useState hook from React, the Item component, and the items from the JSON file.
import { useState } from "react";
import Item from "./item";

export default function ItemList(props) {
  //Add a new prop { items }
  const { items } = props;

  //Initializing State Variables
  const [sortBy, setSortBy] = useState("name");

  //Sorting the items without mutating the original array
  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
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
        {items.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </>
  );
}