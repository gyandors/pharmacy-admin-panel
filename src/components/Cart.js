import { useContext } from 'react';
import { Table } from 'react-bootstrap';

import CartContext from '../context/CartContext';
import CustomModal from './UI/CustomModal';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  let body = <h4 className="text-center">Cart is empty</h4>;

  if (cartCtx.medicines.length > 0) {
    body = (
      <Table striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.medicines.map((m, i) => {
            return (
              <tr>
                <td>{i}</td>
                <td>
                  {m.name} x{0}
                </td>
                <td>{m.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return (
    <CustomModal
      show={props.showCart}
      onClick={props.onClick}
      title="Cart"
      body={body}
    />
  );
}
