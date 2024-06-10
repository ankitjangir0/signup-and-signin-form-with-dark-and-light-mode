import React, { useState } from 'react';

function Content() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [signupForm, setSignupForm] = useState({ email: '', password: '' });
  const [signinForm, setSigninForm] = useState({ email: '', password: '' });
  const [signupErrors, setSignupErrors] = useState({});
  const [signinErrors, setSigninErrors] = useState({});


  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSigninChange = (e) => {
    setSigninForm({ ...signinForm, [e.target.name]: e.target.value });
  };

  const validateSignup = () => {
    const errors = {};
    if (!signupForm.email.includes('@')) {
      errors.email = 'Invalid email address';
    }
    if (signupForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (signupForm.password != signupForm.confermpassword){
      errors.confermpassword = "Password does not match please reenter your password"
    }
    setSignupErrors(errors);
    return Object.keys(errors).length === '';
  };

  const validateSignin = () => {
    const errors = {};
    if (!signinForm.email.includes('@')) {
      errors.email = 'Invalid email address';
    }
    if (signinForm.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    setSigninErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      console.log('Signup form submitted:', signupForm);
    }
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    if (validateSignin()) {
      console.log('Signin form submitted:', signinForm);
    }
  };

  return (
  <>
      <div className="forms">
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <h2>Sign Up &rarr;</h2>
         
          <input
            type="email"
            name="email"
            placeholder="Enter your Email here  "
            value={signupForm.email}
            onChange={handleSignupChange}
          />
         
          {signupErrors.email && <p className="error">{signupErrors.email}</p>} <br/>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={signupForm.password}
            onChange={handleSignupChange}
          />
          {signupErrors.password && <p className="error">{signupErrors.password}</p>} <br/>

          <input
            type="password"
            name="confermpassword"
            placeholder="Enter your password Again "
            value={signupForm.confermpassword}
            onChange={handleSignupChange}
          />
           {signupErrors.confermpassword && <p className="error">{signupErrors.confermpassword}</p>} <br/>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <form className="signin-form" onSubmit={handleSigninSubmit}>
          <h2>Sign In &rarr;</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email here "
            value={signinForm.email}
            onChange={handleSigninChange}
          />
          {signinErrors.email && <p className="error">{signinErrors.email}</p>} <br/>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={signinForm.password}
            onChange={handleSigninChange}
          />
          {signinErrors.password && <p className="error">{signinErrors.password}</p>} <br/>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    
    </>
  );
}

export default Content;
