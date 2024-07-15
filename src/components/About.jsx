

const About = () => {
  return (
    <div className="flex justify-around gap-8 mx-12 py-12">
     
            { <img src="src/assets/inside1.jpg" alt="home" className="h-40"/> }
       
        <div>
             <h1 className="font-bold text-xl py-3 text-blue-800"> About Our Apartment</h1>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat eius magni </p>
                <p className="my-8">
                    <button className="px-2 border border-gray-700 py-1 rounded-xl  text-blue-400">READ MORE
                    </button>
                </p>
            </div>
    </div>
  )
}

export default About