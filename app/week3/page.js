//Create a functional component named Page that returns a main element wrapped around an h1 "Shopping List" header and the ItemList component.
//Use Tailwind classes for styling.
import React from "react";
import ItemList from "./item-list";

export default function Page() {
    return(
        <main>
            <h1>Shopping List</h1>
            <ItemList/>
        </main>
    )
}