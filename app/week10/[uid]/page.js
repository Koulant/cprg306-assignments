//Directives 
"use client";

//Imports
import { useState } from "react";
import { useEffect } from "react";

import NewItem from "../_components/new-item";
import ItemList from "../_components/item-list";
import { useUserAuth } from "../_utils/auth-context";

// import getItems and addItem functions from the shopping-list-service.js file.
import { getItems, addItem } from "../_services/shopping-list-service";


//Import new component
import MealIdeas from "../_components/meal-ideas"; 


//Page component
export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");


    useEffect(() => {
        loadItems();
    }, [user]);

    async function loadItems() {
        try {
          const itemsList = await getItems(user.uid);
          setItems(itemsList);
        } catch (error) {
          console.error('Error loading shopping list:', error);
        }
    }

    const handleAddItem = async (newItem) => {
        try {
          // Call the addItem function to add the item to Firestore and get the document ID
          const itemId = await addItem(user.uid, newItem);
    
          // Update the newItem with the obtained ID
          const newItemWithId = { ...newItem, id: itemId };
    
          // Update the local state with the new item
          setItems([...items, newItemWithId]);
        } catch (error) {
          console.error("Error adding item:", error);
          // Handle the error as needed
        }
      };

    
    // Additional State Variable

    // New Event Handler
    const handleItemSelect = (selectedItem) => {
        const cleanedName = selectedItem.name.split(',')[0].trim().replace(/[^\w\s]/gi, "");
        setSelectedItemName(cleanedName);
    };

    // Render the component
    // Layout Changes
    // The layout of the page has been modified to accommodate the new features. The NewItem and ItemList components are grouped together on one side, and the MealIdeas component is placed on the other side. This is achieved by wrapping them in a div with a flex property.
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