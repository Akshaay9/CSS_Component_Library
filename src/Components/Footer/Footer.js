import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <p className="footer-p-font">
            © 2021 | Fit-Shaark Limited | All Rights Reserved @Akshay | About me
          </p>
        </div>
        <div className="footer-right-container">
          <div className="footer-right">
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

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%253Cdiv%2520className%253D%2522footer%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522footer-left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522footer-p-font%2522%253E%25C2%25A9%25202021%2520%257C%2520Fit-Shaark%2520Limited%2520%257C%2520All%2520Rights%2520Reserved%2520%2540Akshay%2520%257C%2520About%2520me%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522footer-right-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522footer-right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-twitter%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-github%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-linkedin%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-envelope-square%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        style={{
          width: "1020px",
          height: "464px",
          border: "0",
          overflow: "hidden",
          display: "block",
          margin: "auto",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}

export default Footer;
