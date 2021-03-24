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
            <li className="hr-underline-middle">Home</li>
            <li className="hr-underline-middle">About</li>
            <li className="hr-underline-middle">Blog</li>
            <li className="hr-underline-middle">Classes</li>
            <li className="hr-underline-middle">Contact</li>
          </ul>
        </div>
              <div className="nav_right_single">
              <img src="https://img.icons8.com/material-sharp/24/000000/search.png"/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="descrip" style={{margin:"0rem 1rem"}}>
        <div className="heading">
          <h2 style={{margin:"0rem 1rem"}} > NavBar Two</h2>
          <p style={{margin:"0.5rem 1rem"}}> The above shown is an simple navbar which is slight different from navBar one, its background is black which can be added by adding class  <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
             bg-dark
            </span>{" "}and final section is specifically dedicated to search products</p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Nav2;
