import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';
import { MedicineContextProvider } from './context/MedicineContext';
import { CartContextProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <MedicineContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MedicineContextProvider>
  </CartContextProvider>
);
