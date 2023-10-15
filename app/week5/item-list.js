"use client";

//1 Setup ItemList Component
//Import the useState hook from React, the Item component, and the items from the JSON file.
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  //2 Initialize State Variable
  //Use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user.
  //Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.
  const [sortBy, setSortBy] = useState("name");

  //Convert data from JSON file to array
  let items = itemsData;

  //3 Sort the Items
  //Use JavaScript's sort function to sort the items array based on the sortBy state variable.
  //If sortBy is "name", sort the items by their name property.
  //If sortBy is "category", sort the items by their category property.
  if (sortBy === "name") {
    items = items.sort((a, b) => a.name.localeCompare(b.name));
  };
    
  if (sortBy === "category") {
    items = items.sort((a, b) => a.category.localeCompare(b.category));
  };

  //4 Create Sort Buttons
  //Create two buttons that allow the user to change the value of sortBy to "name" or "category". These buttons should change the sorting of the items when clicked.
  //Use the setSortBy function in the onClick event handlers of these buttons to change the value of sortBy.
  //Use conditional rendering to change the background color of the buttons based on the current value of sortBy. This gives the user a visual indication of what the current sorting preference is.
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