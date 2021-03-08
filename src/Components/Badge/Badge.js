import React from "react";

function Badge() {
  return (
    <div>
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
          <div className="badgeContainer1 badge-skyBlue">
              <i class="fas fa-shopping-cart"></i>
              <span >5</span>
          </div>
          <div className="test" style={{marginTop:"22px"}}></div>
          <div className="badgeContainer2  badge-pink">
              <i class="fas fa-shopping-cart"></i>
              <span >1</span>
          </div>
          <div className="test" style={{marginTop:"18px"}}></div>
          <div className="badge  badge-red">
          <i class="fas fa-envelope-open"></i>
              <span >1</span>
          </div>
          <div className="test" style={{marginTop:"18px"}}></div>
          <div className="badge badge-skyBlue">
          <i class="fas fa-envelope-open"></i>
              <span >1</span>
          </div>
          <div className="test" style={{marginTop:"18px"}}></div>
          <div className="badge badge-pink">
          <i class="fas fa-envelope-open"></i>
              <span >1</span>
          </div>
          
    </div>
  );
}

export default Badge;
