import React from "react";

function Buttons() {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridColumnGap: "15px",
          gridRowGap: "15px",
        }}
      >
        <button className="btn btn-primary btn-primary-hr-outline-out">
          Primary
        </button>
        <button className="btn btn-secondary btn-secondary-hr-outline-in">
          secondary
        </button>
        <button className="btn btn-success btn-success-hr-scale-out">
          success
        </button>
        <button className="btn btn-danger btn-danger-hr-outline-out">
          danger
        </button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-light btn-primary btn-light-hr-outline-out">
          light
        </button>
        <button className="btn btn-dark">dark</button>
        <button className="btn btn-link btn-link-hr-outline-in-thick">
          link
        </button>
      </div>

      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Buttons</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            1) There are 6 different colors buttons with different hoover effect,
            colors are added by mentioning
          
          <span
            style={{
              display: "inline-block",
              backgroundColor: "gray",
                          color: "white",
              margin:"0px 5px",
              padding: "0px 5px",
            }}
          >
                          btn-primary-hr-outline-out / btn-secondary btn-secondary-hr-outline-in
          </span>{" "}
                      for outward outline animation and inward animation respectively
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
         2)  U can even add animation to its scale by making its size big or small on hoover or click by adding
          
          <span
            style={{
              display: "inline-block",
              backgroundColor: "gray",
                          color: "white",
              margin:"0px 5px",
              padding: "0px 5px",
            }}
          >
                          btn-success-hr-scale-out / btn-success-hr-scale-in
          </span>{" "}
                      for outward outline and inward scaling of button respectively
          </p>
        </div>
      </div>
    </>
  );
}

export default Buttons;
