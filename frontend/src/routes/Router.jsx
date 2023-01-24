import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, NewCustomer, NewProduct, CustomerProducts,
} from 'pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-cliente" element={<NewCustomer />} />
        <Route path="/cadastrar-produto" element={<NewProduct />} />
        <Route path="/vinculo-de-produtos" element={<CustomerProducts />} />
      </Routes>
    </BrowserRouter>
  );
}
