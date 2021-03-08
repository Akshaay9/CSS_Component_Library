import React from 'react'
import Nav1 from './Components/Navs/Nav1'
import Nav2 from './Components/Navs/Nav2'
import "./App.css"
import Nav3 from './Components/Navs/Nav3'
import Nav4 from './Components/Navs/Nav4'
import Toast from "./Components/Toast/Toast"
import Alert from "./Components/Alerts/Alert"
import Badge from './Components/Badge/Badge'
import Buttons from './Components/Buttons/Buttons'
function App() {
  return (
    <div>
    <h3>Nav</h3>
      <Nav1 />
      <Nav2 />
      <div className="test" style={{marginTop:"12px"}}></div>
      <Nav3 />
      <div className="test" style={{ marginTop: "12px" }}></div>
      <Nav4 />
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "18px" }} className="line test"></div>
      <h3>Toast</h3>
      <Toast/>
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "18px" }} className="line test"></div>
      <h3>Alerts</h3>
      <Alert />
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "18px" }} className="line test"></div>
      <h3>Badge</h3>
      <Badge />
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "18px" }} className="line test"></div>
      <h3>Buttons</h3>
      <Buttons/>
    </div>
  )
}

export default App
