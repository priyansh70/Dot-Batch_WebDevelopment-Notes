import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [showCreatePass, setShowCreatePass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    function changeHandler(event) {
        setFormData([
            (prev) => [
                {
                    ...prev,
                    [event.target.name]: event.target.value,
                },
            ],
        ]);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Create");
        const accountData = {
            ...formData,
        };
        console.log(accountData);

        navigate("/dashboard");
    }

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">
                        <p>
                            First Name <sup>*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            placeholder="Enter First Name"
                            onChange={changeHandler}
                            value={FormData.firstName}
                            name="firstName"
                        />
                    </label>

                    <label htmlFor="">
                        <p>
                            Last Name <sup>*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            placeholder="Enter Last Name"
                            onChange={changeHandler}
                            value={FormData.lastName}
                            name="lastName"
                        />
                    </label>
                </div>

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

                <div>
                    <label htmlFor="">
                        <p>
                            Create Password
                            <sup>*</sup>
                        </p>

                        <input
                            type={showCreatePass ? "text" : "password"}
                            required
                            value={formData.password}
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            name="password"
                        />
                        <span
                            onClick={() =>
                                setShowCreatePass(!showCreatePass)
                            }
                        >
                            {showCreatePass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>

                    <label htmlFor="">
                        <p>
                            Confirm Password
                            <sup>*</sup>
                        </p>

                        <input
                            type={showConfirmPass ? "text" : "password"}
                            required
                            value={formData.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={changeHandler}
                            name="confirmPassword"
                        />

                        <span
                            onClick={() =>
                                setShowConfirmPass(!showConfirmPass)
                            }
                        >
                            {showConfirmPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                </div>

                <button>Create Account</button>
            </form>
        </div>
    );
};

export default SignupForm;
