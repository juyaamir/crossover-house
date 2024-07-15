

const Price = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center">Our Pricing</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

        <div className="flex flex-wrap justify-center gap-4 my-8">
            <div className="w-56">
                <div className="text-white text-center">
                    <h3 className="font-bold text-center bg-blue-900 py-1">01 <span className="block">
                        BASIC</span></h3>
                    <div className="bg-blue-700 py-4">
                        <h3 className="font-bold py-1">$1000.00</h3>
                        <p className="px-10">Lorem ipsum dolic utLorem ipsum dolic ut  Lorem ipsum dolic 
                            ut possimus possimus possimus.</p>
                    </div>
                </div>
                <button className="block mx-auto px-4 border border-blue-900 rounded-xl bg-blue-800 
                text-white my-8 hover:border-none">Buy Now</button>
            </div>

            <div className="w-56">
                <div className="text-white text-center">
                    <h3 className="font-bold text-center bg-blue-900 py-1">02 <span className="block">
                        MEDIAN</span></h3>
                    <div className="bg-yellow-400 py-4">
                        <h3 className="font-bold py-1">$1000.00</h3>
                        <p className="px-10">Lorem ipsum dolic utLorem ipsum dolic ut  Lorem ipsum dolic 
                            ut possimus possimus possimus.</p>
                    </div>
                </div>
                <button className="block mx-auto px-4 border border-blue-900 rounded-xl bg-yellow-400 
                text-white my-8 hover:border-none">Buy Now</button>
            </div>

            <div className="w-56">
                <div className="text-white text-center">
                    <h3 className="font-bold text-center bg-blue-900 py-1">03 <span className="block">
                        PREMIUM</span></h3>
                    <div className="bg-blue-700 py-4">
                        <h3 className="font-bold py-1">$1000.00</h3>
                        <p className="px-10">Lorem ipsum dolic utLorem ipsum dolic ut  Lorem ipsum dolic 
                            ut possimus possimus possimus.</p>
                    </div>
                </div>
                <button className="block mx-auto px-4 border border-blue-900 rounded-xl bg-blue-800 
                text-white my-8 hover:border-none">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Price