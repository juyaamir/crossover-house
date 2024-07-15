import React from "react";

const Contact = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold">Get In Touch</h1>
      <div className="flex justify-center bg-blue-800 mt-8">
        <div className="w-full md:w-1/2 p-4">
          <img
            className="w-full h-auto object-cover"
            src="src/assets/map.png"
            alt="map"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <form className="space-y-5 w-full md:w-2/3 mx-auto">
            <div className="bg-white mt-12 ">
              <label className="block text-left" htmlFor="name">
                <input
                  className="w-full p-2"
                  type="text"
                  id="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="bg-white ">
              <label className="block text-left" htmlFor="name">
                <input
                  className="w-full p-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="bg-white ">
              <label className="block text-left" htmlFor="name">
                <input
                  className="w-full p-2"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
              </label>
            </div>
            <div className="bg-white">
              <textarea
                className="w-full p-2"
                id="message"
                name="message"
                placeholder="Message"
                style={{ height: "145px" }}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                className="bg-orange-400 text-white px-12 py-2 rounded hover:bg-orange-500 hover:scale-105 rounded-full uppercase"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
