import React from 'react';
import { Link } from 'react-router-dom';

const CartPopup = ({ isOpen, onClose, order }) => {
  const handleProceed = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg text-center relative">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            &times;
          </button>
          {/* Order ID */}
          <h2 className="text-lg font-semibold mb-4">Order ID: {order.id}</h2>
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
              {order.products.map((product) => (
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
                  <td className="border-b p-2">
                    {product.price.toFixed(2)} BDT
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Proceed button */}
          <Link to="/order">
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default CartPopup;
