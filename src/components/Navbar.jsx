import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TEDxLogo from "../assets/TEDxLogo.svg";

const Navbar = () => {
  const location = useLocation();

  const [fixed, setFixed] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);

  function onWindowScroll() {
    if (window.scrollY > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <header
      className={`grid place-items-center min-h-[6vh] md:min-h-[8vh] grid-cols-3 md:grid-cols-[20%_70%_10%] shadow-md px-3 py-2 md:px-6 md:py-6 w-full z-10 bg-tedx-dark transition-transform duration-500 top-0 fixed ${
        fixed ? "scale-100" : "scale-105"
      }`}
    >
      {isHomePage ? (
        <a href="#home">
          <img src={TEDxLogo} alt="TEDx Logo" className="md:h-full md:w-full" />
        </a>
      ) : (
        <Link to="/">
          <img src={TEDxLogo} alt="TEDx Logo" />
        </Link>
      )}
      <nav className="invisible pointer-events-none place-items-center grid h-full w-full md:visible md:pointer-events-auto">
        <ul className="list-none flex justify-center items-center gap-6 bg-clip-text text-transparent font-semibold bg-gradient-to-r from-blue-500 to-pink-500">
          {/* {isHomePage ? (
            <li>
              <a className="hover:text-tedx-white duration-100" href="#home">
                Home
              </a>
            </li>
          ) : null} */}
          <li>
            <Link
              to={"/about"}
              className="hover:text-tedx-white duration-100"
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <a className="hover:text-tedx-white duration-100" href="#speakers">
              Speakers
            </a>
          </li>
          <li>
            <Link
              to={"/team"}
              className="hover:text-tedx-white duration-100"
              href="#team"
            >
              Team
            </Link>
          </li>
          <li>
            <a className="hover:text-tedx-white duration-100" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              className="hover:text-tedx-white duration-100"
              href="#previous-events"
            >
              Previous Event
            </a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <button className="border-r-2 transition-all border-l-2 border-b-0 border-tedx-white px-4 py-2 rounded-lg shadow-tedx-white hover:shadow-lg bg-gradient-to-r duration-500 bg-200% from-tedx-blue/40 to-tedx-pink/40 bg-left hover:bg-right">
            Join
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
