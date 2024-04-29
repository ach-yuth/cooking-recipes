import React from "react";
import { recipes } from "../data/RecipesData";

export default function RecipeData() {
  return (
    <div className="recipe-container">
      {recipes.map((item, idx) => {
        return (
          <div key={idx} className="recipe-item">
            <h2>{item.name}</h2>
            <h3>
              Main Ingredient:{" "}
              <span className="ingredientName">{item.ingredients}</span>
            </h3>
            <h3>
              cooking Time:{" "}
              <span className="cookingTime">{item.cookingTime}</span>
            </h3>
            <h3>
              Description:{" "}
              <span className="description">
                {item.description.slice(0, 130)}...
              </span>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
