import React from 'react'

function ResponsiveImage() {
    return (
        <>
             <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> responsive Image</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            Below there is two image, which are responsive in nature if the pixel of the display decreases, it automatically getsadjusted to it.
          </p>
        </div>
      </div>
        <div>
             <div className="hero-banner-three">
            <>
                    <img src="https://cdn.shopify.com/s/files/1/1367/5207/files/07_01_Shop_mens_ad779213-0fed-41df-a3ab-2f5245a07264_1440x.jpg?v=1615371691" alt="" />
                </>
                <>
                    <img className="yoga-banner" src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </>
            </div>
            </div>
            <iframe src="https://www.thiscodeworks.com/embed/605c4c3a2476f700148cf8c7" style={{ width: "80%", height: "8rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
            </>
    )
}

export default ResponsiveImage
