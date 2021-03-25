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
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Badges</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            1) Badges are two different type, one is added near a text, Navigation bar to be precise and other is added neaar icons
          </p>
          <p></p>
          <p style={{ margin: "0.5rem 1rem" }}>
            2) The above seen one is added near a text, mentioning the user that the new Feature has been added to the website or mentioning new Beta version of feature is added or u have unlocked a new content, basically to grab or notify user about the presence of new feature,  this can be achieved by adding className
            <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              badgeFor h1/h2/h3
            </span>{" "}
            Depend upon the kind of text to near which u r planning to add this feature
          </p>
        </div>
      </div>

      <iframe src="https://www.thiscodeworks.com/embed/605c3e772476f700148cf8b1" style={{ width: "55%", height: "10rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>
      
      <div style={{ width: "80%",minWidth:"22rem", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center",flexWrap:"wrap" }}>
        
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

      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Badges Two</h2>
         
          <p style={{ margin: "0.5rem 1rem" }}>
            As mentioned earlier regarding two different kinds of badges, this is the second kind of branch where it is added near an icon(cart, email,avatar, etc:-) mainly to notify user about some kind notification/to state that their action has been recorded. 
          </p>
        </div>
      </div>
      
      <iframe src="https://www.thiscodeworks.com/embed/605c3ec02476f700148cf8b3" style="width: 100%; height: 255px;" style={{ width: "55%", height: "31rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>
    </div>
  );
}

export default Badge;
