import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Logo */}
      <div>
        <Link>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Button Group  */}
      <div>
        <Link to="/login">
            <button>Log in</button>
        </Link>

        <Link to="/signup">
            <button>Sign up</button>
        </Link>

        <Link to="/logout">
            <button>Log out</button>
        </Link>

        <Link to="/dashboard">
            <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
