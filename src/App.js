import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";
import Experience from "./components/Experience";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Main />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
