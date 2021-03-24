import React from 'react'

function Alert() {
    return (
        <div >
            <div className="alert alert-primary">
                This is a primary alert—check it out!
           </div>
            
            <div className="test" style={{ marginTop: "12px" }}></div>
            
            <div className="alert alert-secondary">
                This is a secondary alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-success">
                This is a success alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-danger">
                This is a danger alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-warning">
                This is a warning alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-info">
                This is a info alert—check it out!
           </div>
            
           <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Alerts</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
           Alerts are displayed if the user wants to be notifie/ responded for some of their actions as well as to get a response from a webite,there are 6 different badges
          </p>
         
          <p style={{ margin: "0.5rem 1rem" }}>
            1) First one is an primary alert  which can be added by writing 
            <span
              style={{
                display: "inline-block",
                backgroundColor: "gray",
                                color: "white",
                margin:"0px 5px",
                padding: "0px 5px",
              }}
            >
              alert alert-primary
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            2) second one is an secondary alert  which can be added by writing 
            <span
              style={{
                                display: "inline-block",
                                margin:"0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              alert alert-secondary
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            3) third  one is an success alert  which can be added by writing 
            <span
              style={{
                display: "inline-block",margin:"0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              alert alert-success
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            4) First one is an danger alert  which can be added by writing 
            <span
              style={{
                display: "inline-block",margin:"0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              alert alert-danger
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            5) First one is an warning alert  which can be added by writing 
            <span
              style={{
                display: "inline-block",margin:"0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              alert alert-warning
            </span>{" "}
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            6) First one is an info alert  which can be added by writing 
            <span
              style={{
                display: "inline-block",margin:"0px 5px",
                backgroundColor: "gray",
                color: "white",
                padding: "0px 5px",
              }}
            >
              alert alert-info
            </span>{" "}
          </p>
        </div>
      </div>
        </div>
    )
}

export default Alert
