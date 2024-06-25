import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  const { id, image, name, description, price, averageRating, categories } =
    product;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="relative">
        <Link to={`/product/${id}`} className="block">
          <img
            className="h-48 w-full object-cover"
            src={image}
            alt={`${name} image`}
          />
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white py-2 px-4 text-center">
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
        </Link>
      </div>
      <div className="p-8">
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-900">{price.toFixed(2)} BDT</div>
          <div className="text-gray-600">{averageRating.toFixed(1)} / 5.0</div>
        </div>
        <div className="mt-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
