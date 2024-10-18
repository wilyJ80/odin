import { useState } from "react";
import { MyButton } from "./MyButton";

export function App() {

  const [spent, setSpent] = useState(0);

  function handleClick() {
    setSpent(spent + 1);
  }

  const products = [
    { title: 'Guitar', id: 1 },
    { title: 'Apple', id: 2 },
    { title: 'Iphone', id: 3 }
  ];

  const storeIsOpen = true;

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
      <h1 className='text-blue-600'>Ay</h1>
      <ul>{listItems}</ul>
      <p>Spent: {spent}</p>
    </>
  );
}
