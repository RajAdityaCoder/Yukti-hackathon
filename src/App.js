import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Rules from "./pages/rules";
import Prizes from "./pages/prizes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/prizes" element={<Prizes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
