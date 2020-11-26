import React from "react";
import SEO from "../components/seo";
import ProductsCollection from "../components/Products/ProductsCollection";
import WhatsappBtn from "../components/Layout/WhatsappBtn";

const ProductosPage = () => (
  <div>
    <SEO title="Productos" />
    <WhatsappBtn />
    <div className="products-collection-title">
      <h2>nuestros productos</h2>
    </div>
    <ProductsCollection />
  </div>
);

export default ProductosPage;
