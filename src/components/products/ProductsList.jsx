import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function ProductsList() {
  const [list, setList] = useState([]);
  // const [itemId, setItemId] = useState(null);
  const url = "https://fakestoreapi.com";

  useEffect(() => {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
      });
  }, []);

  return (
    <div>
      <div className="products-list">
        {list.length > 0 &&
          list.map((item, index) => {
            return (
              <Link
                key={index}
                className="products-list__item"
                to={`/products/${item.id}`}
              >
                <div> {item.name}</div>
                <div> {item.title}</div>
                <div> {item.price}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default ProductsList;
