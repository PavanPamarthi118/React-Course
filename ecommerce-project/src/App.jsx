import { Route, Routes } from 'react-router';
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage';
import { OrdersTracking } from './pages/orders/OrdersTracking';
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  // useEffect(() => {
  //   axios.get("/api/cart-items?expand=product")
  //     .then((response) => {
  //       setCart(response.data);
  //     })
  // }, []);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product")
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();

  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element={<OrdersTracking />} />
    </Routes>
  )
}

export default App
