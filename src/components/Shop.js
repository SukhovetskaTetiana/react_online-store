import "../css/Shop.css";
import ProductsList from "../containers/ProductsList";
import SidebarList from "../containers/SidebarList";

function Shop() {
  return (
    <div className="shop-container">
      <SidebarList />
      <ProductsList />
    </div>
  );
}

export default Shop;
