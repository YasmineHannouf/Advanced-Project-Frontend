import React, { useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../styles/LoginPage.css";
import image from '../assets/milky-way-2695569_960_720.jpg'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8000/api/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }, 
        }
      )
      .then((response) => {
        if (response) {
         
          const isAuthenticated = Cookies.get("Authorisation");

          const cookie = new Cookie();
          cookie.set("Authorisation", isAuthenticated, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });

          setSuccess(response);
          alert("you are logged in " + isAuthenticated);
          navigate("/dash");
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          setError(error);
        }
        alert(error.response.data);
      });
  };

  return (
    <div className="logInContainer">
     
     <div className="form-box">
			<form className="form" onSubmit={handleSubmit}>
				<span className="title">Login</span>
				<span className="subtitle">Let's start</span>
				<div className="form-container">
					<input
						onChange={(event) => setEmail(event.target.value)}
						type="email"
						className="input"
						placeholder="Email"
						required
					/>
					<input
						onChange={(event) => setPassword(event.target.value)}
						type="password"
						className="input"
						placeholder="Password"
						required
					/>
				</div>
				<button style={{ textAlign: 'center' }}>Log In</button>
			</form>
			<div className="form-section">
				
			</div>
		</div>
	</div>
  );
}
