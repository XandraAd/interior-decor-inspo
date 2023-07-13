/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { ChakraProvider } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/inspiration" element={<Inspiration />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/work" element={<Work />}></Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
