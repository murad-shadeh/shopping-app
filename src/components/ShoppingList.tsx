import React, { type JSX } from "react";
import Item from "../models/items";
// we take the props by follwing a pattern using an interface
interface ShoppingListProps {
  items: Item[];
}
export default function ShoppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>ShoppingList</h1>
      <ul>
        {items.map((listItem) => (
          <>
            <li key={listItem.id}>
              {listItem.product} - {listItem.quantity}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
