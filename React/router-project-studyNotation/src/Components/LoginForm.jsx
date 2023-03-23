import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    function changeHandler(event) {
        setFormData([(prev) => [
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ]])
    }
    
    function submitHandler(e)
    {   
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success")
        navigate("/dashboard")
    }


    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="">
                <p>
                    Email Address
                    <sup>*</sup>
                </p>

                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                />
            </label>

            <label htmlFor="">
                <p>
                    Password
                    <sup>*</sup>
                </p>

                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                />

                <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button>
                Sign in
            </button>

        </form>
    );
};

export default LoginForm;
