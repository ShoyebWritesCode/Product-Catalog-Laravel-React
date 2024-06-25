import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShippingPopup = ({ isOpen, onClose, onNext }) => {
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission if needed
    onNext(); // Call the onNext function to proceed to the next step
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg relative w-full max-w-md">
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone No.</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            {/* Next button */}
            <div className="flex justify-end">
              <Link to="/checkout">
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                >
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ShippingPopup;
