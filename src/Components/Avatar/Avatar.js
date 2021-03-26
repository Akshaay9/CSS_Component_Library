import React from "react";

function Avatar() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,80px)",
        }}
      >
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

      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Round Avatars</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            1) Avatars are found throughout material design with uses in
            everything from tables to dialog menus.
          </p>
          <p></p>
          <p style={{ margin: "0.5rem 1rem" }}>
            2) YOu can chamge the shape of the image as well as size of the
            image of thr avatar by mentioning{" "}
            <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              round-xs
            </span>{" "}
            or{" "}
            <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              square-xs
            </span>{" "}
          </p>
        </div>
      </div>

      <iframe src="https://www.thiscodeworks.com/embed/605c32d52476f700148cf8aa" style={{ width: "70%", height: "22rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,90px)" }}>
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
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h1 style={{ margin: "0rem 1rem" }}> Square Avatar Avatars</h1>

          <p style={{ margin: "0.5rem 1rem" }}>
            2) YOu can chamge the shape of the image to square shaped as shown
            above
          </p>
        </div>
      </div>

      <iframe src="https://www.thiscodeworks.com/embed/605c35142476f700148cf8ae" style={{ width: "70%", height: "22rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>
       
    </div>
  );
}

export default Avatar;
