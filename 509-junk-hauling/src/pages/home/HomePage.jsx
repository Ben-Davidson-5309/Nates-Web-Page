import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center mb-4">Hauling Junk In 509</h1>
      </div>
      <div className="row">
        {/* Rates and Dates Section */}
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Rates and Dates</h5>
              <p className="card-text">Check out our pricing and availability.</p>
              <Link to="/ratesanddates" className="btn btn-primary">
                View Rates and Dates
              </Link>
            </div>
          </div>
        </div>

        {/* Rent a Trailer Section */}
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Rent a Trailer</h5>
              <p className="card-text">Need a trailer? Rent one from us today!</p>
              <Link to="/rentatrailer" className="btn btn-primary">
                Rent a Trailer
              </Link>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">Learn more about our company and mission.</p>
              <Link to="/about" className="btn btn-primary">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">Get in touch with us for more information.</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
