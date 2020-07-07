import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://bestofwuhan.cn/wp-json/listing/category/341"
    );
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <React.Fragment>
      <div>
        {items.map((item, index) => (
          <Link to={`/shop/${item.listing_id}`}>
            <div key={index}>
              <img src={item.logo350} alt="" />
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Shop;
