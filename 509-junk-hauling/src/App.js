import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import yaml from "js-yaml";
import { useEffect, useState } from "react";

// Import your components
import HomePage from "./pages/home/HomePage";
import RatesAndDates from "./pages/rates-and-dates/RatesAndDates";
import RentATrailer from "./pages/rentAtrailer/RentATrailer";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

// Map component names from routes.yaml to actual React components
const componentMap = {
  HomePage,
  RatesAndDates,
  RentATrailer,
  AboutPage,
  ContactPage,
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
    </Router>
  );
};

export default App;