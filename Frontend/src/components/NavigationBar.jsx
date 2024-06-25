import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHistory } from '@fortawesome/free-solid-svg-icons';
import CartPopup from './CartPopup';

const mockOrder = {
  id: 'ORD123456',
  products: [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: 1150,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: 600,
    },
  ],
};

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen); // Toggle isOpen state on username click
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  const handleCartClick = () => {
    setShowPopup(true); // Show popup message on cart icon click
  };

  return (
    <nav className="bg-gray-800 flex justify-between items-center h-16 px-4">
      <Link to="/" className="text-white">
        <div className="text-xl font-bold text-white">
          Simple Product Catalog
        </div>
      </Link>
      <div className="relative">
        <Link className="text-white relative mr-4" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center absolute top-0 right-0 -mt-1 -mr-1 text-xs">
            5
          </span>
        </Link>
        <span className="text-white relative mr-4">
          <FontAwesomeIcon icon={faHistory} size="lg" />
        </span>
        <button
          type="button"
          className="text-white mr-2 focus:outline-none relative"
          onClick={handleDropdownClick}
        >
          Abu Shoyeb
        </button>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
            <button
              className="block text-gray-800 px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
              onClick={() => {
                console.log('View profile clicked');
              }}
            >
              Profile
            </button>
            <button
              className="block text-gray-800 px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}

        <CartPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          order={mockOrder}
        />
      </div>
    </nav>
  );
}

export default NavigationBar;
