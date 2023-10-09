/* eslint-disable react/prop-types */
// import React from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";
function ModalYoutube({ show, setShow, keyTube }) {
  const videoReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  const opts = {
    height: "390",
    width: "465",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Trailer Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube videoId={keyTube} opts={opts} onReady={videoReady} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalYoutube;
