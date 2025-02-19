
import { Link, useLocation } from "react-router"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
// Add scroll event listener to change navbar color
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true)
      
    } else {
      setNavbar(false)
    }
  }

  const location = useLocation();

  

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={"fixed w-screen md:w-full  px-5 py-7 z-50 transition duration-200 " + (isMenuOpen ? " bg-black" : "")+ (navbar ? " bg-black/80 backdrop-blur-sm " : "")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-red-600 text-2xl font-extrabold shadow-2xl">
            TED<sup>x</sup>
          </span>
          <span className="text-white text-2xl font-bold">ACE</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-8 text-white">
            <Link to="/" className={location.pathname=='/'?"hover:text-gray-300 transition-colors text-violet-500 font-bold":"hover:text-gray-300 transition-colors "}>
              HOME
            </Link>
            <Link to="/about" className={location.pathname=='/about'?"hover:text-gray-300 transition-colors text-violet-500 font-bold":"hover:text-gray-300 transition-colors "}>
              ABOUT
            </Link>
            {/* <Link to="/speakers" className={location.pathname=='/speakers'?"hover:text-gray-300 transition-colors text-violet-500 font-bold":"hover:text-gray-300 transition-colors "}>
              SPEAKERS
            </Link> */}
            <Link to="/team" className={location.pathname=='/team'?"hover:text-gray-300 transition-colors text-violet-500 font-bold":"hover:text-gray-300 transition-colors "}>
              TEAM
            </Link>
          </div>
          <a
            href="https://forms.gle/rD8xDgdUmwZDeFen6"
            target="_blank"
            className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
          >
            BUY TICKETS
          </a>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-20 left-0 right-0 bottom-0  bg-black bg-opacity-50 backdrop-blur-sm z-30"
                onClick={() => setIsMenuOpen(false)} // Close the menu when clicking outside
              />

              {/* Menu */}
              <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-16 left-0 right-0  h-screen z-30 bg-black p-4 md:hidden"
              >
                <div className="flex flex-col space-y-4 my-10">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 hover:bg-gray-900 rounded transition-colors py-10 px-3"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                  >
                    HOME
                  </Link>
                  <Link
                    to="/about"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-gray-300 transition-colors py-10 px-3"
                  >
                    ABOUT
                  </Link>
                  {/* <Link
                    to="/speakers"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-gray-300 transition-colors py-10 px-3"
                  >
                    SPEAKERS
                  </Link> */}
                  <Link
                    to="/team"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-gray-300 transition-colors py-10 px-3"
                  >
                    TEAM
                  </Link>
                  <a
                    href="https://forms.gle/rD8xDgdUmwZDeFen6"
                    target="_blank"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors text-center mt-10"
                  >
                    BUY TICKETS
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

