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
    </div>
  );
}

export default Toast;
