import React from "react";

const Display = (props) => {
  console.log(props);
  const { products } = props;
  console.log(products);
  const loaded = () => {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h3>{product.name}</h3>
            </article>
          );
        })}
      </div>
    );
  };
  const loading = <h1>Loading...</h1>;
  return products.length > 0 ? loaded() : loading;
};

export default Display;
