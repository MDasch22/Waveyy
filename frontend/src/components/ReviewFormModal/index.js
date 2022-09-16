import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';


function CreateReviewModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id='writeReviewBttn'>Write a review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm trigger={showModal} setTrigger={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
