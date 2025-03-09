// import { Link } from 'react-router'

// const Footer = () => {
//   return (
//     <footer className="bg-black  text-white border-t mx-auto border-gray-800">
//     <div className="container mx-auto px-4 py-12">
//       <div className="flex justify-around md:flex-row flex-col">
//         <div className="flex md:w-1/2 justify-around md:justify-between items-center ">
//           <Link to="/" className="flex items-center space-x-1">
//             <span className="text-red-600 font-bold text-2xl">TED</span>
//             <span className="text-xl">x</span>
//             <span className="text-xl">ACE</span>
//           </Link>
//           <nav className="space-y-4">
//             <Link to="/about" className="block hover:text-gray-300">
//               ABOUT US
//             </Link>
           
//             <Link to="/teams" className="block hover:text-gray-300">
//               TEAMS
//             </Link>
//             {/* <Link to="#" className="block hover:text-gray-300">
//               TICKETS
//             </Link> */}
//           </nav>
//         </div>
//         <div className="space-y-4 w-[80%] mt-12 md:mt-0 mx-auto md:mx-0 md:w-auto">
//           <h3 className="font-semibold w-[100%]">GET LATEST UPDATE ON TEDxACE</h3>
//           <div className="flex space-x-2 md:flex-row flex-col gap-4">
//             <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent border border-gray-700 p-3" />
//             <button className="bg-purple-600 hover:bg-purple-700 p-4 rounded">SUBSCRIBE</button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 text-center text-sm text-gray-500">COPYRIGHTS © 2025 TEDxACE</div>
//     </div>
//   </footer>
//   )
// }

// export default Footer

import { Link } from "react-router"
import { MapPin } from "lucide-react"

function Footer() {

  

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-10 md:px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo and Subscribe */}
          <div className="space-y-6">
            <div className="flex  items-center  h-full">
              <span className="text-3xl md:text-5xl font-bold ">
                <span className="text-red-600">TEDx</span> ACE
              </span>
            </div>

            {/* <div className="space-y-4">
              <p className="text-lg">
                GET LATEST UPDATE on <span className="text-red-600">TEDxACE</span>
              </p>
              <form onSubmit={handleSubscribe} className="flex w-full">
                <input
                  type="email"
                  placeholder="Enter Email..."
                  value={email}
                
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-black border-0 rounded-none p-3 w-auto "
                />
                <button type="submit" className="bg-red-600 hover:bg-red-700  px-4 py-3 text-white rounded-none">
                  SUBSCRIBE
                </button>
              </form>
            </div> */}
          </div>

          {/* Middle Column - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="http://twitter.com/tedxace" className="hover:text-red-600 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/tedxace" className="hover:text-red-600 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/tedxace/" className="hover:text-red-600 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="http://www.youtube.com/@tedxace4216" className="hover:text-red-600 transition-colors">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/tedxace" className="hover:text-red-600 transition-colors">
                    LinkedIn
                  </a>
                </li>
                
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Site map</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-red-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-red-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-red-600 transition-colors">
                    Team
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9379145085763!2d72.8240091252084!3d19.197913882031976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1741451112722!5m2!1sen!2sin" width="600" height="450" title="Atharva College of Engineering" loading="lazy" ></iframe>
            </div>
           
            <div className="absolute bottom-2 left-2 bg-white/80 p-1 rounded flex items-center text-xs text-black">
              <MapPin className="h-3 w-3 mr-1 text-red-600" />
              Atharva college of Engineering
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-400">
          TEDx | Atharva college of engineering
        </div>
      </div>
    </footer>
  )
}


export default Footer