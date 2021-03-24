import React from "react";

function List() {
  return (
    <div>
      <ul className="list">
        <li className="list-group">lorem lorem</li>
        <li className="list-group">lorem 12 1 lorem</li>
        <li className="list-group">loremlorem</li>
        <li className="list-group">loremlorem</li>
        <li className="list-group">loremlorem</li>
      </ul>
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Lists</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            This one is list, which is stacked with some kind of information, typically you can see this in notification panel of scrolling down the navigations
          </p>
          <p>
            1) First one is normal list which just contains some kind of stack with Hoover effect on it
          </p>
        </div>
      </div>

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%253Cul%2520className%253D%2522list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group%2522%253Elorem%2520lorem%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group%2522%253Elorem%252012%25201%2520lorem%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group%2522%253Eloremlorem%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group%2522%253Eloremlorem%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group%2522%253Eloremlorem%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E"
  style={{width:"520px",height:"400px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>

      <div className="test" style={{ marginTop: "12px" }}></div>
      <ul className="list">
        <li className="list-group-badge">
          <p>lorem lorem</p>
          <div className="badgeContainer1 badge-blue">
            <span>15</span>
          </div>
        </li>
        <li className="list-group-badge">
          {" "}
          <p>lorem 12 1 lorem</p>
          <div className="badgeContainer1 badge-blue">
            <span>2</span>
          </div>
        </li>
        <li className="list-group-badge">
          {" "}
          <p>lorem loremlorem</p>
          <div className="badgeContainer1 badge-blue">
            <span>7</span>
          </div>
        </li>
        <li className="list-group-badge">
          {" "}
          <p>lorem loremlorem</p>
          <div className="badgeContainer1 badge-blue">
            <span>4</span>
          </div>
        </li>
        <li className="list-group-badge">
          {" "}
          <p>lorem loremlorem</p>
          <div className="badgeContainer1 badge-blue">
            <span>7</span>
          </div>
        </li>
      </ul>
      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Lists</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
           This one is slightly different than the first one, it has badge along with the content, normally you can see this in messages
          </p>
        </div>
      </div>
      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%253Cul%2520className%253D%2522list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Elorem%2520lorem%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer1%2520badge-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E15%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Elorem%252012%25201%2520lorem%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer1%2520badge-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E2%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Elorem%2520loremlorem%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer1%2520badge-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E7%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Elorem%2520loremlorem%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer1%2520badge-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E4%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522list-group-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253Elorem%2520loremlorem%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer1%2520badge-blue%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E7%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E"
  style={{width:"620px",height:"990px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>


      <div className="test" style={{ marginTop: "12px" }}></div>
      {/* notification */}
      <ul className="notifiation-list">
        <li className="notifiation-list-li">
          <div className="avatar round-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <div className="notifiaction-list-li-body">
            <h3>Brunch This weekend?</h3>
            <p>
              Lorem ipsum s magni dolore iusto natus sequi quibusdam. Quos
              officiis neque voluptatem ipsum.
            </p>
          </div>
        </li>
        <li className="notifiation-list-li">
          {" "}
          <div className="avatar round-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <div className="notifiaction-list-li-body">
            <h3>Brunch This weekend?</h3>
            <p>
              Lorem ipsum s magni dolore iusto natus sequi quibusdam. Quos
              officiis neque voluptatem ipsum.
            </p>
          </div>
        </li>
        <li className="notifiation-list-li">
          {" "}
          <div className="avatar round-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <div className="notifiaction-list-li-body">
            <h3>Brunch This weekend?</h3>
            <p>
              Lorem ipsum s magni dolore iusto natus sequi quibusdam. Quos
              officiis neque voluptatem ipsum.
            </p>
          </div>
        </li>
        <li className="notifiation-list-li">
          {" "}
          <div className="avatar round-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <div className="notifiaction-list-li-body">
            <h3>Brunch This weekend?</h3>
            <p>
              Lorem ipsum s magni dolore iusto natus sequi quibusdam. Quos
              officiis neque voluptatem ipsum.
            </p>
          </div>
        </li>
        <li className="notifiation-list-li">
          {" "}
          <div className="avatar round-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg"
              alt=""
            />
          </div>
          <div className="notifiaction-list-li-body">
            <h3>Brunch This weekend?</h3>
            <p>
              Lorem ipsum s magni dolore iusto natus sequi quibusdam. Quos
              officiis neque voluptatem ipsum.
            </p>
          </div>
        </li>
      </ul>

      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Lists</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
          This is different and complicated from first two component component, it not only shows the information, but also avatar of the user, heading as well as sub content
          </p>
        </div>
      </div>

      <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28216%2C217%2C218%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=23px&ln=true&fl=1&fm=Fira+Code&fs=13px&lh=181%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%257B%252F*%2520notification%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522notifiation-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522notifiation-list-li%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522notifiaction-list-li-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBrunch%2520This%2520weekend%253F%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520s%2520magni%2520dolore%2520iusto%2520natus%2520sequi%2520quibusdam.%2520Quos%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520officiis%2520neque%2520voluptatem%2520ipsum.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522notifiation-list-li%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522notifiaction-list-li-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBrunch%2520This%2520weekend%253F%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520s%2520magni%2520dolore%2520iusto%2520natus%2520sequi%2520quibusdam.%2520Quos%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520officiis%2520neque%2520voluptatem%2520ipsum.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522notifiation-list-li%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522notifiaction-list-li-body%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBrunch%2520This%2520weekend%253F%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520s%2520magni%2520dolore%2520iusto%2520natus%2520sequi%2520quibusdam.%2520Quos%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520officiis%2520neque%2520voluptatem%2520ipsum.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522notifiation-list-li%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522avatar%2520round-sm%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252F8%252F89%252FChris_Evans_2020_%252528cropped%252529.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520"
  style={{width:"920px",height:"2020px",border:"0",overflow:"hidden",display:"block",margin:"auto"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
  );
}

export default List;
