/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import Contact from "./pages/Contact";
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
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
