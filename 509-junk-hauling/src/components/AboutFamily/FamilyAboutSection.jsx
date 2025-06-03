import React from "react";
import "./FamilyAboutSection.css";

const FamilyAboutSection = () => (
  <div className="row align-items-center">
    <div className="col-md-5 text-center mb-4 mb-md-0">
      <img
        src="/NatesFamilyPic.jpeg"
        alt="Our Family"
        className="img-fluid rounded shadow"
        style={{ maxHeight: "350px", objectFit: "cover" }}
      />
    </div>
    <div className="col-md-7">
      <h3
        className="mb-3 fw-bold"
        style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
      >
        Our Story
      </h3>
      <p className="about-highlight">
        Hi! We're the Kennicutt family, proud owners of 509 Junk Hauling. Our
        journey began when we saw a need in our community for reliable,
        friendly, and affordable junk removal. With a passion for helping
        others and a strong work ethic, we started this business to make a
        difference—one haul at a time.
      </p>
      <p className="about-highlight">
        As a family-run company, we treat every customer like a neighbor.
        Whether you're cleaning out your garage, moving, or just need a hand,
        we're here to help. Thank you for supporting our local business!
      </p>
      <p className="fw-bold">— The Kennicutt Family</p>
    </div>
  </div>
);

export default FamilyAboutSection;