// src/App.jsx
import "./App.css";
import Home from "./components/Home"; // Import the Home component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout"; // Import the MainLayout component
import Restaurants from "./components/Restaurants"; // Import the Restaurants component
import RestaurantDetail from "./components/RestaurantDetail"; // Import the RestaurantDetail component
import RestaurantLayout from "./components/RestaurantLayout"; // Import the RestaurantLayout component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Home component as the index route */}
          <Route path="restaurants" element={<RestaurantLayout />}>
            <Route index element={<Restaurants />} />
            <Route path="details/:id" element={<RestaurantDetail />} />
          </Route>
          {/* Optional: Add a 404 Not Found route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;