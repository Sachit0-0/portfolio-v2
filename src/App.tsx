import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";

import Fallback from "./pages/Fallback";
import IndexPage from "./IndexPage";
import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";
import { pageVariants } from "./transition";

import "aos/dist/aos.css";
import "./App.css";

import { CV } from "./pages/CV";
import Contacts from "./pages/Contacts";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <Layout />
            </motion.div>
          }
        >
          <Route index element={<IndexPage />} />
          <Route path="*" element={<Fallback />} />
          <Route
            path="/contact"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Contacts />
              </motion.div>
            }
          />
          <Route
            path="/cv"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <CV />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,});
  }, []);

  return (
    <Router>
      <UserContextProvider>
        <AnimatedRoutes />
      </UserContextProvider>
    </Router>
  );
}

export default App;
