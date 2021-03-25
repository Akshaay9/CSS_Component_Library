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
        </div>
    )
}

export default Stars
