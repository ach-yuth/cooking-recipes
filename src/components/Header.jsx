import React from "react";
import { useState } from "react";
import AddingRecipes from "./AddingRecipes";
export default function Header() {
  const [Recipedisplay, setRecipeDisplay] = useState(false);
  return (
    <div className="btn-container">
      <button
        className="recepieAddBtn"
        onClick={() => {
          setRecipeDisplay((prev) => !prev);
        }}
      >
        Add Your favourite recipe
      </button>
      {Recipedisplay && <AddingRecipes />}
    </div>
  );
}
