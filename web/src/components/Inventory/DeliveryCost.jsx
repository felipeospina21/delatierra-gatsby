import React, { useState } from "react";
import { thousandSeparator } from "../../lib/helpers";

import "./InventoryProduct.scss";

const DeliveryCost = ({ delivery, deliveryCost, setDeliveryCost }) => {

  const selectDeliveryCost = (e) => {
    const chosenCity = e.target.value;

    delivery.map((city) => {
      if (city.name === chosenCity) {
        setDeliveryCost(city.cost);
      }
    });
  };

  return (
  
      <div className="inventory-delivery-cost-container">
        <select
          className="inventory-delivery-dropdown"
          name="delivery-dropdown"
          onChange={selectDeliveryCost}
        >
          {delivery.map((city) => {
            return (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            );
          })}
        </select>
        <div className="inventory-delivery-cost">
          <div>Domicilio:</div>
          <div className="inventory-total-value">{thousandSeparator(deliveryCost)}</div>
        </div>
      </div>
   
  );
};

export default DeliveryCost;
