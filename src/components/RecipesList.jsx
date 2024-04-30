import React from "react";
import { recipes } from "../data/RecipesData";
import RecipeCard from "./RecipeCard";

export default function RecipeData() {
  return (
    <div className="recipe-container">
      {recipes.map((item, idx) => {
        return (
          <div key={idx}>
            <RecipeCard item={item} />
          </div>
        );
      })}
    </div>
  );
}
