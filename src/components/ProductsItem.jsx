import { useState, useEffect } from "react";

function ProductsItem(props) {
  const [item, setList] = useState({});
  const url = "https://fakestoreapi.com";

  useEffect(() => {
    if (props.id) {
      fetch(`${url}/products/${props.id}`)
        .then((res) => res.json())
        .then((res) => {
          setList(res);
        });
    }
  }, [props.id]);

  return props.id &&  (
    <div className="products-item">
      <div> {item.id}</div>
      <div> {item.name}</div>
      <div> {item.price}</div>
      <div> {item.category}</div>
    </div>
  );
}

export default ProductsItem;
