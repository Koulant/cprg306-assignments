"use client"; 

import { useState } from "react";

//Initialize State Variables

export default function NewItem({onAddItem}) {
    const [name, setName] = useState(""); //Name field
    const [quantity, setQuantity] = useState(1); //Quantity field
    const [category, setCategory] = useState("Produce"); //Category field

    //Create a form submission handler

    const handleSubmit = (event) => {
        //Prevent default form submission
        event.preventDefault(); 

        //Create an item object with the current values of name, quantity, and category
        const item = {
            name,
            quantity,
            category,
        };

        //Replace the alert functionality by calling the onAddItem prop with the item object when the form is submitted. 
        //The item object should have the following properties: name, quantity, and category.
        onAddItem(item);

        //Reset the state variables to their initial values
        setName("");
        setQuantity(1);
        setCategory("Produce");
        
    };

    //Create event handlers for each of the form fields
    const handleNameChange = (event) => {
    setName(event.target.value);
    };   

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    //Render the Component

    //In the return statement of your function, create a form that includes:
    return (
        <main>
            <h1 className="flex text-white items-center justify-center font-bold text-xl">Add New Item</h1>
            <div className="flex bg-black items-center justify-center">
                <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    required
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Item name" 
                    className="w-full m-2 text-black">
                    </input>
                </div>
                <div>
                    <input
                    required
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={handleQuantityChange}
                    placeholder="1"
                    className="w-full m-2 text-black">
                    </input>
                </div>
                <div>
                    <select
                    required
                    className="w-full m-2 text-black"
                    value={category}
                    onChange={handleCategoryChange}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full m-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                    Add Item 
                </button>
                </form>
            </div>
        </main>
    );
};



