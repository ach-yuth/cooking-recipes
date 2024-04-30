import React from "react";

export default function Title({ inputTitle, setInputTitle }) {
  return (
    <div>
      <label for="title">Title:</label>
      <input
        type="text"
        id="title"
        value={inputTitle}
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
      ></input>
    </div>
  );
}
