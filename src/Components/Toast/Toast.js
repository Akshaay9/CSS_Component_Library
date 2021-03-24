import React from "react";

function Toast() {
  return (
    <div>
      <div className="toast bg-toast-danger">
        <i class="fas fa-exclamation-circle"></i>
        <div className="toastInfo">
          <p>Error</p>
          <p>This is an error alert — check it out!</p>
        </div>
      </div>
      {/*  */}
      <div className="test" style={{ marginTop: "12px" }}></div>
      {/*  */}
      <div className="toast bg-toast-warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div className="toastInfo">
          <p>warning</p>
          <p>This is an warning alert—check it out!</p>
        </div>
      </div>
      {/*  */}
      <div className="test" style={{ marginTop: "12px" }}></div>
      {/*  */}
      <div className="toast bg-toast-info">
        <i class="fas fa-info-circle"></i>
        <div className="toastInfo">
          <p>info</p>
          <p>This is an info alert — check it out!</p>
        </div>
      </div>
      {/*  */}
      <div className="test" style={{ marginTop: "12px" }}></div>
      {/*  */}
      <div className="toast bg-toast-success">
        <i class="fas fa-check-circle"></i>
        <div className="toastInfo">
          <p>success</p>
          <p> This is an success alert — check it out!</p>
        </div>
      </div>
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Alerts</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            toast are displayed if the user wants to be notifie/ responded for
            some of their actions as well as to get a response from a
            webite,there are 6 different badges
          </p>

          <p style={{ margin: "0.5rem 1rem" }}>
            1) First one is an danger toast which can be added by writing
            <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                color: "white",
                margin: "0px 5px",
                padding: "0px 5px",
              }}
            >
            toast bg-toast-primary
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            2) second one is an Warning toast which can be added by writing
            <span
              style={{
                display: "inline-block",
                margin: "0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
             toast bg-toast-Warning
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            3) third one is an info toast which can be added by writing
            <span
              style={{
                display: "inline-block",
                margin: "0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
             toast bg-toast-info
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            4) First one is an success alert which can be added by writing
            <span
              style={{
                display: "inline-block",
                margin: "0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
             toast bg-toast-danger
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Toast;
