import House from "./components/House";
import About from "./components/About";
import Sale from "./components/Sale";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Price from './components/Price'
import "./App.css";
import WhyChooseUs from './components/WhyChooseUs';
import VeryGoodDeal from './components/VeryGoodDeal';

function App() {
  return (
    <div className="bg-gray-100">
      <House />
      <About />
      <Sale />
      <Contact />
      <Footer />
      <Price />
      <VeryGoodDeal />
      <WhyChooseUs />

     

    </div>
  );
}

export default App;
