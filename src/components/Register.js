import React from "react";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="ask-container">
        <div className="ask">
          <form action="askadvice.php">
            <p className="askp">Free Advice: Ask Our Experts</p>
            <input type="Email" placeholder="Your Email" />
            <textarea
              name="message"
              id="askadvice"
              rows="5"
              placeholder="Ask anything..."
            ></textarea>
            <select name="typeselect" id="selecttype">
              <option value="0" defaultValue>
                Select an option
              </option>
              <option value="1">I want to appoint distributors</option>
              <option value="2">I want to become distributors</option>
              <option value="3">I want to appoint Franchiseor</option>
              <option value="4">I want to become Franchiseor</option>
              <option value="5">I want to appoint Sales Agent</option>
              <option value="6">I want to become Sales Agent</option>
            </select>
            <button className="">Submit</button>
          </form>
        </div>

        <div className="register">
          <div className="regcon">
            <p className="askp">Register in:</p>
            <button className="regbutton">Distributors</button>
            <br />
            <button className="regbutton">Franchisees</button>
            <br />
            <button className="regbutton">Sales Agent</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
