import React, { useState, useEffect } from "react";
import ProductsTable from "./ProductsTable";
import InventoryTable from "./InventoryTable";
import firebase from "gatsby-plugin-firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./InventoryProduct.scss";

const InventoryContainer = () => {
  const [products, setProducts] = useState([]);
  const notifySucces = () =>
    toast.success("BD Modificada con éxito!", {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  const notifyError = () =>
    toast.error("No se pudo modificar la BD!", {
      autoClose: 3000,
      position: toast.POSITION.BOTTOM_RIGHT,
    });

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
    try {
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
      notifySucces();
    } catch (err) {
      notifyError();
      console.log(err);
    }
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

        {/* <button onClick={notify}>toast</button> */}
        <ToastContainer />
      </div>
    </>
  );
};

export default InventoryContainer;
