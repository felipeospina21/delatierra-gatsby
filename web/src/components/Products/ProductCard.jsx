import React, { useState } from "react";
import SelectProduct from "./SelectProduct";
import Image from "../image";
import { Link } from "gatsby";

import "./ProductCard.scss";

const ProductCard = ({ id, slug, title, image, alias, sizes, cost }) => {
  const [showBuyMenu, setShowBuyMenu] = useState(false);

  function toggleMenu() {
    setShowBuyMenu(!showBuyMenu);
  }
  return (
    <div className="product-card">
      <h3 className="product-card-title">{title}</h3>
      <div className="product-img-container">
        {showBuyMenu ? (
          <SelectProduct
            key={id}
            id={id}
            alias={alias}
            size={sizes}
            cost={cost}
            toggleMenu={toggleMenu}
          />
        ) : null}

        <Image className="product-img" src={image} alt="natural products" />
        <div className="buy-btn-container">
          <Link to={`/${slug}`}>
            <button className="buy-btn">Ver más</button>
          </Link>

          <button onClick={() => toggleMenu()} className="buy-btn">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
