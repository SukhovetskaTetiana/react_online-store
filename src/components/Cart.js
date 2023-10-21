import "../css/Cart.css";
import UserInputList from "../containers/UserInputList";
import CheckOrderList from "../containers/CheckOrderList";
import TotalPriceList from "../containers/TotalPriceList";

function Cart() {
  return (
    <div className="cart-container">
      <UserInputList />
      <CheckOrderList />
      <TotalPriceList />
    </div>
  );
}

export default Cart;
