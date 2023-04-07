import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Successfull");
  }

  const removeFromCart = () => {
    dispatch(add(post));
    toast.error("Remove");
  }


  return (

    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in ml-5 mt-10 p-4 gap-3 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">{post.title}</p>
      </div>
      <div>
        <p className="text-gray-400 font-normal w-40 text-[10px] text-left">{post.description.split(" ").slice(0, 10).join("") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="w-full h-full" />
      </div>
      <div className="flex justify-between gap-12">
        <p className="text-green-600 font-semibold">{post.price}</p>
      </div>

      {cart.some((p) => p.id === post.id) ? (
        <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white">{<p>Remove Item</p>}</button>
      ) : (
        <button onClick={addToCart}
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white">{<p>Add To Cart</p>}</button>
      )}
    </div>
  );
};

export default Product;
