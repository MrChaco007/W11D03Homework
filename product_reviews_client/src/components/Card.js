import React from "react";

const Card = (props) => {
  const [reviews, setReviews] = React.useState([])
  const [showReview, setShowReview] = React.useState(false)
  const { product } = props;
  const url = "http://localhost:3000";
  const handleClick = (id) => {
    fetch(url + "/products/" + id + "/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        console.log("data", data);
      });
    console.log("id", id);
    console.log("reviews", reviews);
    if (showReview === false) {
        setShowReview(true)}
        else {
            setShowReview(false)
        }
  };
  return (
    <article key={product.id}>
      <h3>{product.name}</h3>
      <img
        onClick={() => handleClick(product.id)}
        src={product.img}
      />
      {showReview ? reviews.map((review) => {
          return (
            <div>
              <h4>{review.title}</h4>
              <p>{review.content}</p>
            </div>
          );
      }) : null}
    </article>
  );
};

export default Card;
