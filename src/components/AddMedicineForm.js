import { Form, Button, Container } from 'react-bootstrap';

export default function AddMedicineForm() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container className="mt-5">
      <h3>Add New Medicine</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
