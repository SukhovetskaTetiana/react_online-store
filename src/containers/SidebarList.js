import "../css/SidebarList.css";
import Button from "../components/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectButton } from "../store/sidebarSlice";
import { filterProducts } from "../store/productsSlice";

function SidebarList() {
  const button = useSelector(selectButton);
  const dispatch = useDispatch();

  //** Відображаються/фільтруються продукти згідно
  //** назві фаст - фуду, яка відображається на кнопці * /
  const clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;

    if (t.classList) {
      dispatch(filterProducts(t.getAttribute("data_key")));
    }
  };

  return (
    <div className="sidebarList-container">
      <h3>Shops:</h3>
      <form onClick={clickHandler}>
        {button.map((item) => (
          <li key={item.id}>
            <Button shop_name={item.shop_name} id={item.id}></Button>
          </li>
        ))}
      </form>
    </div>
  );
}
export default SidebarList;
