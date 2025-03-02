
import { Link, useLocation } from "react-router"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import Button from "./Button"

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
    <nav className={"fixed w-screen md:w-full  px-5 py-7 z-50 transition duration-200 "+ (navbar ? " bg-black/80 backdrop-blur-sm " : "") + (isMenuOpen ? " !bg-black" : "bg-transparent") }
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
            <Link to="/" className={location.pathname == '/' ? "hover:text-gray-300 transition-colors text-violet-500 font-bold" : "hover:text-gray-300 transition-colors "}>
              HOME
            </Link>
            <Link to="/about" className={location.pathname == '/about' ? "hover:text-gray-300 transition-colors text-violet-500 font-bold" : "hover:text-gray-300 transition-colors "}>
              ABOUT
            </Link>
            {/* <Link to="/speakers" className={location.pathname=='/speakers'?"hover:text-gray-300 transition-colors text-violet-500 font-bold":"hover:text-gray-300 transition-colors "}>
              SPEAKERS
            </Link> */}
            <Link to="/team" className={location.pathname == '/team' ? "hover:text-gray-300 transition-colors text-violet-500 font-bold" : "hover:text-gray-300 transition-colors "}>
              TEAM
            </Link>
          </div>
          <Button text="Buy Tickets" className={"py-3 bg-[#8940B2] text-white hover:!text-[#8940B2] hover:!bg-[#0E0014] px-5 text-lg "} />
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
                className="absolute top-16 left-0 right-0  h-screen   z-30 bg-black pb-40 px-4 md:hidden"
              >
                <div className="flex flex-col h-full border  my-10">
                  <div className="flex flex-col border flex-1 gap-8">
                    <Link
                      to="/"
                      className="text-white hover:text-gray-300 hover:bg-gray-900 rounded transition-colors  px-3"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      HOME
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-white hover:text-gray-300 transition-colors  px-3"
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
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-white hover:text-gray-300 transition-colors px-3"
                    >
                      TEAM
                    </Link>
                  </div>
                  <Button text="BUY TICKETS" onClickfunc={() => setIsMenuOpen(!isMenuOpen)} className={"px-3 py-2"} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

