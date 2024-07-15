import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreenButton,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-12 px-52">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-4">About Apartment</h2>
          <div className="space-y-3">
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-4" />
              Address
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faMobileScreenButton} className="pr-4" />
              +01 1234567890
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="pr-4" />
              demo@gmail.com
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Information</h2>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Useful Link</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the i
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Newsletter</h2>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 mb-4 text-black"
          />
          <button className="bg-accent text-white px-4 py-2  hover:bg-orange-500 hover:scale-105 mb-4">
            Subscribe
          </button>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-white text-[24px] hover:text-orange-300 hover:scale-125"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="text-white text-[24px]  hover:text-orange-300 hover:scale-125"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-white text-[24px]  hover:text-orange-300 hover:scale-125"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-white text-[24px]  hover:text-orange-300 hover:scale-125"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
