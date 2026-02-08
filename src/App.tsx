import { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import type Item from "./models/item";
import { v4 as uuid } from "uuid";
// const items = [
//   { id: 1, product: "Lemon", quantity: 3 },
//   { id: 2, product: "Chickent Breast", quantity: 2 },
// ];

function App() {
  // the uuid is a string
  const [items, setItems] = useState<Item[]>([]);
  // we need to add new listItem when we click add, the function below will do its thingy.
  const addItem = (product: string) => {
    console.log("Made it to the app component with product: ", product);
    setItems([
      ...items,
      {
        id: uuid(),
        product,
        quantity: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
