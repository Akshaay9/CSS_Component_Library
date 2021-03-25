import React from "react";

function Input() {
  return (
    <div>
         <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Login component</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            1)There are 2 login component which can be seen below, one is for sign up and other is for login, each looks the same as other except that first only asks for email and password and the other one asks for first and last name
          </p>
        </div>
      </div>


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

      <iframe src="https://www.thiscodeworks.com/embed/605c45572476f700148cf8bb" style={{ width: "70%", height: "16rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>


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
      <div className="test" style={{ marginTop: "12px" }}></div>

      <iframe src="https://www.thiscodeworks.com/embed/605c45ad2476f700148cf8bc" style={{ width: "70%", height: "20rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
    </div>
  );
}

export default Input;
