import { useRef, useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

import MedicineContext from '../../context/MedicineContext';
import CustomModal from '../UI/CustomModal';

export default function AddMedicineForm() {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();

  const [showModal, setShowModal] = useState(null);

  const medicineCtx = useContext(MedicineContext);

  function handleFormSubmit(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredPrice = priceRef.current.value;

    if (!enteredName || !enteredDesc || !enteredPrice) {
      setShowModal({
        title: 'Error',
        body: 'Input fields should not be empty.',
      });
      return;
    }

    const newMedicine = {
      id: Date.now(),
      name: enteredName,
      description: enteredDesc,
      price: Number(enteredPrice),
    };

    axios
      .post(
        'https://test-api-cd004-default-rtdb.firebaseio.com/medicines.json',
        newMedicine
      )
      .then((response) => {
        medicineCtx.onAddMedicine(newMedicine);

        setShowModal({
          title: 'Success',
          body: 'Medicine is added sccessfully.',
        });

        nameRef.current.value = '';
        descRef.current.value = '';
        priceRef.current.value = '';
      })
      .catch((error) => {
        console.log(error);
        setShowModal({
          title: 'Error',
          body: 'Somthing went wrong, try again...',
        });
      });
  }

  return (
    <Container className="mt-5">
      {showModal && (
        <CustomModal
          show={showModal}
          title={showModal.title}
          body={showModal.body}
          onClick={() => setShowModal(!showModal)}
        />
      )}
      <h3>Add New Medicine</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" ref={nameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            ref={descRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            ref={priceRef}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
}
