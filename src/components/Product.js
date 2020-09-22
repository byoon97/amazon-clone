import React from "react";
import "../css/Product.css";
import { useStateValue } from "../StateProvider"

function Product(props) {
  let item = props.item.attributes;

  const [{basket}, dispatch] = useStateValue()
  
  const addToBasket = () => {
      dispatch({
          type: 'ADD_TO_BASKET',
          payload: {
              id: item.id,
              name: item.name,
              image: item.image,
              price: item.price,
              rating: item.rating,
              description: item.description
          }
      })
  };

  console.log(basket);

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{item.name}</p>
        <p className="product__desc">{item.description}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className="product__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </div>
      </div>

      <img src={item.image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
