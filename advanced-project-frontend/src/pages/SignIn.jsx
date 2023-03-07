import React from 'react';
import '../styles/LoginPage.css'; // import CSS file for styles

function SignIn() {
  return (
    <div className="containerLogin">
      <div className="drop">
        <div className="content">
          <h2 className="animate__heartBeat">Drop in</h2>
          <form>
            <div className="input-box">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="input-box">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
