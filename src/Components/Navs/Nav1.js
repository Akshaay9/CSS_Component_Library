import React from "react";

function Nav1() {
  return (
    <div>
      <div class="nav ">
        <div class="nav_left">
          <div class="nav_logo">
            <img
              src="https://static.cure.fit/assets/images/curefit-v-man.svg"
              alt=""
            />
          </div>
          <div class="nav_name">
            <h2>Gym.Fit</h2>
          </div>
        </div>
        <div class="nav_center">
          <ul>
            <li className="hr-pink">Gym Centers</li>
            <li className="hr-pink">Gyms</li>
            <li className="hr-pink">Online PT</li>
            <li className="hr-pink">Gym Sport</li>
            <li className="hr-pink">Premium Gym</li>
          </ul>
        </div>
        <div class="nav_right">
          <div class="nav_login">
            <i class="fas fa-user"></i>
            <span>Login</span>
          </div>
          <div class="nav_cart">
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav1;
