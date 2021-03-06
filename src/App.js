import React from 'react'
import Nav1 from './Components/Navs/Nav1'
import Nav2 from './Components/Navs/Nav2'
import "./App.css"
import Nav3 from './Components/Navs/Nav3'
function App() {
  return (
    <div>
      <h3>Nav's</h3>
      <Nav1 />
      <Nav2 />
      <div className="test" style={{marginTop:"12px"}}></div>
      <Nav3/>
    </div>
  )
}

export default App
