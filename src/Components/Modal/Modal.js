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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur quibusdam temporibus, iste necessitatibus nemo non aliquam quos ducimus officia!</p>
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
          <div className="test" style={{marginTop:"12px"}}></div>
          <div className="modal-basic">
              <div className="modal-basic-title">
              <h3>Modal Title</h3>
              </div>
              <div className="modal-basic-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, repudiandae!
              </div>
              <div className="modal-basic-bottom">
                  <button className="btn btn-info">Save</button>
              </div>
          </div>
    </div>
  );
}

export default Modal;
