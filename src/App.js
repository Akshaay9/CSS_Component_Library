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
import Avatar from './Components/Avatar/Avatar'
import Card1 from './Components/Cards/Card1'
import Input from './Components/Input/Input'
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
      <Buttons />
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "18px" }} className="line test"></div>
      <h3>Avatar</h3>
      <Avatar />
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "18px" }} className="line test"></div>
      <h3>Cards</h3>
      <Card1 />
      <div style={{ width: "100%", height: "0.7vh", backgroundColor: "black", marginTop: "30px" }} className="line test"></div>
      <h3>Input</h3>
      <Input/>
    </div>
  )
}

export default App
