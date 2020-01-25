import React from 'react';

function Login() {
    return (
      <div>
        <form onsubmit='loginHandler' >
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        
        <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
export default Login;




      