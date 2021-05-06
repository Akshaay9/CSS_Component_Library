import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);
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

      <div className="descrip" style={{ margin: "0rem 1rem" }}>
        <div className="heading">
          <h2 style={{ margin: "0rem 1rem" }}> Modal</h2>
          <p style={{ margin: "0.5rem 1rem" }}>
            {" "}
            Modals are basically used when user wants to be notified as well as
            to make user highly about their action, Below you can see two modal
            of almost same design with slightly difference in their design
          </p>

          <p style={{ margin: "0.5rem 1rem" }}>
            1) first one is a modal which contains heading, close icon, content,
            and two buttons, user can click on the save button to to confirm
            their action and you can withdraw from it by clicking on cancel or
            by clicking on the cross icon
          </p>
          <p style={{ margin: "0.5rem 1rem" }}>
            2) Second is simple compared to first one, It just only highlights
            the users about their action
          </p>
        </div>
      </div>

      <iframe
        src="https://www.thiscodeworks.com/embed/605c462b2476f700148cf8bd"
        style={{
          width: "70%",
          height: "23rem",
          display: "block",
          margin: "1rem auto",
          border: "none",
          minWidth: "23rem",
        }}
      ></iframe>

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
        src="https://www.thiscodeworks.com/embed/605c46802476f700148cf8be"
        style={{
          width: "70%",
          height: "18rem",
          display: "block",
          margin: "1rem auto",
          border: "none",
          minWidth: "23rem",
        }}
      ></iframe>
      <button
        className="btn btn-info"
        style={{ display: "block", margin: "auto" }}
        onClick={() => setShowModal(true)}
      >
        Show Modal 3
      </button>
      <div className="test" style={{ marginTop: "12px" }}></div>
      {/* modal 3 */}

      {showModal && (
        <div className="modal-container">
          <div className="modal-cta">
            <div className="modal-heading">
              <h2>
                {" "}
                <span style={{ color: "blue" }}>Fitt</span> Shark
              </h2>
              <img
                src="https://static.cure.fit/assets/images/curefit-v-man.svg"
                alt=""
              />
            </div>
            <div className="modal-bod">
              <p>
                {" "}
                Please{" "}
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "green",
                  }}
                >
                  log in
                </span>{" "}
                to continue
              </p>
              <p>
                You are being redirected to login page in{" "}
                <span style={{ color: "red" }}>{}</span> seconds{" "}
              </p>
            </div>
            <div className="modal-cancel">
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <iframe
        src="https://www.thiscodeworks.com/embed/6093e6ee99a7260014d77eae"
        style={{
          width: "70%",
          height: "32rem",
          display: "block",
          margin: "1rem auto",
          border: "none",
          minWidth: "23rem",
        }}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Modal;
