import React from "react";

const VeryGoodDeal = () => {
    return(
        <section className="flex flex-col md:flex-row items-center my-16 gap-4">
            <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4">Very Good Deal For House</h2>
                <p className="mb-4">
                    There are many variarions of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button className="font-bold rounded-3xl py-2 px-10 rounded mt-8">Get a quote</button>
            </div>
            <div className="md:w-1/2 p-4 flex flex-col items-center md:flex-row md:space-x-4">
                <img src="/img/pexels-pixabay-259950.jpg" alt="House 1" className="w-full md:w-1/2 mb-4 md:mb-0 rounded-lg shadow-lg" />
                <img src="/img/pexels-chaitaastic-1918291.jpg" alt="House 2" className="w-full md:w-1/2 rounded-lg shadow-lg" />
            </div>
        </section>
    )
}

export default VeryGoodDeal;