
import { PiMoneyLight } from "react-icons/pi";
import { LiaUserTieSolid } from "react-icons/lia";
import { ImClipboard } from "react-icons/im";
import { BsHouses } from "react-icons/bs";


const WhyChooseUs = () => {
  const reasons = [
    { icon: <BsHouses  size={40} />, number: "1000+", description: "Years of House" },
    { icon: <ImClipboard size={40} />, number: "2000+", description: "Projects Delivered" },
    { icon: <LiaUserTieSolid  size={40} />, number: "10000+", description: "Satisfied Customers" },
    { icon: <PiMoneyLight size={40} />, number: "1500+", description: "Cheap Rates" },
  ];

  return (
    <section className="bg-primary text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:px-80 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{reason.icon}</div>
              <h4 className="text-xl font-bold mb-2">{reason.number}</h4>
              <p className="font-medium">{reason.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-white text-black font-bold text-sm rounded-3xl py-2 px-10 rounded mt-8">Get A Quote</button>
      </div>
    </section>
  );
};

export default WhyChooseUs;