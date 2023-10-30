//Item

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div> 
            <div>
                <ul>
                    <li 
                        className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg w-1/2 mx-auto"
                        onClick={() => onSelect(data)}
                    >
                        <div className="font-bold text-black text-xl">
                            Name: {name} Quantity: {quantity} Category: {category}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};