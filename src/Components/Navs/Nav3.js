import React from "react";

function Nav3() {
  return (
    <div>
      <div className="nav bg-dark ">
        <div className="nav_left">
          <div className="nav_name">
            <h2>Fit Studio</h2>
          </div>
        </div>
              <div className="no_right">
              <ul>
            <li className="hr-underline-right">Gym Centers</li>
            <li className="hr-underline-right">Gyms</li>
            <li className="hr-underline-right">Online PT</li>
            <li className="hr-underline-right">Gym Sport</li>
            <li className="hr-underline-right">Premium Gym</li>
          </ul>
        </div>
      </div>
      <div className="descrip" style={{margin:"0rem 1rem"}}>
        <div className="heading">
          <h2 style={{margin:"0rem 1rem"}} > NavBar Three</h2>
          <p style={{margin:"0.5rem 1rem"}}>The above NavBAr has only two section unline the other two which had three section, in the left side one can see the website logo,name and information and on other side we have all the necessary links for the websites content</p>
        </div>
        </div>
      
    </div>
  );
}

export default Nav3;
