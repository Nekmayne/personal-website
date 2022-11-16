import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
