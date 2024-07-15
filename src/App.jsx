import House from "./components/House";
import About from "./components/About";
import Sale from "./components/Sale";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100">
      <House />
      <About />
      <Sale />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
