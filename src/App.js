import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Rules from "./pages/rules";
import Prizes from "./pages/prizes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loading from "./components/loading";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prizes" element={<Prizes />} />
      </Routes>

      {!hideFooter && <Footer />}

      {hideFooter && (
        <div className="bg-gray-900 text-white px-4 py-6 lg:px-10 lg:py-8 text-center text-xs lg:text-sm">
          © 2026 YUKTI 1.0. All rights reserved.
        </div>
      )}
    </>
  );
}

export default App;
