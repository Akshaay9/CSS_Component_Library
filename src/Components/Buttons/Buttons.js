import React from 'react'

function Buttons() {
    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridColumnGap:"15px",gridRowGap:"15px"}}>
        <button className="btn btn-primary btn-primary-hr-outline-out">Primary</button>
        <button className="btn btn-secondary btn-secondary-hr-outline-in">secondary</button>
        <button className="btn btn-success btn-success-hr-scale-out">success</button>
        <button className="btn btn-danger btn-danger-hr-outline-out">danger</button>
        <button className="btn btn-info">info</button>
        <button className="btn btn-light btn-primary btn-light-hr-outline-out">light</button>
        <button className="btn btn-dark">dark</button>
        <button className="btn btn-link btn-link-hr-outline-in-thick">link</button>       
        </div>
    )
}

export default Buttons
