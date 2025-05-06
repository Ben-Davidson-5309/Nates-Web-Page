import React from "react";
import { Link } from "react-router-dom";

export const HomeCard =({ title, description, linkText, linkUrl }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={linkUrl} className="btn btn-primary">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

