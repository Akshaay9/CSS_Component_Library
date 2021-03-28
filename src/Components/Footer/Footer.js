import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-bottom">
    <div className="footer-bottom-left-">
      <p className="footer-bottom-p-font">
        © 2021 | Fit-Shaark Limited | All Rights Reserved @Akshay | About me
      </p>
    </div>
    <div className="footer-bottom-right-container">
      <div className="footer-bottom-right">
        <i class="fab fa-twitter"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fas fa-envelope-square"></i>
      </div>
    </div>
  </div>

      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Footer</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            The above component is a Footer Bar which can be placed on bottom of
            the website, it has two section on the sides, one contains all the
            necessary terms and conditions of the website and other section
            contains all the social media links of the website
          </p>
        </div>
      </div>

      <iframe src="https://www.thiscodeworks.com/embed/605c3bd82476f700148cf8af" style="width: 100%; height: 255px;" style={{ width: "65%", height: "13rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>
    </div>
  );
}

export default Footer;
