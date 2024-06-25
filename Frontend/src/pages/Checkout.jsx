import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  PDFViewer,
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

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

const dummyShippingDetails = {
  city: 'Gazipur',
  address: 'IUT Campus Area, Board Bazar, Gazipur-1704, Bangladesh',
  phone: '01767814400',
};

// Styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  total: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const Checkout = () => {
  const order = dummyOrder;
  const shippingDetails = dummyShippingDetails;
  const pdfRef = useRef(null);

  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    console.log(
      'Checkout clicked with order:',
      order,
      'and shipping details:',
      shippingDetails
    );
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-6 rounded-lg text-center relative shadow-md w-full max-w-6xl">
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
                <td className="border-b p-2">{product.price.toFixed(2)} BDT</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-start mt-4 text-red-950">
          Total:{' '}
          {order.products
            .reduce((total, product) => total + product.price, 0)
            .toFixed(2)}{' '}
          BDT
        </div>
        <div className="mt-6 text-left">
          <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">City:</span>{' '}
              {shippingDetails.city}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span>{' '}
              {shippingDetails.address}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span>{' '}
              {shippingDetails.phone}
            </p>
          </div>
        </div>
        {/* Checkout Button */}
        <div className="flex justify-between mt-6">
          <Link to="/">
            <button
              onClick={handleCheckout}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Checkout
            </button>
          </Link>
          {/* PDF Download Button */}
          <PDFDownloadLink
            document={
              <Document>
                <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text style={styles.heading}>Order Details</Text>
                    <Text style={styles.text}>Order ID: {order.id}</Text>
                    <Text style={styles.subheading}>Products:</Text>
                    {order.products.map((product) => (
                      <View key={product.id} style={styles.section}>
                        <Text style={styles.text}>
                          {product.name} - {product.price.toFixed(2)} BDT
                        </Text>
                      </View>
                    ))}
                    <Text style={styles.total}>
                      Total:{' '}
                      {order.products
                        .reduce((total, product) => total + product.price, 0)
                        .toFixed(2)}{' '}
                      BDT
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text style={styles.heading}>Shipping Details</Text>
                    <Text style={styles.text}>
                      City: {shippingDetails.city}
                    </Text>
                    <Text style={styles.text}>
                      Address: {shippingDetails.address}
                    </Text>
                    <Text style={styles.text}>
                      Phone: {shippingDetails.phone}
                    </Text>
                  </View>
                </Page>
              </Document>
            }
            fileName="order_details.pdf"
            style={{
              textDecoration: 'none',
              marginLeft: '10px',
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                'Loading document...'
              ) : (
                <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
