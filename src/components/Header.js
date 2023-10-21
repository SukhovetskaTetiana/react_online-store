import "../css/Header.css";
import { NavLink } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../store/productsSlice";

function Header() {
  const dispatch = useDispatch();

  let clickHandler = () => {
    dispatch(updateProducts());
  };

  return (
    <>
      <div className="navigation_bar">
        <div className="navigation_bar-link" onClick={clickHandler}>
          <NavLink to="/react_online-store">Shop</NavLink>
        </div>
        <div className="navigation_bar-verticalLine"></div>
        <div className="navigation_bar-link">
          <NavLink to="/react_online-store/cart">Shopping Cart</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
