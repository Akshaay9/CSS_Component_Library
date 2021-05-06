import React, { useState } from "react";

function Nav1() {
  const[showNav,setSHowNav]=useState(false)
  return (
    <div>
      <div class="nav">
        <div class="nav_left">
          <div className="ham desktop-hide"
          onClick={()=>setSHowNav(!showNav)}
          >
          <i class="fas fa-bars"></i>
          </div>
          <div class="nav_logo">
            <img
              src="https://static.cure.fit/assets/images/curefit-v-man.svg"
              alt=""
            />
          </div>
          <div class="nav_name mobile-hide">
            <h2>Gym.Fit</h2>
          </div>
        </div> 
        <div class="nav_center mobile-hide">
          <ul>
            <li className="hr-pink hr-underline-left">Gym Centers</li>
            <li className="hr-pink hr-underline-left">Gyms</li>
            <li className="hr-pink hr-underline-left">Online PT</li>
            <li className="hr-pink hr-underline-left">Gym Sport</li>
            <li className="hr-pink hr-underline-left">Premium Gym</li>
          </ul>
        </div>
        <div class="nav_right">
          <div className="nav_search">
            <i class="fas fa-search"></i>
          </div>
          <div class="nav_login">
            <i class="fas fa-user"></i>
          </div>
          <div class="nav_cart">
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
      <div class={`nav_center_mobile desktop-hide ${showNav?"show_nav":""}`}>
          <ul>
            <li className="hr-pink hr-underline-left">Gym Centers</li>
            <li className="hr-pink hr-underline-left">Gyms</li>
            <li className="hr-pink hr-underline-left">Online PT</li>
            <li className="hr-pink hr-underline-left">Gym Sport</li>
            <li className="hr-pink hr-underline-left">Premium Gym</li>
          </ul>
        </div>
      <div className="descrip" style={{margin:"0rem 1rem"}}>
        <div className="heading">
          <h2 style={{margin:"0rem 1rem"}} > NavBar one</h2>
          <p style={{margin:"0.5rem 1rem"}}> The above shown is an simple navbar containing three differnet parts,first is details of the web application, second is important Navigation Present in the website and third is the users details and users action on the web spplication</p>
        </div>
        
      </div>
    </div>
  );
}

export default Nav1;
