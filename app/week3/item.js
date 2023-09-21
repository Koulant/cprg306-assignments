//Building an item component which accepts name, quantity, and category as props and displays them in a list item element.
//Style using Tailwind CSS

export default function Item({name, quantity, category}) {
    return (
        <div> 
            <div>
                <ul>
                    <li className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg">
                    <div className="font-bold text-black text-xl">Name: {name}</div>
                    <div className="text-black">Quantity: {quantity}</div>
                    <div className="text-black">Category: {category}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
};