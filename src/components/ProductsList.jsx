import { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";

function ProductsList() {
  const [list, setList] = useState([]);
  const [itemId, setItemId] = useState(null);
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
              <div
                key={index}
                className="products-list__item"
                onClick={() => setItemId(item.id)}
                id={item.id}
              >
                <div> {item.name}</div>
                <div> {item.title}</div>
                <div> {item.price}</div>
              </div>
            );
          })}
      </div>
      <ProductsItem id={itemId}></ProductsItem>
    </div>
  );
}

export default ProductsList;
