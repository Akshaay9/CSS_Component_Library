import React from "react";

function Badge() {
  return (
    <div >
      <div className="badgeForNav">
        <h1>Example heading</h1> <span className="badgeForH1">New</span>
      </div>
      <div className="test" style={{ marginTop: "12px" }}></div>
      <div className="badgeForNav">
        <h2>Example heading</h2> <span className="badgeForH2">New</span>
      </div>
      <div className="test" style={{ marginTop: "12px" }}></div>
      <div className="badgeForNav">
        <h3>Example heading</h3> <span className="badgeForH3">New</span>
      </div>
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522badgeForNav%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EExample%2520heading%253C%252Fh1%253E%2520%253Cspan%2520className%253D%2522badgeForH1%2522%253ENew%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeForNav%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EExample%2520heading%253C%252Fh2%253E%2520%253Cspan%2520className%253D%2522badgeForH2%2522%253ENew%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeForNav%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EExample%2520heading%253C%252Fh3%253E%2520%253Cspan%2520className%253D%2522badgeForH3%2522%253ENew%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"520px",height:"477px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      
      <div style={{ width: "80%",minWidth:"22rem", margin: "auto", display: "flex", justifyContent: "space-around", alignItems: "center",flexWrap:"wrap" }}>
        
        {/* badges */}
      <div className="badgeContainer1 badge-skyBlue">
        <i class="fas fa-shopping-cart"></i>
        <span>5</span>
      </div>
      <div className="test" style={{ marginTop: "22px" }}></div>
      <div className="badgeContainer2  badge-pink">
        <i class="fas fa-shopping-cart"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge  badge-red">
        <i class="fas fa-envelope-open"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-skyBlue">
        <i class="fas fa-envelope-open"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-pink">
        <i class="fas fa-envelope-open"></i>
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-img badge-pink">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
          alt=""
        />
        <span>1</span>
      </div>
      <div className="test" style={{ marginTop: "18px" }}></div>
      <div className="badge badge-img badge-red">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
          alt=""
        />
        <span>1</span>
        </div>
      </div>
      
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522badgeContainer1%2520badge-skyBlue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E5%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer2%2520%2520badge-pink%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520%2520badge-red%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-envelope-open%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-skyBlue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-envelope-open%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-pink%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-envelope-open%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522test%2522%2520style%253D%257B%257B%2520marginTop%253A%2520%252218px%2522%2520%257D%257D%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-img%2520badge-pink%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252Ff%252Ff4%252FUser_Avatar_2.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2520badge-img%2520badge-red%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E1%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"920px",height:"991px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
  );
}

export default Badge;
