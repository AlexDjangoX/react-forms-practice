import { useState } from "react";
import "./App.css";

const initialUserData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {
  const [userData, setUserData] = useState(initialUserData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    switch (name) {
      case "name":
        setUserData({ ...userData, name: value });
        break;
      case "address":
        setUserData({ ...userData, address: value });
        break;
      case "phone":
        setUserData({ ...userData, phone: value });
        break;
      case "email":
        setUserData({ ...userData, email: value });
        break;
      case "complaint":
        setUserData({ ...userData, complaint: value });
        break;
      case "contact":
        setUserData({ ...userData, contact: value });
        break;
      case "consent":
        setUserData({ ...userData, consent: checked });
        break;
      default:
        setUserData({ ...userData });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={userData.complaint}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={userData.contact === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={userData.contact === "email"}
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={userData.contact === "post"}
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={userData.contact === "none"}
                onChange={handleChange}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={userData.consent}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
