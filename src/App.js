import React,{useState} from 'react'
import NavForDoc from "./Components/NavForDoc/NavForDoc"
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
import Modal from './Components/Modal/Modal'
import List from './Components/List/List'
import TextUtilities from './Components/TextUtilities/TextUtilities'
import Intro from './Components/Intro'
import DropDownList from './Components/DropDownLists/DropDownList'
import ResponsiveImage from './Components/ResponsiveImage/ResponsiveImage'
import Footer from './Components/Footer/Footer'
function App() {
  const[showcssComp,setShowCssComp]=useState("welcome")
  return (
    <div>
      <NavForDoc showcssComp={showcssComp} setShowCssComp={setShowCssComp} />
      {showcssComp == "welcome" &&
        <>
        <Intro />
        </>}
     { showcssComp=="nav" &&
      <div className="navComponent" onClick={()=>setShowCssComp("nav")}>

    
        <Nav1 />
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522nav%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_logo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fstatic.cure.fit%252Fassets%252Fimages%252Fcurefit-v-man.svg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_name%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EGym.Fit%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-pink%2520hr-underline-left%2522%253EGym%2520Centers%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-pink%2520hr-underline-left%2522%253EGyms%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-pink%2520hr-underline-left%2522%253EOnline%2520PT%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-pink%2520hr-underline-left%2522%253EGym%2520Sport%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-pink%2520hr-underline-left%2522%253EPremium%2520Gym%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_login%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-user%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253ELogin%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav_cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"750px",height:"844px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      <div className="test" style={{marginTop:"22px"}}></div>
      <Nav2 />
      <div className="test" style={{marginTop:"22px"}}></div>
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522nav%2520bg-dark%2520%2520%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_name%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EYOGA%2520FUN%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-middle%2522%253EHome%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-middle%2522%253EAbout%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-middle%2522%253EBlog%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-middle%2522%253EClasses%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-middle%2522%253EContact%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_right_single%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fimg.icons8.com%252Fmaterial-sharp%252F24%252F000000%252Fsearch.png%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520placeholder%253D%2522Search%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"750px",height:"644px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      <div className="test" style={{marginTop:"22px"}}></div>
      <Nav3 />
      <div className="test" style={{ marginTop: "22px" }}></div>

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav%2520bg-dark%2520%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_name%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EFit%2520Studio%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522no_right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-right%2522%253EGym%2520Centers%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-right%2522%253EGyms%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-right%2522%253EOnline%2520PT%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-right%2522%253EGym%2520Sport%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-right%2522%253EPremium%2520Gym%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"750px",height:"494px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      
      <div className="test" style={{ marginTop: "12px" }}></div>
      <Nav4 />
      <div className="test" style={{ marginTop: "12px" }}></div>
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav%2520bg-dark%2520nav_mg_auto%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522no_right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-grow%2522%253EGym%2520Centers%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-grow%2522%253EGyms%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-grow%2522%253EOnline%2520PT%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-grow%2522%253EGym%2520Sport%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522hr-underline-grow%2522%253EPremium%2520Gym%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav_name%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EFit%2520Studio%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"750px",height:"544px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        
      </div>
      }

      {  showcssComp == "toast" && 
        <div className="toastss">
        <div className="test" style={{ marginTop: "12px" }}></div>
          <Toast />
          <div className="test" style={{ marginTop: "12px" }}></div>
          <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522toast%2520bg-toast-danger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toastInfo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EError%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520an%2520error%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257B%252F*%2520%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257B%2520marginTop%253A%2520%252212px%2522%2520%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257B%252F*%2520%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toast%2520bg-toast-warning%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toastInfo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Ewarning%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520an%2520warning%2520alert%25E2%2580%2594check%2520it%2520out%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257B%252F*%2520%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257B%2520marginTop%253A%2520%252212px%2522%2520%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257B%252F*%2520%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toast%2520bg-toast-info%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-info-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toastInfo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Einfo%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520an%2520info%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257B%252F*%2520%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257B%2520marginTop%253A%2520%252212px%2522%2520%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%257B%252F*%2520%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toast%2520bg-toast-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522toastInfo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Esuccess%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%2520This%2520is%2520an%2520success%2520alert%2520%25E2%2580%2594%2520check%2520it%2520out%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"620px",height:"1097px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
      }



      { showcssComp == "alert" &&<div className="alertss">
      <div className="test" style={{ marginTop: "12px" }}></div>
      <Alert />
        <div className="test" style={{ marginTop: "12px" }}></div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522alert%2520alert-primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520primary%2520alert%25E2%2580%2594check%2520it%2520out%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257B%2520marginTop%253A%2520%252212px%2522%2520%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-secondary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520secondary%2520alert%25E2%2580%2594check%2520it%2520out%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257BmarginTop%253A%252212px%2522%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520success%2520alert%25E2%2580%2594check%2520it%2520out%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257BmarginTop%253A%252212px%2522%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-danger%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520danger%2520alert%25E2%2580%2594check%2520it%2520out%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257BmarginTop%253A%252212px%2522%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-warning%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520warning%2520alert%25E2%2580%2594check%2520it%2520out%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257BmarginTop%253A%252212px%2522%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-info%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520a%2520info%2520alert%25E2%2580%2594check%2520it%2520out%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"620px",height:"847px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>}
     
     
      {showcssComp == "badge" && 
      <div className="badgees">
              <div className="test" style={{ marginTop: "12px" }}></div>
        <Badge />
        
</div> 
}

      {showcssComp == "buttons" &&
        <div className="buttonss">
        <div className="test" style={{ marginTop: "12px" }}></div>
        <Buttons />
        <div className="test" style={{ marginTop: "12px" }}></div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=17px&ph=17px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cbutton%2520className%253D%2522btn%2520btn-primary%2520btn-primary-hr-outline-out%2522%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-secondary%2520btn-secondary-hr-outline-in%2522%253Esecondary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-success%2520btn-success-hr-scale-out%2522%253Esuccess%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-danger%2520btn-danger-hr-outline-out%2522%253Edanger%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-info%2522%253Einfo%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-light%2520btn-primary%2520btn-light-hr-outline-out%2522%253Elight%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-dark%2522%253Edark%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-link%2520btn-link-hr-outline-in-thick%2522%253Elink%253C%252Fbutton%253E%2520%2520"
  style={{width:"1020px",height:"391px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
       
        
        </div>
      }
      
    
      
     { showcssComp==="avatar" && <div className="avtarrs">
      <div className="test" style={{ marginTop: "12px" }}></div>
        <Avatar />
  
        <div className="test" style={{ marginTop: "12px" }}></div>
      
      </div>}
      {showcssComp == "cards" &&

        <div className="cardss">
          <Card1 />
        </div>
      }


      {showcssComp == "input" &&
        <div className="inputss">
          <Input />
        </div>}
      
      {showcssComp == "modal" &&
        <div className="modaal">
          <Modal />
        </div>}

      {showcssComp == "list" &&
        <div className="listss">
          <List />
        </div>}
      

     
      {showcssComp == "textutility" &&
     
        <div className="textutilitiess">
        <h3>TextUtilities</h3>
        <TextUtilities/>
        </div>}
      {showcssComp == "DropDownList" &&
        <div className="DropDownList">
        <DropDownList />
        <div className="test" style={{ marginTop: "12px" }}></div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%253Cdiv%2520className%253D%2522nav-hoover-further-links%2520mens-dropdown%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522arrow-up%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522box-arrow%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav-hoover-further-links-heading%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EMens%2520Clothing%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522nav-hoover-further-links-li%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E1%29%2520Hoodie%2520and%2520Jackets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E2%29%2520Tanks%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E3%29%2520Track%2520Suits%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E4%29%2520T-shirts%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E5%29%2520Socks%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"550px",height:"650px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>}
      
        {showcssComp == "ResponsiveImage" &&
        <div className="ResponsiveImage">
          <ResponsiveImage/>
        </div>}
        {showcssComp == "footer" &&
        <div className="ResponsiveImage">
          <Footer/>
        </div>}
    
     
    </div>
  )
}

export default App
