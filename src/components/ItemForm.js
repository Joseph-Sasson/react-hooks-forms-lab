import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [addItem, setAddItem] = useState({
    id:uuid(),
    name:'',
    category:'Produce'
  })

  function handleChange(e){
    setAddItem({...addItem,
    [e.target.name]:e.target.value})
  }

  function handleForm(e){
    e.preventDefault()
    onItemFormSubmit(addItem)
  }

  return (
    <form className="NewItem" onSubmit={handleForm}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
