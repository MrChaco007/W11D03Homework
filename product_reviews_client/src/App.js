import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import Display from "./components/Display";
import "./App.css";

function App() {
  const url = "http://localhost:3000";
  const [products, setProducts] = React.useState([]);
  
  const emptyProduct = {
    title: "",
  };
  const [selectedProduct, setSelectedProduct] = React.useState(emptyProduct);

  const getProducts = () => {
    fetch(url + "/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  };
  React.useEffect(() => getProducts(), []);
  return (
    <div className="App">
      <h1>PRODUCT REVIEWS</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <Display {...rp} products={products} />}
        />
      </Switch>
    </div>
  );
}

export default App;
