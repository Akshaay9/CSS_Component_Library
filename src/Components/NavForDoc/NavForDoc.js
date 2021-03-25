import React,{useState} from 'react'

function NavForDoc({ setShowCssComp, showcssComp }) {
    
    const [showNavForDoc,setShowNavForDoc]=useState(false)
    return (
        <div>
            <div className="navForDoc">
                <div className="responsiveNavForDoc">
                  
                    <i class="fas fa-bars" onClick={()=>setShowNavForDoc(!showNavForDoc)}></i>
                    <h3>Ui World</h3>
                </div>
                <ul  className={showNavForDoc ?"showResponsiveNav":null} >
                    <li onClick={() => { setShowCssComp("welcome");setShowNavForDoc(false)}}>Intro</li>
                    <li onClick={() => { setShowCssComp("avatar"); setShowNavForDoc(false) }}>Avatar</li>
                    <li onClick={()=>{setShowCssComp("nav");setShowNavForDoc(false)}}>Nav</li>
                    <li onClick={()=>{setShowCssComp("footer");setShowNavForDoc(false)}}>Footer</li>
                    <li  onClick={()=>{setShowCssComp("alert");setShowNavForDoc(false)}}>Alert</li>
                    <li  onClick={()=>{setShowCssComp("badge");setShowNavForDoc(false)}}>Badge</li>
                    <li  onClick={()=>{setShowCssComp("buttons");setShowNavForDoc(false)}}>Buttons</li>
                    <li  onClick={()=>{setShowCssComp("cards");setShowNavForDoc(false)}}>Cards</li>
                    <li  onClick={()=>{setShowCssComp("input");setShowNavForDoc(false)}}>Input</li>
                    <li  onClick={()=>{setShowCssComp("list");setShowNavForDoc(false)}}>List</li>
                    <li  onClick={()=>{setShowCssComp("modal");setShowNavForDoc(false)}}>Modal</li>
                    <li  onClick={()=>{setShowCssComp("textutility");setShowNavForDoc(false)}}>TextUtilities</li>
                    <li onClick={() => { setShowCssComp("toast"); setShowNavForDoc(false) }}>Toast</li>
                    <li onClick={() => { setShowCssComp("DropDownList"); setShowNavForDoc(false) }}>Drop Down Links</li>
                    <li  onClick={()=>{setShowCssComp("ResponsiveImage");setShowNavForDoc(false)}}>Responsive Image</li>
                   
                </ul>
            </div>
          
        </div>
    )
}

export default NavForDoc
