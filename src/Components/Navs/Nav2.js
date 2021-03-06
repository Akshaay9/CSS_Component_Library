import React from "react";

function Nav2() {
  return (
    <div>
      <div className="nav bg-dark  ">
        <div className="nav_left">
          <div className="nav_name">
            <h2>YOGA FUN</h2>
          </div>
        </div>
        <div className="nav_center">
          <ul>
            <li className="hr-light_dark">Home</li>
            <li className="hr-light_dark">About</li>
            <li className="hr-light_dark">Blog</li>
            <li className="hr-light_dark">Classes</li>
            <li className="hr-light_dark">Contact</li>
          </ul>
        </div>
              <div className="nav_right_single">
              <img src="https://img.icons8.com/material-sharp/24/000000/search.png"/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Nav2;
