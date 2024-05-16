import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Admin Panel
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/medicines">
            Medicines
          </Nav.Link>
          <Nav.Link as={Link} to="/add-medicine">
            Add Medicine
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
