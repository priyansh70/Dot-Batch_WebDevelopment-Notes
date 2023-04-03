import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw0plY95dc2QowfYT3dZyF4s&ust=1680541358508000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDHr8fWi_4CFQAAAAAdAAAAABAE"/>
          </div>
        </NavLink>

          <div>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div>
                  <FaShoppingCart/>
              </div>
            </NavLink>
            
          </div>
      </div>
    </div>
  )
};

export default Navbar;
