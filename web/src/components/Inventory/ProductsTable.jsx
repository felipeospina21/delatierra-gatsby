import React, {useState} from "react";
import ProductRow from "./ProductRow";
import DeliveryCost from "./DeliveryCost";
import Total from "./Total";

import "./InventoryProduct.scss";

const ProductsTable = ({ products, setProducts, updateInventory }) => {
  const [deliveryCost, setDeliveryCost] = useState(0);
  
  const delivery = [
    { name: "- Seleccione Ciudad -", cost: 0 },
    { name: "Medellin", cost: 7000 },
    { name: "Bello", cost: 9000 },
    { name: "Sabaneta", cost: 8000 },
    { name: "Caldas", cost: 10000 },
  ];

  return (
    <div className="table-inventory-container">
      <table className="table-inventory-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Invent</th>
            <th>Cantidad</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <ProductRow
                key={product.name}
                product={product}
                products={products}
                setProducts={setProducts}
              />
            );
          })}
        </tbody>
      </table>

      <div className="inventory-checkout-container">
        <DeliveryCost delivery={delivery} deliveryCost={deliveryCost} setDeliveryCost={setDeliveryCost}/>
        <Total products={products} deliveryCost={deliveryCost}/>
      </div>

      <button
        className="sale-btn"
        onClick={() => {
          updateInventory(products);
        }}
      >
        Vender
      </button>
    </div>
  );
};

export default ProductsTable;
