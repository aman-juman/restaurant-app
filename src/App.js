import React from "react";
import { Header } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    // <AnimatePresence>
    <div className="w-screen h-auto flex flex-col">
      <Header />

      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
    // </AnimatePresence>
  );
};

export default App;
