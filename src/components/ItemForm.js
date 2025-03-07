import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(onItemFormSubmit) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce" name='produce'>Produce</option>
          <option value="Dairy" name='dairy'>Dairy</option>
          <option value="Dessert" name='dessert'>Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
