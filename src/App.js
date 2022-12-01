import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./styles.css";
import Experience from "./components/Experience";
// import Projects from "./components/Projects";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Main />
        <About />
        <Experience />
        {/*<Projects /> */}
        <Gallery />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
