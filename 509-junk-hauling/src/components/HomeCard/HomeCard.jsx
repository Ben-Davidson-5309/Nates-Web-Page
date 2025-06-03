import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css"; // Custom styles

const HomeCard = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="col-md-6 col-lg-6 mb-4 d-flex align-items-stretch">
      <div className="card home-card text-center shadow-sm">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title mb-3">{title}</h5>
            <p className="card-text text-muted">{description}</p>
          </div>
          <Link to={linkUrl} className="btn btn-success mt-4">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
