import React from "react";

function DropDownList() {
  return (
    <>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
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
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Drop Down List</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            Dorp down list are basically extend content which invisble to the
            client unless they hovver or clicks on it. it mainly used to
            decrease the content overflow on the device
          </p>
        </div>
      </div>
    </>
  );
}

export default DropDownList;
