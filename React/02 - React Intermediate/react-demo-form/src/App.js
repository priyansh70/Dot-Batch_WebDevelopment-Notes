import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
          id="firstName"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
          id="lastName"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
          id="email"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />

        <select
          name="country"
          id="country"
          country
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="uae">UAE</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          placeholder="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
          id="streetAddress"
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          placeholder="city"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
          id="city"
        />

        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          placeholder="state"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
          id="state"
        />

        <br />
        <label htmlFor="postalCode">postalCode</label>
        <br />
        <input
          type="number"
          name="postalCode"
          placeholder="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
          id="postalCode"
        />

        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              value={formData.candidate}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidate">candidate</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              value={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">offers</label>
              <p>Get notified when someones posts a comment on a posting</p>
            </div>
          </div>
        </fieldset>


        <fieldset>
          <legend>Push Notification</legend>
          <p>These are d............phone</p>

          <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>

          <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={changeHandler} />
          <label htmlFor="pushEmail">Same as Email</label>

          <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={changeHandler} />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
