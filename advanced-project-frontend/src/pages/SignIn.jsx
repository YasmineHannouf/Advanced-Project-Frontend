import React, { useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`http://localhost:8000/api/login`, {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response) {
          // console.log(response.data)
          // const token = response.data.token;
          const isAuthenticated = Cookies.get('Authorisation');

          const cookie = new Cookie();
          cookie.set("Authorisation", isAuthenticated, { path: "/", maxAge: 60 * 60 * 24 });

          setSuccess(response);
          alert("you are logged in " + isAuthenticated);
          navigate("/dash");        }
      })
      .catch(error => {
        if (error) {
          console.log(error);
          setError(error);
        }
        alert(error.response.data);
      });
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
