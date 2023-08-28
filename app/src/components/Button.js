function Button(props) {
  let shop_name = props.shop_name;
  return (
    <div>
      <button className={shop_name.replace(/\s/g, "")} data_key={props.id}>
        {props.shop_name}
      </button>
    </div>
  );
}

export default Button;
