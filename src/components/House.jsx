const House = () => {
  return (
    <div className="mx-12" >
        <h1 className="text-2xl ml-4 Sofia font-bold">TEASER</h1>
        <nav className="mr-4">
            <ul className="flex justify-end gap-10">
                <li><a href="">Login</a></li>
                <li><a href="">Sign up</a></li>
            </ul>
        </nav>
        <div className="flex flex-wrap justify-between">
            <div className="w-1/3">
             <h1 className="font-bold text-3xl"> 
                <span className="block  text-blue-800 ">Modern</span>
                <span className="block text-blue-600">Apartment</span>
                <span className="block text-blue-600">House</span>
              </h1>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat eius magni </p>
                <p className="my-8">
                    <button className="px-2 border border-gray-700 py-1 rounded-xl  text-blue-400">READ MORE
                    </button>
                </p>
            </div>
            <div className="w-2/3 ">
               { <img src="src/assets/home.jpg" alt="home" className="w-full h-80"/> }
            </div>

        </div>
        <div className="p-2 bg-white mr-12">
            <form className="flex flex-wrap gap-4 justify-center my-2">
                <input type="search" placeholder="Search Your Location" className="border border-gray-400 px-4"/>
                <input type="search" placeholder="Location" className="border border-gray-400 px-4" />
                <button type='button' className="bg-orange-400 text-white px-6 py-1">Search</button>
            </form>
        </div>
    </div>
  )
}

export default House