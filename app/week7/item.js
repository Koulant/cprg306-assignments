//Item Component
export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div>
        <ul>
          <li
            className="bg-purple-200 p-2 m-2 rounded-lg shadow-lg w-1/2 mx-auto"
            onClick={() => onSelect({ name, quantity, category })}
          >
            <div className="font-bold text-black text-xl">Name: {name}</div>
            <div className="font-bold text-black text-xl">Quantity: {quantity}</div>
            <div className="font-bold text-black text-xl">Category: {category}</div>
          </li>
        </ul>
      </div>
    );
  }
  