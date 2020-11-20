import React from "react";
import { thousandSeparator } from "../../lib/helpers";
import "./InventoryProduct.scss";

const Total = ({ products, deliveryCost }) => {
  let total = 0;
  products.forEach((product) => {
    total = total + product.subTotal;
    return total;
  });
  return (
    <div className="inventory-total">
      <div>Total:</div>
      <div className="inventory-total-value">{thousandSeparator(total + deliveryCost)}</div>
    </div>
  );
};

export default Total;
