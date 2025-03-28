import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import FadedPage from "./components/FadedPage";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import ReviewsComponent from "./components/ReviewsComponent";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Example from "./components/Example";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative h-screen bg-black text-white overflow-hidden">
        {/* Preloader Animation */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 flex items-center justify-center bg-black fadedPage"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <FadedPage />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content with Routing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center justify-center h-full w-full app-container"
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<ReviewsComponent />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </motion.div>
      </div>
    </BrowserRouter>
  );
}
