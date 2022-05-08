import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import '../../../style/Model.css';

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      className='bg-modal'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div>
            <div className="model-img">
                <button onClick={props.onHide}>X</button>
                <h1>COMING <br/> SOON</h1>
            </div>
        </div>
      </Modal.Body>
    </Modal>
    );
};

// onClick={props.onHide}

export default MyVerticallyCenteredModal;
