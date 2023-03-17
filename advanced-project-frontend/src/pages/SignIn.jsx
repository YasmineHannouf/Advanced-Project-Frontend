import React ,{useState}from 'react';
import '../styles/LoginPage.css';

function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <section>
      <div className="container">
        <div className={`user ${isSignIn ? 'signinBx' : 'signupBx'}`}>
          <div className="imgBx">
            <img
              src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
              alt=""
            />
          </div>
          <div className="formBx">
            <form onSubmit={(e) => e.preventDefault()}>
              <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" value={isSignIn ? 'Login' : 'Sign Up'} />
              <p className="signup">
                {isSignIn ? `Don't have an account ?` : `Already have an account ?`}
                <a href="#" onClick={toggleForm}>
                  {isSignIn ? 'Sign Up.' : 'Sign In.'}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;