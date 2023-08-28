import "../css/OrderCart.css";

function OrderCart(props) {
  return (
    <div className="orderCart-container">
      <div className="orderCart-container__picture">
        <img src={props.image} alt="Картинка товара" />
      </div>
      <div className="orderCart-container__body">
        <div className="orderCart-container__body-main">
          <div className="body-main__title">{props.title}</div>
          <div className="body-main__action">
            <button
              className="fa-sharp fa-regular fa-trash-can"
              data-key={props.id}
            ></button>
          </div>
        </div>
        <div className="orderCart-container__body-calc">
          <div className="body-calc__counter">
            <button className="fa-solid fa-minus" data-key={props.id}></button>
            <h3>{props.item}</h3>
            <button className="fa-regular fa-plus" data-key={props.id}></button>
          </div>
          <div className="body-calc__coast">
            <div className="body-calc__coast-price">
              {props.cost * props.item}
            </div>
            <div className="body-calc__coast-currensy">₴</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCart;
