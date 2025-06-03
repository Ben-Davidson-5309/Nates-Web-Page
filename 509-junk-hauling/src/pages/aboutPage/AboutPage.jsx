import FamilyAboutSection from "../../components/AboutFamily/FamilyAboutSection";

const AboutPage = () => {
  return (
    <div className="container py-5">
      <h1
        className="mb-4 text-center display-2 fw-bold"
        style={{ color: "#157347", fontFamily: "'Quicksand', Arial, sans-serif" }}
      >
        About Our Family Business
      </h1>
      <FamilyAboutSection />
    </div>
  );
};

export default AboutPage;
