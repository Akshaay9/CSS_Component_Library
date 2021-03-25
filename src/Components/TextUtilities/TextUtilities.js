import React from 'react'

function TextUtilities() {
    return (
        <div>
            <div style={{margin:"5px 0px"}} className="heading-h1 sans">
                <h1 >Hello Everyone how You doing</h1> 
            </div>
            <div style={{margin:"5px 0px"}} className="heading-h1 roboto">
                <h2>Hello Everyone how You doing</h2> 
            </div>
            <div style={{margin:"8px 0px"}} className="heading-h1 roboto">
                <h3>Hello Everyone how You doing</h3> 
            </div>
            <div style={{margin:"8px 0px"}} className="heading-h2 sans">
                <h4>Hello Everyone how You doing</h4> 
            </div>

            <h2 style={{textDecoration:"underline",margin:"12px 0px"}}>Paragraph Text : -</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi obcaecati qui maiores eveniet commodi eaque eius consequuntur culpa non!</p>
            <h2 style={{textDecoration:"underline",margin:"12px 0px"}}>Paragraph Grey text: -</h2>
            <p className="shaded-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi obcaecati qui maiores eveniet commodi eaque eius consequuntur culpa non!</p>
            <h2 style={{textDecoration:"underline",margin:"12px 0px",textAlign:"center"}}>Centered Text -</h2>
            <p className="shaded-black" style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi obcaecati qui maiores eveniet commodi eaque eius consequuntur culpa non!</p>
            <iframe src="https://www.thiscodeworks.com/embed/605c4a732476f700148cf8c2"style={{ width: "90%", height: "22rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
        </div>
    )
}

export default TextUtilities
