import { useState } from "react";
import { MyButton } from "./MyButton";

export function App() {

  const [spent, setSpent] = useState(0);
  const [storeIsOpen, setStoreIsOpen] = useState(true);

  function handleClick() {
    setSpent(spent + 1);
  }

  function toggleStore() {
    setStoreIsOpen(!storeIsOpen);
  }

  const products = [
    { title: 'Guitar', id: 1 },
    { title: 'Apple', id: 2 },
    { title: 'Iphone', id: 3 }
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {storeIsOpen ? (
        <>
          {product.title} < MyButton spent={spent} onClick={handleClick} />
        </>
      ) : 'Unavailable'}
    </li>
  );

  return (
    <>
      <h1 className='text-blue-600'>STORE: REACT VERSION</h1>
      <button className='text-orange-600' onClick={toggleStore}>
        {storeIsOpen ? "CLOSE STORE" : "OPEN STORE"}
      </button>
      <ul>{listItems}</ul>
      <p>Spent: {spent}</p>
    </>
  );
}
