import "../css/TotalPriceList.css";
import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../store/productsSlice";
import { selectCart } from "../store/cartSlice";

function TotalPriceList() {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);

  const productsObj = products.reduce((accum, item) => {
    accum[item["id"]] = item;
    return accum;
  }, {});

  const getTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(cart).forEach((item) => {
      const quantity = cart[item];
      const price = productsObj[item].cost;
      totalPrice += quantity * price;
    });
    return totalPrice;
  };

  return (
    <div className="totalPriceList-containet">
      <div className="totalPriceList-containet__title">
        <h3>Total price</h3>
      </div>
      <div className="totalPriceList-containet__calc">{getTotalPrice()}</div>
      <div className="totalPriceList-containet__currensy">₴</div>
    </div>
  );
}

export default TotalPriceList;
