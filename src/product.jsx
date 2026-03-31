function Product({ img, name, price, quantity }) {
  return (
    <div>
      <img className="logo" src={img} alt={name} />
      <p>Sản phẩm: {name}</p>
      <p>Giá: {price} đ</p>
      <p>Số lượng: {quantity}</p>
    </div>
  );
}

export default Product;