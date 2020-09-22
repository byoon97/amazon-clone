import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from "../StateProvider"

export default function CheckoutProduct(props) {
  const [dispatch] = useStateValue();

  console.log(props.item.id)
  
  const removeFromBasket = () => {
      dispatch({
          type:"REMOVE_FROM_BASKET",
          id: props.item.id
      })
  };
  
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.item.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__name">{props.item.name}</p>
        <p className="checkoutProduct__desc">{props.item.description}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.item.price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(props.item.rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
