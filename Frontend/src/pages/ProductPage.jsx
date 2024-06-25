import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [isLoading, setIsLoading] = useState(false); // State to indicate loading status
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data.products); // Update products state with fetched data
        console.log('Products:', response.data.products);
      } catch (error) {
        setError(error); // Set error state if request fails
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to fetch data only once on mount

  return (
    <div className="bg-gray-100 py-8">
           {' '}
      <div className="max-w-screen-xl mx-auto px-4">
               {' '}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Products</h1> 
             {' '}
        {isLoading && <p className="text-gray-600">Loading products...</p>}     
          {error && <p className="text-red-500">Error: {error.message}</p>}     
         {' '}
        {!isLoading && !error && products.length === 0 && (
          <p className="text-gray-600">No products found.</p>
        )}
               {' '}
        {!isLoading && !error && products.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                       {' '}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
                     {' '}
          </div>
        )}
             {' '}
      </div>
         {' '}
    </div>
  );
};

export default ProductPage;
