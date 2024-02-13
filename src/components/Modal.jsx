import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
    dialog.current.showModal();
  };
  const hideModalHandler = () => {
    setShowModal(false);
    dialog.current.close();
  };
  const dialog = useRef();

  return createPortal(
    <>
      <dialog
        ref={dialog}
        onClick={(e) => {
          if (e.target.className === 'modal') {
            hideModalHandler();
            console.log(e.target);
          }
        }}
        className="modal"
      >
        <div className="modal-content">{children}</div>
      </dialog>
      {/* Button for testing */}
      {/* <button
        onClick={() => {
          showModalHandler();
        }}
        >
        Show Modal
      </button> */}
    </>,
    document.getElementById('modal')
  );
}

export default Modal;
