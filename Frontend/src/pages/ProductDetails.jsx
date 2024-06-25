import { useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Dummy product data
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
    // Add more products as needed
  ];

  const [newReview, setNewReview] = useState({
    username: '',
    rating: 0,
    comment: '',
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();

    // Simulate submitting the review (replace with your backend logic)
    console.log('New review submitted:', newReview);

    // Reset the form after submission
    setNewReview({ username: '', rating: 0, comment: '' });
  };

  const handleRatingChange = (event) => {
    setNewReview({ ...newReview, rating: parseInt(event.target.value) });
  };

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { name, description, price, averageRating, categories, image } =
    product;

  // Dummy reviews data
  const reviews = [
    {
      username: 'Anonymous',
      rating: 4.5,
      comment: 'This product is great! I highly recommend it.',
      datePosted: new Date('2024-06-20'), // Adjust date as needed
    },
    {
      username: 'Abu Shoyeb',
      rating: 3.8,
      comment: 'The product is good, but it could be better.',
      datePosted: new Date('2024-06-18'), // Adjust date as needed
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Product Information Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="p-8 md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {name}
            </h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-gray-900 mb-2">${price.toFixed(2)}</div>
            <div className="text-yellow-400 mb-4">
              {[...Array(Math.round(averageRating))].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current inline-block"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14.155l-4.096 2.197.785-4.572L2.3 7.648l4.573-.665L10 2l2.126 4.983 4.573.665-3.39 3.132.785 4.572z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                {averageRating.toFixed(1)} / 5.0
              </span>
            </div>
            <div className="mb-4">
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
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              className="h-48 w-3/4 object-contain md:object-cover"
              src={image}
              alt={`${name} image`}
            />
          </div>
        </div>
      </div>

      {/* Reviews Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 px-8 pt-4">
          Existing Reviews
        </h3>
        {reviews.length === 0 ? (
          <p className="text-gray-600 px-8 pb-4">
            There are no reviews for this product yet.
          </p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-200 pb-2 px-8"
            >
              <div className="flex items-center mb-1">
                <span className="text-gray-700 font-semibold mr-2">
                  {review.username}
                </span>
                <div className="flex items-center">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-400 mr-1"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 14.155l-4.096 2.197.785-4.572L2.3 7.648l4.573-.665L10 2l2.126 4.983 4.573.665-3.39 3.132.785 4.572z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <span className="text-gray-600 text-sm ml-1">
                    {review.rating.toFixed(1)} / 5.0
                  </span>
                </div>
              </div>
              <p className="text-gray-600 px-8">{review.comment}</p>
              <span className="text-gray-600 text-sm px-8">
                Posted on: {review.datePosted.toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 px-8 py-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Write a Review
        </h3>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-semibold mb-2"
            >
              Rating:
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <label key={ratingValue} className="mr-3">
                  <input
                    type="radio"
                    id={`rating-${ratingValue}`}
                    name="rating"
                    value={ratingValue}
                    checked={newReview.rating === ratingValue}
                    onChange={handleRatingChange}
                    className="mr-1"
                  />
                  {ratingValue}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-semibold mb-2"
            >
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
