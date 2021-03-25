import React from "react";

function Intro() {
  return (
    <div className="svgBG">
      <div
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          padding: "3rem",
        }}
      >
        <h1>Welcome to UI world</h1>
        <p
          style={{
            width: "100%",
            fontSize: "17px",
            lineHeight: "26px",
            marginTop: "12px",
            fontWeight: "thin",
          }}
        >
          Start Building web applications like its 2025, without worrying about
          style,design and color, let me take care of that, Introducing to you,
          UI world. A CSS component library with more than 10+ popular Styled
          components specially designed by keeping in mind all the necessary
          design principles.
        </p>
      </div>
      <div
        style={{
          marginLeft: "20px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h2>How to Integrate UI World in your next Project ?</h2>
        <p
          style={{
            width: "100%",
            fontSize: "17px",
            lineHeight: "24px",
            marginTop: "12px",
          }}
        >
          {" "}
          Well It is pretty simple, just copy the below CSS line and paste it in
          your Head Component of your HTML file.
        </p>
          </div>
          <iframe src="https://www.thiscodeworks.com/embed/605c32722476f700148cf8a9" style="width: 100%; height: 99px;" frameborder="0"
              style={{ width: "50%", height: "53px", display: "block", margin: "1rem auto", border: "none", minWidth: "20rem" }}
          ></iframe>
         
          

      <div
        style={{
          marginLeft: "20px",
          textAlign: "center",
          fontFamily: "sans-serif",
          padding: "1.5rem",
        }}
      >
        <h2>Is the UI World keep getting any updates ?</h2>
        <p
          style={{
            width: "100%",
            fontSize: "17px",
            lineHeight: "24px",
            marginTop: "12px",
          }}
        >
          {" "}
          Yes. It will be getting Updates frequently, right now i have added all
          the necessary/important components one looks for while building an web
          app, i keep updating this library as i go on creating my projects or
          when i come acrosee any interesting Styled component, Till then stay
          tuned
        </p>
        <div
          style={{
            display: "flex",
                      width: "30%",
                      minWidth: "19rem",
                
            justifyContent: "space-between",
            margin: "1rem auto",
          }}
        >
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/Akshaay9/cssCompLibrary"
          >
            <button className="btn btn-primary btn-primary-hr-outline-out">
              Git Hub
            </button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://twitter.com/Kshy_nair"
          >
            <button className="btn btn-primary btn-primary-hr-outline-out">
              Twitter
            </button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://t.co/LG8Ki2gZL2?amp=1"
          >
            <button className="btn btn-primary btn-primary-hr-outline-out">
              Linked-In
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
