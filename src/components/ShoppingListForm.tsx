import React, { type JSX } from "react";

export default function ShoppingListForm(): JSX.Element {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submited");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="product name" />
      <button type="submit">Add Item</button>
    </form>
  );
}
