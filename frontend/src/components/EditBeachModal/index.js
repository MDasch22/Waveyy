import React, { useState } from 'react';
import { EditModal } from '../../context/EditModal';
import EditForm from './EditForm';


function EditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="createEditBttn" onClick={() => setShowModal(true)}>
        <i class="fas fa-edit"></i>
      </button>
      {showModal && (
        <EditModal onClose={() => setShowModal(false)}>
          <EditForm trigger={showModal} setTrigger={setShowModal}/>
        </EditModal>
      )}
    </>
  );
}

export default EditFormModal;
