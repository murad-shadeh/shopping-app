import "./App.css";
import ShoppingList from "./components/ShoppingList";
const items = [
  { id: 1, product: "Lemon", quantity: 3 },
  { id: 2, product: "Chickent Breast", quantity: 2 },
];
function App() {
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
