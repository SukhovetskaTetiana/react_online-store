import "../css/CheckOrderList.css";
import React from "react";
import OrderCart from "../components/OrderCart";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/productsSlice";
import { increment, decrement, removal, selectCart } from "../store/cartSlice";

function CheckOrderList() {
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  //переиндексирую массив продуктов
  const productsObj = products.reduce((accum, item) => {
    accum[item["id"]] = item;
    return accum;
  }, {});

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;

    if (t.classList.contains("fa-plus")) {
      dispatch(increment(t.getAttribute("data-key")));
    }
    if (t.classList.contains("fa-minus")) {
      dispatch(decrement(t.getAttribute("data-key")));
    }
    if (t.classList.contains("fa-trash-can")) {
      dispatch(removal(t.getAttribute("data-key")));
    }
  };

  return (
    <div className="checkOrderList-container" onClick={clickHandler}>
      {Object.keys(cart).map((item) => (
        <OrderCart
          title={productsObj[item]["title"]}
          id={productsObj[item]["id"]}
          cost={productsObj[item]["cost"]}
          image={productsObj[item]["image"]}
          key={item.toString()}
          item={cart[item]}
        />
      ))}
    </div>
  );
}
export default CheckOrderList;
