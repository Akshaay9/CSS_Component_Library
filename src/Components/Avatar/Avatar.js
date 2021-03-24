import React from "react";

function Avatar() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,90px)",
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

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-xs%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-lg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-xl%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        style={{
          width: "1050px",
          height: "791px",
          border: "0",
          overflow: "hidden",
          display: "block",
          margin: "auto",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
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

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520squre-xs%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520squre-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520squre-lg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520squre-xl%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        style={{
          width: "1050px",
          height: "691px",
          border: "0",
          overflow: "hidden",
          display: "block",
          margin: "auto",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}

export default Avatar;
