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
      <iframe src="https://www.thiscodeworks.com/embed/605c470a2476f700148cf8bf" style={{ width: "40%", height: "8rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>

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
      <iframe src="https://www.thiscodeworks.com/embed/605c47752476f700148cf8c0" style={{ width: "40%", height: "32rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>


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

      <iframe src="https://www.thiscodeworks.com/embed/605c47e32476f700148cf8c1" style={{ width: "60%", height: "46rem", display: "block", margin: "1rem auto", border: "none", minWidth: "23rem" }}></iframe>
    </div>
  );
}

export default List;
