import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home'; // Cleaner import
import RatesAndDates from './pages/rates-and-dates'; // Updated import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ratesanddates" element={<RatesAndDates />} />
        <Route path="/rates-and-dates" element={<RatesAndDates />} />
      </Routes>
    </Router>
  );
}

export default App;