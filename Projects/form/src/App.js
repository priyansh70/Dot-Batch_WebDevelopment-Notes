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

    const changeHandler = (event) => {
        setFormData(prev => { prev, event.target.name = event.target.name });
    }

    console.log(formData.firstName)
    return (
        <div>
            <form action="">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    onChange={changeHandler}
                    value={formData.firstName}
                    name="firstName"
                />
            </form>
        </div>
    );
};

export default App;
