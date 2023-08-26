import './Modal.css'


function Modal({prompt, cancelModal, confirmModal}) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{prompt}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={cancelModal}>Cancel</button>
          <button className="btn" onClick={confirmModal}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal
