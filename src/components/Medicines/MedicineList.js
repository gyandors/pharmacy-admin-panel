import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import CartContext from '../../context/CartContext';

export default function MedicineList(props) {
  const cartCtx = useContext(CartContext);
  function handleAddToCart() {
    cartCtx.onAddMedicine({
      id: Date.now(),
      name: props.name,
      price: props.price,
    });
  }
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>₹ {props.price}.00</td>
      <td>
        <Form>
          <Form.Control
            size="sm"
            type="number"
            defaultValue="1"
            min="1"
            max="10"
          />
          <Button
            className="btn-sm mt-2"
            variant="dark"
            type="button"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Form>
      </td>
    </tr>
  );
}
