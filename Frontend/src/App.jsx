import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ProductPage from './pages/ProductPage';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
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
  );
}
export default App;
