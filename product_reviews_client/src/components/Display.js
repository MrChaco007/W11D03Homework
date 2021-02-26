import React from "react";
import Card from "./Card";

const Display = (props) => {
  const { products } = props;
  console.log("products", products);

  const loaded = () => {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        {products.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    );
  };
  const loading = <h1>Loading...</h1>;
  return products.length > 0 ? loaded() : loading;
};

export default Display;
