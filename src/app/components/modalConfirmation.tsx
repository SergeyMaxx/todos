import React from 'react'

const ModalConfirmation = ({modalActive, setModalActive, remove}: ModalProps) => {
  return (
    <div
      className={modalActive ? 'modal modal-active' : 'modal'}
      onClick={() => setModalActive(false)}
    >
      <div
        className={modalActive ? 'confirm confirm-active' : 'confirm'}
        onClick={e => e.stopPropagation()}
      >
        <div className="confirm__question">
          Delete all completed ?
        </div>
        <button className="confirm__delete" onClick={remove}>
          Yes. Delete
        </button>
        <button className="confirm__cancel" onClick={() => setModalActive(false)}>
          Cancel
        </button>
      </div>
    </div>
  )
}

interface ModalProps {
  modalActive: boolean
  setModalActive: (modalActive: boolean) => void
  remove: () => void
}

export default ModalConfirmation