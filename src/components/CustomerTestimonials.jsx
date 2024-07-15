import React from "react";


const testimonials = () => {
    return (
        {
            image: "/img/pexels-linkedin-2182970.jpg",
            name: "Majority",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        },
        {
            image: "/img/pexels-cottonbro-3206079.jpg",
            name: "John Doe",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        },
        {
            image: "/img/pexels-olly-774909.jpg",
            name: "Jane Smith",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        }
          
    )
}


const CustomerTestimonials = () => {
    return (
      <section className="text-black py-16 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="carousel w-full border border-solid-black">
            <div id="slide1" className="flex flex-row items-center justify-center carousel-item relative w-full">
                <img src="/img/pexels-cottonbro-3206079.jpg" alt="Majority" className="w-40 px-10" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.</p>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                 </div>
            </div>
            
            <div id="slide2" className="flex flex-row items-center justify-center carousel-item relative w-full">
                <img src="/img/pexels-linkedin-2182970.jpg" alt="Majority" className="w-40 px-10" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.</p>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle bg-primary">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-primary">❯</a>
                 </div>
            </div>

        </div>
      </section>
    );
  };
  
  export default CustomerTestimonials;