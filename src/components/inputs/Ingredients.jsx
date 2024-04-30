import React from "react";

export default function Ingredients({ inputIngredient, setInputIngredient }) {
  return (
    <div>
      <label for="ingredients">Ingredients:</label>
      <input
        type="text"
        id="ingredients"
        value={inputIngredient}
        onChange={(e) => {
          setInputIngredient(e.target.value);
        }}
      ></input>
    </div>
  );
}
