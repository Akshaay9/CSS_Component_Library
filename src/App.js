import React, { useState } from "react";
import NavForDoc from "./Components/NavForDoc/NavForDoc";
import Nav1 from "./Components/Navs/Nav1";
import Nav2 from "./Components/Navs/Nav2";
import "./App.css";
import Nav3 from "./Components/Navs/Nav3";
import Nav4 from "./Components/Navs/Nav4";
import Toast from "./Components/Toast/Toast";
import Alert from "./Components/Alerts/Alert";
import Badge from "./Components/Badge/Badge";
import Buttons from "./Components/Buttons/Buttons";
import Avatar from "./Components/Avatar/Avatar";
import Card1 from "./Components/Cards/Card1";
import Input from "./Components/Input/Input";
import Modal from "./Components/Modal/Modal";
import List from "./Components/List/List";
import TextUtilities from "./Components/TextUtilities/TextUtilities";
import Intro from "./Components/Intro";
import DropDownList from "./Components/DropDownLists/DropDownList";
import ResponsiveImage from "./Components/ResponsiveImage/ResponsiveImage";
import Footer from "./Components/Footer/Footer";
import Stars from "./Components/Stars/Stars";
function App() {
  const [showcssComp, setShowCssComp] = useState("welcome");
  const [showNavForDoc,setShowNavForDoc]=useState(false)
  return (
    <div style={showNavForDoc?{height:"100vh",overflow:"hidden"}:{}} >
      {/* style={{height:"100vh",overflowY:"hidden"}} */}
      <NavForDoc showcssComp={showcssComp} setShowCssComp={setShowCssComp} showNavForDoc={showNavForDoc}
      setShowNavForDoc={setShowNavForDoc}
      />
      {showcssComp == "welcome" && (
        <>
          <Intro />
        </>
      )}
      {showcssComp == "nav" && (
        <div className="navComponent" onClick={() => setShowCssComp("nav")}>
          <Nav1 />
          <iframe src="https://www.thiscodeworks.com/embed/605c4cab2476f700148cf8c8" style={{ width: "60%", height: "27rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>

          <div className="test" style={{ marginTop: "22px" }}></div>
          <Nav2 />
          <div className="test" style={{ marginTop: "22px" }}></div>
          <iframe src="https://www.thiscodeworks.com/embed/605c4d0c2476f700148cf8c9" style={{ width: "60%", height: "18rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
          <div className="test" style={{ marginTop: "22px" }}></div>
          <Nav3 />
          <div className="test" style={{ marginTop: "22px" }}></div>

          <iframe src="https://www.thiscodeworks.com/embed/605c4d662476f700148cf8ca" style={{ width: "60%", height: "15rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>

          <div className="test" style={{ marginTop: "12px" }}></div>
          <Nav4 />
          <div className="test" style={{ marginTop: "12px" }}></div>
          <iframe src="https://www.thiscodeworks.com/embed/605c4daa2476f700148cf8cb" style={{ width: "60%", height: "15rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
        </div>
      )}

      {showcssComp == "toast" && (
        <div className="toastss">
          <div className="test" style={{ marginTop: "12px" }}></div>
          <Toast />
          <div className="test" style={{ marginTop: "12px" }}></div>
          <iframe src="https://www.thiscodeworks.com/embed/605c4b192476f700148cf8c4" style={{ width: "60%", height: "32rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
        </div>
      )}

      {showcssComp == "alert" && (
        <div className="alertss">
          <div className="test" style={{ marginTop: "12px" }}></div>
          <Alert />
          <div className="test" style={{ marginTop: "12px" }}></div>
          <iframe src="https://www.thiscodeworks.com/embed/605c3d922476f700148cf8b0"style={{ width: "55%", height: "23rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>
        </div>
      )}

      {showcssComp == "badge" && (
        <div className="badgees">
          <div className="test" style={{ marginTop: "12px" }}></div>
          <Badge />
        </div>
      )}

      {showcssComp == "buttons" && (
        <div className="buttonss">
          <div className="test" style={{ marginTop: "12px" }}></div>
          <Buttons />
          <div className="test" style={{ marginTop: "12px" }}></div>
          <iframe src="https://www.thiscodeworks.com/embed/605c41b22476f700148cf8b4" style={{ width: "55%", height: "9rem", display: "block", margin: "1rem auto", border: "none", minWidth: "21rem" }}></iframe>
        </div>
      )}

      {showcssComp === "avatar" && (
        <div className="avtarrs">
          <div className="test" style={{ marginTop: "12px" }}></div>
          <Avatar />

          <div className="test" style={{ marginTop: "12px" }}></div>
        </div>
      )}
      {showcssComp == "cards" && (
        <div className="cardss">
          <Card1 />
        </div>
      )}

      {showcssComp == "input" && (
        <div className="inputss">
          <Input />
        </div>
      )}

      {showcssComp == "modal" && (
        <div className="modaal">
          <Modal />
        </div>
      )}

      {showcssComp == "list" && (
        <div className="listss">
          <List />
        </div>
      )}

      {showcssComp == "textutility" && (
        <div className="textutilitiess">
          <h3>TextUtilities</h3>
          <TextUtilities />
        </div>
      )}
      {showcssComp == "DropDownList" && (
        <div className="DropDownList">
          <DropDownList />
          <div className="test" style={{ marginTop: "12px" }}></div>
          <iframe src="https://www.thiscodeworks.com/embed/605c4bed2476f700148cf8c6" style={{ width: "60%", height: "16rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
        </div>
      )}

      {showcssComp == "ResponsiveImage" && (
        <div className="ResponsiveImage">
          <ResponsiveImage />
        </div>
      )}
      {showcssComp == "footer" && (
        <div className="ResponsiveImage">
          <Footer />
        </div>)}
    
      {showcssComp == "stars" && (
        <div >
          <Stars />
        </div>
      )}
    </div>
  );
}

export default App;
