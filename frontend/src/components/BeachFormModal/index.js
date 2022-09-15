import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BeachForm from './BeachForm';


function CreateBeachModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="beachesLink" onClick={() => setShowModal(true)}>Create Beach</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BeachForm trigger={showModal} setTrigger={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateBeachModal;
