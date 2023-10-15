//Week 3 Assignment Code

export default function Item({name, quantity, category}) {
    return (
        <div> 
            <div>
                <ul>
                    <li className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg w-1/2 mx-auto">
                    <div className="font-bold text-black text-xl">
                        Name: {name} Quantity: {quantity} Category: {category}
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};