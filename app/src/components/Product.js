import "../css/Product.css";

function Product(props) {
  return (
    <div className="productBlock-container">
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>price: {props.cost} ₴</p>
      <button className="add-to-cart" data-key={props.id}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
