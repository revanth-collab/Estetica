import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FadedPage from "./components/FadedPage";
import LandingPage from "./components/LandingPage";


import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Step 1: Hide preloader after 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Step 2: Show content after 1s delay (after preloader disappears)
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
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
              transition={{ duration: 1,delay:0.3}}
            >
              <FadedPage />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content (Position Absolute with Inline Styles) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex items-center justify-center h-full w-full app-container"
      >
        <LandingPage />

      </motion.div>
    </div>
  );
}
