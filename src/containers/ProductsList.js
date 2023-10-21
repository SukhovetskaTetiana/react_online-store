import "../css/ProductsList.css";
import Product from "../components/Product";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/productsSlice";
import { increment } from "../store/cartSlice";

/**
 * get data from store
 * list data
 */

function ProductsList() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (!t.classList.contains("add-to-cart")) return true;
    dispatch(increment(t.getAttribute("data-key")));
  };

  return (
    <div className="productsList-container" onClick={clickHandler}>
      {products.map((item) => (
        <Product
          data={item.shop_name}
          title={item.title}
          image={item.image}
          cost={item.cost}
          id={item.id}
          key={item + item.id}
        ></Product>
      ))}
    </div>
  );
}
export default ProductsList;
