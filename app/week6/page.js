//Directives 
"use client";

//Imports
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";

import itemsData from "./items.json";

//import Item from "./item";

//Page component
export default function Page() {

    //Initialize a state variable (e.g., items) with the data from items.json.
    const [items, setItems] = useState(
        itemsData.map((item) => ({
            ...item,
            item: new NewItem(item),
        }))
    );

    const [newItem, setNewItem] = useState(false);

    //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
    const handleAddItem = (newItem) => {
            setItems([...items, newItem]);
    };

    //Render the component
    return(
        <main>
            <h1 className="flex text-white items-center justify-center font-bold text-4xl bg-gray-800"
            >Anton's Shopping List</h1>
            {/* Pass the handleAddItem event handler to the NewItem component */}
            <NewItem onAddItem={handleAddItem} />

            {/* Pass the items state to the ItemList component */}
            <ItemList items={items} />
        </main>
    );
}