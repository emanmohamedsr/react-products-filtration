import { useState } from "react";
import Nav from "./components/Nav";
import AllProducts from "./AllProducts";
import ShowProducts from "./components/ShowProducts"
function App() {
  const [category, setCategory] = useState('all');
  const [cartCounter, setCartCounter] = useState(0);
  return (
    <>
      <Nav setCategory={setCategory} cartCounter={cartCounter} />
      <ShowProducts cartCounter={cartCounter} setCartCounter={setCartCounter} products={category === "all" ? AllProducts : AllProducts.filter(p => p.category === category)} />
    </>
  );
}

export default App;
