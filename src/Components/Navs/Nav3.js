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
            <li className="hr-underline-right mobile-hide">Gym Centers</li>
            <li className="hr-underline-right">Gyms</li>
            <li className="hr-underline-right">Online PT</li>
            <div className="ham desktop-hide">
              <i class="fas fa-bars"></i>
            </div>
            <li className="hr-underline-right mobile-hide">Premium Gym</li>
          </ul>
        </div>
      </div>
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> NavBar Three</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            The above NavBAr has only two section unline the other two which had
            three section, in the left side one can see the website logo,name
            and information and on other side we have all the necessary links
            for the websites content
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nav3;
