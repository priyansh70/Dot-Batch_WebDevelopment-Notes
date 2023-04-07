import { useSelector } from "react-redux";

const Cart = () => {
  const {cart} = useSelector((state) => state)
  return <div>Cart</div>;
};

export default Cart;
