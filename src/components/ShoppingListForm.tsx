import React, { type JSX, useRef } from "react";
interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}
export default function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    // we used parseInt because depite it's a number yet it's the string of the number so we had to pasrse it to a number
    const quantity = parseInt(quantityRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = "";
    quantityRef.current!.value = "1";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="product name"
        ref={productInputRef}
        required
      />
      <input
        type="number"
        min={0}
        max={50}
        placeholder="quantity"
        ref={quantityRef}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
