import React from 'react';
import House from './components/House'
import About from './components/About'
import Sale from './components/Sale'
import './App.css'
import WhyChooseUs from './components/WhyChooseUs';
import VeryGoodDeal from './components/VeryGoodDeal';

function App() {


  return (
    <div className='bg-gray-100'>
      <House />
      <About />
      <Sale />
      <VeryGoodDeal />
      <WhyChooseUs />
    </div>
  )
}

export default App
