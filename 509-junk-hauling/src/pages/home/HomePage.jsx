import React from "react";
import HomeCard from "../../components/HomeCard";

const routes = [
  { path: "/", component: "HomePage" },
  { path: "/ratesanddates", component: "RatesAndDates" },
  { path: "/rentatrailer", component: "RentATrailer" },
  { path: "/about", component: "AboutPage" },
  { path: "/contact", component: "ContactPage" },
];

export const HomePage = () => {
  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center mb-4">Hauling Junk 509</h1>
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