import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import styles from './Header.module.css';

import Cart from '../Cart';
import CartContext from '../../context/CartContext';

export default function Navigation() {
  const [showCart, setShowCart] = useState(false);

  const cartCtx = useContext(CartContext);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid="sm" className="container-fluid ">
        <Navbar.Brand as={NavLink} to="/">
          Admin Panel
        </Navbar.Brand>
        <Nav className="me-auto align-items-center">
          <Nav.Link as={NavLink} to="/medicines">
            Medicines
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-medicine">
            Add Medicine
          </Nav.Link>
        </Nav>
        <Button variant="light" onClick={() => setShowCart(!showCart)}>
          Cart
          <span
            className={styles['total-cart-items']}
            style={{
              color: '#fff',
              marginLeft: '8px',
              padding: '5px 15px',
              borderRadius: '10px',
              fontSize: '1.2rem',
              background: '#212529',
            }}
          >
            {cartCtx.medicines.length}
          </span>
        </Button>
      </Container>
      {showCart && (
        <Cart showCart={showCart} onClick={() => setShowCart(!showCart)} />
      )}
    </Navbar>
  );
}
