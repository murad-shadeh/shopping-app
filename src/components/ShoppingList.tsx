import { type JSX } from "react";
import type Item from "../models/item";
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
              {`Product is: ${listItem.product} - and Quantity is: ${listItem.quantity}`}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
