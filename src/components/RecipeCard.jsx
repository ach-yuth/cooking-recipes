import React from "react";

export default function RecipeCard({ item }) {
  return (
    <div className="recipe-item">
      <h2>{item.name}</h2>
      <h3>
        Main Ingredient:{" "}
        <span className="ingredientName">{item.ingredients}</span>
      </h3>
      <h3>
        cooking Time: <span className="cookingTime">{item.cookingTime}</span>
      </h3>
      <h3>
        Description:{" "}
        <span className="description">{item.description.slice(0, 130)}...</span>
      </h3>
    </div>
  );
}
