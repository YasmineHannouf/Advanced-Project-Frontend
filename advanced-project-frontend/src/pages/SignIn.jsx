
import "../styles/LoginPage.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from 'axios';



export default function Login({ setToken }) {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      alert('Login successful');
      console.log(response);
      // do something with the response, such as storing the token
    } catch (error) {
      console.error(error);
      // handle error, such as displaying an error message to the user
    }
  };
  

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="email" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button  onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

