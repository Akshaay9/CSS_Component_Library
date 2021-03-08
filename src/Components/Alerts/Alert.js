import React from 'react'

function Alert() {
    return (
        <div >
            <div className="alert alert-primary">
                This is a primary alert—check it out!
           </div>
            
            <div className="test" style={{ marginTop: "12px" }}></div>
            
            <div className="alert alert-secondary">
                This is a primary alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-success">
                This is a primary alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-danger">
                This is a primary alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-warning">
                This is a primary alert—check it out!
           </div>
           <div className="test" style={{marginTop:"12px"}}></div>
            <div className="alert alert-info">
            This is a primary alert—check it out!
           </div>
        </div>
    )
}

export default Alert
