import React, { type JSX, useRef } from "react";
interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}
export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="product name" ref={inputRef} required />
      <button type="submit">Add Item</button>
    </form>
  );
}
