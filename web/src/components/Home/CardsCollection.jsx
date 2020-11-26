import React, { useContext } from "react";
import Card from "./Card";
import { ProductsContext } from "../../context/ProductsContext";
import { FiMousePointer as MouseIcon } from "react-icons/fi";

import "./CardsCollection.scss";

const CardsCollection = () => {
  const [products] = useContext(ProductsContext);
  return (
    <div className="cards-collection">
      {products.map((product) => {
        const { id, title, homeImage, excerpt, sizes, slug } = product;
        return (
          <Card
            key={id}
            id={id}
            title={title}
            imageUrl={homeImage}
            excerpt={excerpt}
            size={sizes}
            slug={slug}
          />
        );
      })}
      <MouseIcon className="mouse-icon" />
    </div>
  );
};

export default CardsCollection;
