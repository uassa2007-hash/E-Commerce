// import { useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";

import { OrderPage } from "./pages/OdersPage";
import "./App.css";
import { TrackingPage } from "./pages/TrackingPage";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
