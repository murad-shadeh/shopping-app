import { useState } from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/items";
// const items = [
//   { id: 1, product: "Lemon", quantity: 3 },
//   { id: 2, product: "Chickent Breast", quantity: 2 },
// ];

function App() {
  const [items, setItems] = useState<Item[]>([]);
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
