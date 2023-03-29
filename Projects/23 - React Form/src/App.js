import React, { useState } from "react";

const App = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
    });

    function changeHandler(event) {
        // setFormData((prev) =>{ return {...prev}});
        setFormData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    }

    console.log(formData);

    return (
        <div>
            <form action="">
                <label htmlFor="firstName">
                    First Name <br />
                </label>
                <input
                    type="text"
                    onChange={changeHandler}
                    value={formData.firstName}
                    name="firstName"
                    id="firstName"
                    placeholder="Priyansh"
                />
                <br />

                <label>
                    Last Name <br />
                    <input
                        type="text"
                        onChange={changeHandler}
                        value={formData.lastName}
                        name="lastName"
                        id="lastName"
                        placeholder="Patel"
                    />
                </label>
                <br />

                <label>
                    Email <br />
                    <input
                        type="email"
                        onChange={changeHandler}
                        value={formData.email}
                        id="email"
                        name="email"
                        placeholder="priyansh.patel@gmail.com"
                    />
                </label>
                <br />

                <label>
                    Country <br />
                    <select
                        name="country"
                        id="country"
                        onChange={changeHandler}
                        value={formData.country}
                    >
                        <option value="india" selected>
                            India
                        </option>
                        <option value="usa">USA</option>
                        <option value="belgium">Belgium</option>
                        <option value="france">France</option>
                        <option value="singapore">Singapore</option>
                    </select>
                </label>
                <br />

                <label htmlFor="">
                    Street address <br />
                    <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        onChange={changeHandler}
                        value={formData.streetAddress}
                        placeholder="16 Main Street"
                    />
                </label>
                <br />

                <label htmlFor="">
                    City <br />
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={changeHandler}
                        value={formData.city}
                        placeholder="Mandsaur"
                    />
                </label>
                <br />

                <label htmlFor="">
                    State / Province <br />
                    <input
                        type="text"
                        id="state"
                        name="state"
                        onChange={changeHandler}
                        value={formData.state}
                        placeholder="Madhaya Pradesh"
                    />  
                </label>
                <br />

                <label htmlFor="">
                    ZIP / Postal code
                    <br />
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        onChange={changeHandler}
                        value={formData.postalCode}
                        placeholder="458001"
                    />
                </label>
                <br />


                <div>
                    
                </div>


                
            </form>
        </div>
    );
};

export default App;
