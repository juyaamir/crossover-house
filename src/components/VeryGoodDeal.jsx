import React from "react";

const VeryGoodDeal = () => {
    return(
        <section className="text-black flex flex-col md:flex-row items-center justify-center md:px-[20%] sm:px-4 my-16 gap-2">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-extrabold mb-4">Very Good Deal For Houses</h2>
                <p className="mb-4">
                    There are many variarions of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button className="btn btn-sm btn-outline text-primary font-light text-sm rounded-3xl rounded px-6 mt-2">Get A Quote</button>
            </div>
            <div className="md:w-1/2 p-4 flex flex-col items-center md:flex-row md:space-x-4">
                <img src="/img/pexels-scottwebb-430216.jpg" alt="House 1" className="w-full md:w-1/3 mb-4 md:mb-0" />
                <img src="/img/pexels-chaitaastic-1918291.jpg" alt="House 2" className="w-full md:w-2/3" />
            </div>
        </section>
    )
}

export default VeryGoodDeal;