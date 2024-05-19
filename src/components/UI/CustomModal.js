import { Modal, Button } from 'react-bootstrap';

export default function CustomModal(props) {
  return (
    <Modal show={props.show} onHide={props.onClick}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '20rem', overflow: 'auto' }}>
        {props.body}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
