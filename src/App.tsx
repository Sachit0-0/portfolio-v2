import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";

import Fallback from "./pages/Fallback";

import IndexPage from "./IndexPage";
import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";

import "aos/dist/aos.css";
import "./App.css";
import { Contacts } from "./pages/Contacts";
import { CV } from "./pages/CV";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />

            <Route path="*" element={<Fallback />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/cv" element={<CV />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
