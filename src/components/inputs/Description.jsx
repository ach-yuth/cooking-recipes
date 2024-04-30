import React from "react";

export default function Description({ description, setDescription }) {
  return (
    <div>
      <label for="description">Description:</label>
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
