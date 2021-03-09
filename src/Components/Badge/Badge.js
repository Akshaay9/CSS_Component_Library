import React from "react";

function Badge() {
  return (
    <div >
      <div className="badgeForNav">
        <h1>Example heading</h1> <span className="badgeForH1">New</span>
      </div>
      <div className="test" style={{ marginTop: "12px" }}></div>
      <div className="badgeForNav">
        <h2>Example heading</h2> <span className="badgeForH2">New</span>
      </div>
      <div className="test" style={{ marginTop: "12px" }}></div>
      <div className="badgeForNav">
        <h3>Example heading</h3> <span className="badgeForH3">New</span>
      </div>
      <div style={{ width: "80%",minWidth:"22rem", margin: "auto", display: "flex", justifyContent: "space-around", alignItems: "center",flexWrap:"wrap" }}>
        
        {/* badges */}
      <div className="badgeContainer1 badge-skyBlue">
        <i class="fas fa-shopping-cart"></i>
        <span>5</span>
      </div>
      <div className="test" style={{ marginTop: "22px" }}></div>
      <div className="badgeContainer2  badge-pink">
        <i class="fas fa-shopping-cart"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge  badge-red">
        <i class="fas fa-envelope-open"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-skyBlue">
        <i class="fas fa-envelope-open"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-pink">
        <i class="fas fa-envelope-open"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-img badge-pink">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
          alt=""
        />
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-img badge-red">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
          alt=""
        />
        <span>1</span>
        </div>
        </div>
    </div>
  );
}

export default Badge;
