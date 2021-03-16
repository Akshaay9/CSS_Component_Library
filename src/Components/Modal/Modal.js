import React from "react";

function Modal() {
  return (
    <div>
      <div className="modal">
        <div className="modal-top">
          <div className="modal-top-title-left">
            <h3>Modal Title</h3>
          </div>
          <div className="modal-top-title-right">
            <h3>x</h3>
          </div>
        </div>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            pariatur quibusdam temporibus, iste necessitatibus nemo non aliquam
            quos ducimus officia!
          </p>
        </div>
        <div className="modal-bottom">
          <div className="modal-bottom-left">
            <button className="btn btn-dark">Close</button>
          </div>
          <div className="modal-bottom-right">
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-top%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-top-title-left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EModal%2520Title%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-top-title-right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253Ex%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Animi%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520pariatur%2520quibusdam%2520temporibus%252C%2520iste%2520necessitatibus%2520nemo%2520non%2520aliquam%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520quos%2520ducimus%2520officia%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-bottom%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-bottom-left%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-dark%2522%253EClose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-bottom-right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253ESave%2520Changes%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"720px",height:"740px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>


      <div className="test" style={{ marginTop: "12px" }}></div>
      <div className="modal-basic">
        <div className="modal-basic-title">
          <h3>Modal Title</h3>
        </div>
        <div className="modal-basic-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          repudiandae!
        </div>
        <div className="modal-basic-bottom">
          <button className="btn btn-info">Save</button>
        </div>
      </div>
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520className%253D%2522modal-basic%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-basic-title%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EModal%2520Title%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-basic-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%252C%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Tenetur%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520repudiandae%21%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-basic-bottom%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-info%2522%253ESave%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width:"720px",height:"440px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
  );
}

export default Modal;
