import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ProductsItem(props) {
  const [item, setList] = useState({});
  const url = "https://fakestoreapi.com";

  let params = useParams();
  useEffect(() => {
    if (params.id) {
      fetch(`${url}/products/${params.id}`)
        .then((res) => res.json())
        .then((res) => {
          setList(res);
        })
        .catch((err) => {
          for (let i = 0; i < props.newProductsList.length; i++) {
            console.log("ERROR!");
            if (props.newProductsList[i].id === params.id) {
              setList(props.newProductsList[i]);
            }
          }
        });
    }
  }, [params.id]);

  return (
    params.id && (
      <div className="products-item">
        <div> {item.id}</div>
        <div> {item.name}</div>
        <div> {item.price}</div>
        <div> {item.category}</div>
      </div>
    )
  );
}

export default ProductsItem;
