import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RecipeData from "./components/Recipe";

export default function App() {
  return (
    <div className="main-container">
      <h1> Cooking Recipes From All Around The World</h1>

      <RecipeData />
      <Footer />
    </div>
  );
}
