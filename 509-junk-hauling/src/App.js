import Header from ".//components/Header/Header";
import Footer from ".//components/Footer/Footer";
import "./App.css";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import RatesAndDates from "./pages/rates-and-dates";
import RentATrailer from "./pages/rentAtrailer/RentATrailer"; // Import the new page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ratesanddates" element={<RatesAndDates />} />
        <Route path="/rates-and-dates" element={<RatesAndDates />} />
        <Route path="/rentatrailer" element={<RentATrailer />} /> {/* New route */}
      </Routes>
      <Footer /> {/* Add Footer component */}
    </Router>
  );
}

export default App;