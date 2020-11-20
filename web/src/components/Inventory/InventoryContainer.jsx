import React, { useState, useEffect } from "react";
import ProductsTable from "./ProductsTable";
import InventoryTable from "./InventoryTable";
import firebase from "gatsby-plugin-firebase";

import "./InventoryProduct.scss";

const InventoryContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = async () => {
    firebase
      .firestore()
      .collection("productos")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id, saleCount: 0, inventCount: 0 });
        });
        setProducts(docs);
      });
  };

  const updateInventory = async (products) => {
    products.map((product) => {
      firebase
        .firestore()
        .collection("productos")
        .doc(product.id)
        .update({ quantity: product.quantity });
    });
    const newProducts = products.map((product) => {
      return { ...product, saleCount: 0, inventCount: 0, subTotal: 0 };
    });
    setProducts(newProducts);
    console.log("BD Modificada");
  };

  return (
    <>
      <h2 className="inventory-title">Inventario</h2>
      <div className="inventory-container">
        <ProductsTable
          products={products}
          setProducts={setProducts}
          updateInventory={updateInventory}
        />
        <InventoryTable
          products={products}
          setProducts={setProducts}
          updateInventory={updateInventory}
        />
      </div>
    </>
  );
};

export default InventoryContainer;
