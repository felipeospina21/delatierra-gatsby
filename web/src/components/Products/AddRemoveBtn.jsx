import React from "react";
import { FaPlus as AddBtn } from "react-icons/fa";
import { FaMinus as RemoveBtn } from "react-icons/fa";

import "./AddRemoveBtn.scss";

function AddRemoveBtn({ quantity, addItem, removeItem, idSize }) {
  return (
    <span className="add-remove-product">
      <button className="remove-product">
        <RemoveBtn className="minus-icon" onClick={() => removeItem(idSize)} />
      </button>

      <span className="quantity-selected">{quantity}</span>

      <button className="add-product">
        <AddBtn className="plus-icon" onClick={() => addItem(idSize)} />
      </button>
    </span>
  );
}

export default AddRemoveBtn;
