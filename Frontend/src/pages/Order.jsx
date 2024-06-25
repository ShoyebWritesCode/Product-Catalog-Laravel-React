import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShippingPopup from '../components/ShippingPopup';

// Dummy data
const dummyOrder = {
  id: '12345',
  products: [
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: 1150,
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: 600,
    },
  ],
};

const Order = () => {
  const [showShippingPopup, setShowShippingPopup] = useState(false);

  const handleShippingPopupClose = () => {
    setShowShippingPopup(false);
  };

  const handleShippingPopupNext = () => {
    setShowShippingPopup(false);
    // Redirect or handle the next step here
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-6 rounded-lg text-center relative shadow-md w-full max-w-6xl">
        {/* Order ID */}
        <h2 className="text-lg font-semibold mb-4">
          Order ID: {dummyOrder.id}
        </h2>
        {/* Products Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Product ID</th>
              <th className="border-b p-2">Image</th>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrder.products.map((product) => (
              <tr key={product.id}>
                <td className="border-b p-2">{product.id}</td>
                <td className="border-b p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 object-cover"
                  />
                </td>
                <td className="border-b p-2">{product.name}</td>
                <td className="border-b p-2">{product.price.toFixed(2)} BDT</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-start mt-4 text-red-950">
          Total: 1750 BDT
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowShippingPopup(true)}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Add Shipping Details
          </button>
        </div>
      </div>
      <ShippingPopup
        isOpen={showShippingPopup}
        onClose={handleShippingPopupClose}
        onNext={handleShippingPopupNext}
      />
    </div>
  );
};

export default Order;
