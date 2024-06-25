import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ProductPage from './pages/ProductPage';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <ToastContainer />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
