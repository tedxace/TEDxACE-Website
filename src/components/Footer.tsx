import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-black  text-white border-t mx-auto border-gray-800">
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-around md:flex-row flex-col">
        <div className="flex md:w-1/2 justify-around md:justify-between items-center ">
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-red-600 font-bold text-2xl">TED</span>
            <span className="text-xl">x</span>
            <span className="text-xl">ACE</span>
          </Link>
          <nav className="space-y-4">
            <Link to="/about" className="block hover:text-gray-300">
              ABOUT US
            </Link>
           
            <Link to="/teams" className="block hover:text-gray-300">
              TEAMS
            </Link>
            {/* <Link to="#" className="block hover:text-gray-300">
              TICKETS
            </Link> */}
          </nav>
        </div>
        <div className="space-y-4 w-[80%] mt-12 md:mt-0 mx-auto md:mx-0 md:w-auto">
          <h3 className="font-semibold w-[100%]">GET LATEST UPDATE ON TEDxACE</h3>
          <div className="flex space-x-2 md:flex-row flex-col gap-4">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent border border-gray-700 p-3" />
            <button className="bg-purple-600 hover:bg-purple-700 p-4 rounded">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">COPYRIGHTS © 2025 TEDxACE</div>
    </div>
  </footer>
  )
}

export default Footer