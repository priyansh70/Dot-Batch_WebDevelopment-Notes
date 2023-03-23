import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="">
          <div className=""></div>
          <p>OR</p>
          <div className=""></div>
        </div>

        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="">
        <img
          src={frame}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
