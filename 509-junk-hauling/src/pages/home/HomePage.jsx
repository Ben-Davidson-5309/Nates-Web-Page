import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our Junk Hauling Service</h1>
      <p>We provide the best junk hauling services in town!</p>
      <Link to="/ratesanddates">View Rates and Dates</Link> {/* Add the link */}
      <Link to="/rates-and-dates">View Rates and Dates</Link> {/* Add the link */}
    </div>
  );
};

export default HomePage;