import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MedicineContext = createContext();
export default MedicineContext;

export function MedicineContextProvider({ children }) {
  const [medicines, setMedicines] = useState([]);

  function handleAddMedicine(medicine) {
    setMedicines([...medicines, medicine]);
  }

  const medicineCtxValue = {
    medicines: medicines,
    onAddMedicine: handleAddMedicine,
  };

  useEffect(() => {
    axios
      .get('https://test-api-cd004-default-rtdb.firebaseio.com/medicines.json')
      .then((response) => {
        const receivedData = [];
        for (let res in response.data) {
          receivedData.push({
            id: res,
            name: response.data[res].name,
            description: response.data[res].description,
            price: response.data[res].price,
          });
        }
        setMedicines(receivedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MedicineContext.Provider value={medicineCtxValue}>
      {children}
    </MedicineContext.Provider>
  );
}
