//Directives 
"use client";

//Imports
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";

import itemsData from "./items.json";

//Import new component
import MealIdeas from "./meal-ideas";

//Page component
export default function Page() {

    //Initialize a state variable (e.g., items) with the data from items.json.
    const [items, setItems] = useState(
        itemsData.map((item) => ({
            ...item,
            item: new NewItem(item),
        }))
    );

    //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]); //setItems to updated array of items
    };
    
    //Additional State Variable
    const [selectedItemName, setSelectedItemName] = useState("");

    //New Event Handler
    const handleItemSelect = (selectedItem) => {
        const cleanedName = selectedItem.name.split(',')[0].trim().replace(/[^\w\s]/gi, "");
        setSelectedItemName(cleanedName);
      };

    //Render the component
    //Layout Changes
    //The layout of the page has been modified to accommodate the new features. The NewItem and ItemList components are grouped together on one side, and the MealIdeas component is placed on the other side. This is achieved by wrapping them in a div with a flex property.
    return(
        <main className="flex">
            <div className="w-1/2 p-4">
                <h1 className="flex text-white items-center justify-center font-bold text-4xl bg-gray-800">Shopping List</h1>
                {/* Pass the handleAddItem event handler to the NewItem component */}
                <NewItem onAddItem={handleAddItem} />

                {/* Pass the items state to the ItemList component */}
                <ItemList items={items} onItemSelect={handleItemSelect}/>


            </div>
            <div className="w-1/2 p-4">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}