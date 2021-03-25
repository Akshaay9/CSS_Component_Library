import React from 'react'

function Stars() {
    return (
        <div style={{margin:"1rem"}}>
            <div className="rating bg-blue">
                <h3>4.5</h3>
            </div>
            <div style={{margin:"1rem"}}></div>
            <div className="rating bg-red">
                <h3>2</h3>
            </div>
            <div style={{margin:"1rem"}}></div>
            <div className="rating bg-green">
                <h3>2.5</h3>
            </div>
            <div style={{margin:"1rem"}}></div>
            <div className="rating bg-dark">
                <h3>3</h3>
            </div>
            <div style={{margin:"1rem"}}></div>
            <div className="rating bg-pink">
                <h3>3.5</h3>
            </div>
            <div className="descrip" style={{margin:"0rem 1rem"}}>
        <div className="heading">
          <h2 style={{margin:"0rem 1rem"}} > Rating</h2>
          <p style={{margin:"0.5rem 1rem"}}>Ratings are added to define  or to add the rate/value of the component </p>
        </div>
        
      </div>
        </div>
    )
}

export default Stars
