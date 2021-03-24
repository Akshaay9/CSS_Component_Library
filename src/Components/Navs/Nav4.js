import React from "react";

function Nav4() {
  return (
    <div>
      <div className="nav bg-dark nav_mg_auto">
        <div className="no_right">
          <ul>
            <li className="hr-underline-grow">Gym Centers</li>
            <li className="hr-underline-grow">Gyms</li>
            <li className="hr-underline-grow">Online PT</li>
            <li className="hr-underline-grow">Gym Sport</li>
            <li className="hr-underline-grow">Premium Gym</li>
          </ul>
        </div>
        <div className="nav_left">
          <div className="nav_name">
            <h2>Fit Studio</h2>
          </div>
        </div>
      </div>
      <div className="descrip" style={{margin:"0rem 1rem"}}>
        <div className="heading">
          <h2 style={{margin:"0rem 1rem"}} > NavBar Four</h2>
          <p style={{ margin: "0.5rem 1rem" }}>The above navBar is same as the third one except the fact that both sides are mirrored and theres is a smallgap on left and right side of the Nav Bar which is achieved by adding 
          <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
            nav_mg_auto
            </span>{" "} 
           in our className</p>
        </div>
        </div>
    </div>
  );
}

export default Nav4;
