import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector();
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div className="ml-5">
            <img className="h-14" src="../logo.png" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart />
              {cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center animate-bounce rounded-full ">{cart.legnth}</span>}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
