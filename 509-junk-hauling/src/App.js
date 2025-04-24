import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import RatesAndDates from "./pages/rates-and-dates";
import RentATrailer from "./pages/rentAtrailer/RentATrailer";

function App() {
  return (
    <div className="app-background"> {/* Wrapper div for background */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ratesanddates" element={<RatesAndDates />} />
          <Route path="/rates-and-dates" element={<RatesAndDates />} />
          <Route path="/rentatrailer" element={<RentATrailer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;