import React from "react";
import "../css/Home.css";
import { useState, useEffect } from "react";
import Product from "./Product";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((items) => setItems(items.data));
  }, []);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        {items.slice(0, 2).map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
      <div className="home__row">
        {items.slice(2, 5).map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
      <div className="home__row">
        {items.slice(5, 9).map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
