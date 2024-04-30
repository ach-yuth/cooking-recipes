import React from "react";

export default function CookingTime({ inputCooking, setInputCooking }) {
  return (
    <div>
      <label for="cookingTime">Cooking Time:</label>
      <input
        type="text"
        id="cookingTime"
        value={inputCooking}
        onChange={(e) => {
          setInputCooking(e.target.value);
        }}
      ></input>
    </div>
  );
}
