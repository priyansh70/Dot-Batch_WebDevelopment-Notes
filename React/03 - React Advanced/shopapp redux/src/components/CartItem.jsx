import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"

const CartItem = ({item,itemIndex}) => {

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item removed successfully");
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div 
            onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
