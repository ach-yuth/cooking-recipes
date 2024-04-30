import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecipeData from "./components/RecipesList";

export default function App() {
  return (
    <div className="main-container">
      <h1> Cooking Recipes From All Around The World</h1>
      <Header />

      <RecipeData />
    </div>
  );
}
