import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  // Define product data directly within the component
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 1150,
      averageRating: 4.5,
      categories: ['Category A', 'Category B'],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 600,
      averageRating: 3.8,
      categories: ['Category B', 'Category C'],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 350,
      averageRating: 5.0,
      categories: ['Category A', 'Category C'],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 3',
      price: 825,
      averageRating: 5.0,
      categories: ['Category A', 'Category C'],
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Products</h1>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
