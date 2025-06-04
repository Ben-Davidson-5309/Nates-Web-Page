import React from "react";
import HomeCard from "../../components/HomeCard/HomeCard";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div>
        <h1
          className="text-center mb-2 display-2 fw-bold"
          style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
        >
          509 Junk Hauling
        </h1>
        <h4
          className="text-center mb-4 display-5"
          style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
        >
          You call we Haul
        </h4>
      </div>
      <div className="row">
        <HomeCard
          title="Rates and Dates"
          description="Check out our pricing and availability."
          linkText="View Rates and Dates"
          linkUrl="/ratesanddates"
        />
        <HomeCard
          title="Rent a Trailer"
          description="Need a trailer? Rent one from us today!"
          linkText="Rent a Trailer"
          linkUrl="/rentatrailer"
        />
        <HomeCard
          title="About Us"
          description="Learn more about our company and mission."
          linkText="About Us"
          linkUrl="/about"
        />
        <HomeCard
          title="Contact Us"
          description="Get in touch with us for more information."
          linkText="Contact Us"
          linkUrl="/contact"
        />
      </div>
    </div>
  );
};

export default HomePage;