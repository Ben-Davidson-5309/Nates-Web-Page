import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import yaml from "js-yaml";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";  
import Footer from "./components/Footer/Footer"; 
import HomePage from "./pages/home/HomePage";
import RatesAndDates from "./pages/rates-and-dates/RatesAndDates";
import RentATrailer from "./pages/rentAtrailer/RentATrailer";
import AboutPage from "./pages/aboutPage/AboutPage"
import ContactPage from "./pages/contactPage/ContactPage";
import {FormPage} from "./pages/form/FormPage";
import ConfirmationPage from "./pages/confirmation/ConfirmationPage";
import FadedBackground from "./components/BackgroundImage/FadedBackground";
import BookAppointment from "./pages/book-appointment/BookAppointment";
import TermsPage from "./pages/terms/TermsPage";

// Map component names from routes.yaml to actual React components
const componentMap = {
  HomePage,
  RatesAndDates,
  RentATrailer,
  AboutPage,
  ContactPage,
  FormPage,
  ConfirmationPage,
  BookAppointment,
  TermsPage,
};

const App = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch("/routes.yaml");
        if (!response.ok) {
          throw new Error(`Failed to fetch routes.yaml: ${response.statusText}`);
        }
        const yamlText = await response.text();
        const parsedYaml = yaml.load(yamlText);
        setRoutes(parsedYaml.routes);
      } catch (error) {
        console.error("Error loading routes:", error);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <Router>
      <FadedBackground />
      <Header />
      <main>
      <Routes>
        {routes.map((route, index) => {
          const Component = componentMap[route.component];
          if (!Component) {
            console.error(`Component "${route.component}" not found in componentMap.`);
            return null;
          }
          return <Route key={index} path={route.path} element={<Component />} />;
        })}
      </Routes>
    </main>
    <Footer />
    </Router>
  );
};

export default App;