import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./styles.css";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Main />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
