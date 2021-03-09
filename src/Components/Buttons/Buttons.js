import React from 'react'

function Buttons() {
    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridColumnGap:"15px",gridRowGap:"15px"}}>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">secondary</button>
        <button className="btn btn-success">success</button>
        <button className="btn btn-danger">danger</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-light">light</button>
        <button className="btn btn-dark">dark</button>
        <button className="btn btn-link">link</button>       
        </div>
    )
}

export default Buttons
