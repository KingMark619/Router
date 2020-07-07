import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match); // receive all props passed by the Link
  }, []);
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      ` https://bestofwuhan.cn/wp-json/listing/${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };
  return (
    <React.Fragment>
      <div>
        <h3>{item.title}</h3>
        <img src={item.logo} alt="" />
      </div>
    </React.Fragment>
  );
}

export default ItemDetails;
