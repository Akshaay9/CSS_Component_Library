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

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%253Cdiv%2520className%253D%2522login-form%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-user%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ESign-In%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-email%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522email%2522%2520placeholder%253D%2522Email%2520Address%2520*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-pass%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%2520placeholder%253D%2522Password%2520*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253ESign-In%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EDon%27t%2520have%2520an%2520account%253F%2520Sign%2520Up%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"620px",height:"580px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>



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

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%253Cdiv%2520className%253D%2522login-form%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-user%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ESign-Up%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-name%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520className%253D%2522login-form-name-first%2522%2520type%253D%2522name%2522%2520placeholder%253D%2522First%2520name%2520*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520%2520className%253D%2522login-form-name-last%2522%2520%2520type%253D%2522name%2522%2520placeholder%253D%2522Last%2520name%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-email%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522email%2522%2520placeholder%253D%2522Email%2520Address%2520%2520*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522login-form-pass%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%2520placeholder%253D%2522Password%2520*%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253ESign-Up%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EAlredy%2520have%2520an%2520account%253F%2520Sign%2520In%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"620px",height:"790px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
  );
}

export default Input;
