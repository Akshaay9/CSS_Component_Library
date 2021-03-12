import React from "react";

function Avatar() {
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,90px)"}}>
        <div className="avatar round-xs">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <div className="avatar round-sm">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <div className="avatar round-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <div className="avatar round-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,90px)"}}>
        <div className="avatar squre-xs">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <div className="avatar squre-sm">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <div className="avatar squre-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <div className="avatar squre-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
