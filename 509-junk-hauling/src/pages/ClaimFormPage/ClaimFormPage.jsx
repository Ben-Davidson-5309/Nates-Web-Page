import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ClaimForm from '../../components/ClaimForm/ClaimForm';

const ClaimFormPage = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      document.body.classList.add('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [state.succeeded]);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="claim-form container-lg py-5">
      <header className="text-center mb-5">
        <h1 className="text-success display-4 fw-bold">
          <i className="bi bi-clipboard2-pulse me-2"></i>
          Liability Claim Form
        </h1>
        <p className="lead">509 Junk Hauling LLC - Spokane, WA</p>
      </header>

      <ClaimForm 
        onSubmit={handleSubmit}
        isSubmitting={state.submitting}
      />

      <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">
            <i className="bi bi-check-circle-fill me-2"></i>
            Claim Submitted Successfully!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We've received your claim and will:</p>
          <ol>
            <li>Review within 24 business hours</li>
            <li>Contact you with next steps</li>
            <li>Resolve the issue promptly</li>
          </ol>
          <p className="mb-0">Check your email for confirmation.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Return to Homepage
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ClaimFormPage;
