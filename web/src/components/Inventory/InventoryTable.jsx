import React from "react";
import InventoryRow from "./InventoryRow";
import "./InventoryProduct.scss";

const InventoryTable = ({ products, setProducts, updateInventory }) => {
  return (
    <div className="table-inventory-container">
      <table className="table-inventory-table">
      <caption className='inventory-table-caption'>Tabla de Inventario</caption>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Inventario</th>
            <th>Agregar Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <InventoryRow
                key={product.id}
                product={product}
                products={products}
                setProducts={setProducts}
              />
            );
          })}
        </tbody>
      </table>
      <button className="update-inventory-btn" onClick={() => updateInventory(products)}>
        Actualizar
      </button>
    </div>
  );
};

export default InventoryTable;
