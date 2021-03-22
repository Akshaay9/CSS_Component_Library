import React from "react";

function DropDownList() {
  return (
    <div style={{width:"50%",display:"flex",justifyContent:"space-around"}}>
      <div style={{ marginTop: "22px", marginLeft: "12px" }}>
        <div className="nav-hoover-further-links mens-dropdown">
          <div className="arrow-up"></div>
          <div className="box-arrow"></div>

          <div className="nav-hoover-further-links-heading">
            <h3>Mens Clothing</h3>
          </div>
          <div className="nav-hoover-further-links-li">
            <ul>
              <li>1) Hoodie and Jackets</li>
              <li>2) Tanks</li>
              <li>3) Track Suits</li>
              <li>4) T-shirts</li>
              <li>5) Socks</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "22px", marginLeft: "12px" }}>
        <div className="nav-hoover-further-links mens-dropdown">
          <div className="arrow-up"></div>
          <div className="box-arrow"></div>

          <div className="nav-hoover-further-links-heading">
            <h3>Mens Clothing</h3>
          </div>
          <div className="nav-hoover-further-links-li">
            <ul>
              <li>1) Hoodie and Jackets</li>
              <li>2) Tanks</li>
              <li>3) Track Suits</li>
              <li>4) T-shirts</li>
              <li>5) Socks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownList;
