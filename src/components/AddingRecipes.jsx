import React, { useState } from "react";
import Title from "./inputs/Title";
import CookingTime from "./inputs/CookingTime";
import Ingredients from "./inputs/Ingredients";
import Description from "./inputs/Description";
export default function AddingRecipes() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputCooking, setInputCooking] = useState("");
  const [inputIngredient, setInputIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="addingRecipe">
      <Title inputTitle={inputTitle} setInputTitle={setInputTitle} />
      <CookingTime
        inputCooking={inputCooking}
        setInputCooking={setInputCooking}
      />
      <Ingredients
        inputIngredient={inputIngredient}
        setInputIngredient={setInputIngredient}
      />
      <Description description={description} setDescription={setDescription} />
      <button
        onClick={() => {
          setRecipes((prev) => [
            {
              ...prev,
              inputTitle,
              inputCooking,
              inputIngredient,
              description,
            },
          ]);

          setInputTitle("");
          setInputCooking("");
          setInputIngredient("");
          setDescription("");
        }}
      >
        Add Recipe
      </button>
    </div>
  );
}
