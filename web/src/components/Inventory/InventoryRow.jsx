import React, { useState, useRef } from "react";

import "./InventoryProduct.scss";

const InventoryRow = ({ product, products, setProducts }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(count);

  const increaseCount = (id) => {
    setCount((prevCount) => prevCount + 1);
    ref.current = count + 1;
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1, inventCount: ref.current };
      }
      return { ...product };
    });
    setProducts(newProducts);
  };

  const decreaseCount = (id) => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
      ref.current = count - 1;
      const newProducts = products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1, inventCount: ref.current };
        }
        return { ...product };
      });
      setProducts(newProducts);
    }
  };
  return (
    <tr className="inventory-row">
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td id={product.id} className="inventory-add-quantity">
        <span>
          <button onClick={() => decreaseCount(product.id)}>-</button>
        </span>
        <div>{product.inventCount}</div>
        <span>
          <button onClick={() => increaseCount(product.id)}>+</button>
        </span>
      </td>
    </tr>
  );
};

export default InventoryRow;
