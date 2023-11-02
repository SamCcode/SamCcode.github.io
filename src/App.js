import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Rides from "./routes/Rides";
import Tickets from "./routes/Tickets";
import Events from "./routes/Events";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
