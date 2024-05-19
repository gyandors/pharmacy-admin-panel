import { createContext, useState } from 'react';

const CartContext = createContext();
export default CartContext;

export function CartContextProvider({ children }) {
  const [medicines, setMedicines] = useState([]);

  function handleAddMedicine(medicine) {
    setMedicines((prev) => [...prev, medicine]);
  }

  const cartCtxValue = {
    medicines: medicines,
    onAddMedicine: handleAddMedicine,
  };

  return (
    <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
  );
}
