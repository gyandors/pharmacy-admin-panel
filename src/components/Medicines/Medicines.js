import { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';

import MedicineList from './MedicineList';
import MedicineContext from '../../context/MedicineContext';

export default function Medicines() {
  const medicineCtx = useContext(MedicineContext);

  return (
    <Container className="mt-5">
      <h3>Available Medicines</h3>
      <Table bordered striped responsive>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity </th>
          </tr>
        </thead>
        <tbody>
          {medicineCtx.medicines.map((m) => {
            return (
              <MedicineList
                key={m.id}
                name={m.name}
                description={m.description}
                price={m.price}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
