import React from "react";

function Input() {
  return (
    <div>
      <div className="login-form">
        <div className="login-form-header">
          <i class="fas fa-user"></i>
          <h2>Sign-In</h2>
        </div>
        <div className="login-form-body">
          <div className="login-form-email">
            <input type="email" placeholder="Email Address *" />
          </div>
          <div className="login-form-pass">
            <input type="password" placeholder="Password *" />
          </div>
          <button className="btn btn-primary">Sign-In</button>
        <p>Don't have an account? Sign Up</p>
        </div>
      </div>
      <div className="test" style={{marginTop:"12px"}}></div>
      <div className="login-form">
        <div className="login-form-header">
          <i class="fas fa-user"></i>
          <h2>Sign-Up</h2>
        </div>
        <div className="login-form-body">
          
          <div className="login-form-name">
            <input className="login-form-name-first" type="name" placeholder="First name *" />
            <input  className="login-form-name-last"  type="name" placeholder="Last name" />
          </div>
          <div className="login-form-email">
            <input type="email" placeholder="Email Address  *" />
          </div>
          <div className="login-form-pass">
            <input type="password" placeholder="Password *" />
          </div>
          <button className="btn btn-primary">Sign-Up</button>
        <p>Alredy have an account? Sign In</p>
        </div>
       
      </div>
    </div>
  );
}

export default Input;
