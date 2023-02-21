import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TEDxLogo from "../assets/TEDxLogo.svg";


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [fixed, setFixed] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  function onWindowScroll() {
    if (window.scrollY > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  const onHomeButtonClick = () => {
    if (!isHomePage) {
      navigate("/#home");
    }
  };
  const onSpeakerButtonClick = () => {
    if (!isHomePage) {
      navigate("/#speaker");
    }
  };
  const onContactButtonClick = () => {
    if (!isHomePage) {
      navigate("/#contact");
    }
  };
  const onEventButtonClick = () => {
    if (!isHomePage) {
      navigate("/#previous-event");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <header
      className={`flex items-center justify-between px-10 md:px-16 transition-transform duration-500 fixed top-0 w-full z-[1000] md: py-6 ${
        fixed ? "scale-100 bg-[#111111]" : "scale-105 bg-tedx-dark/5"
      }`}
    >
      <Link to="/" className="">
        <img
          className="lg:h-full lg:w-full sm:h-[60%] sm:w-[60%] md:h-[70%] md:w-[70%] h-[50%] w-[50%]"
          src={TEDxLogo}
          alt="TEDx Logo"
        />
      </Link>

      <nav className="hidden pointer-events-none place-items-center md:grid h-full w-full md:visible md:pointer-events-auto">
        <ul className="list-none flex justify-center text-sm lg:text-base  items-center gap-6 bg-clip-text text-transparent font-semibold bg-gradient-to-r from-blue-500 to-pink-500">
          <li>
            <a
              className="hover:text-tedx-white duration-100"
              href="#home"
              onClick={onHomeButtonClick}
            >
              Home
            </a>
          </li>
          <li>
            <Link
              to={"/about"}
              className="hover:text-tedx-white duration-100"
            >
              About
            </Link>
          </li>
          <li>
            <a
              className="hover:text-tedx-white duration-100"
              href="#speakers"
              onClick={onSpeakerButtonClick}
            >
              Speakers
            </a>
          </li>
          <li>
            <Link
              to={"/team"}
              className="hover:text-tedx-white duration-100"
            >
              Team
            </Link>
          </li>
          <li>
            <a
              className="hover:text-tedx-white duration-100"
              href="#contact"
              onClick={onContactButtonClick}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="hover:text-tedx-white duration-100"
              href="#previous-events"
              onClick={onEventButtonClick}
            >
              Previous Event
            </a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <button className="border-r-2 text-sm md:text-base lg:text-md transition-all border-l-2 border-b-0 border-tedx-white px-4 py-2 rounded-lg shadow-tedx-white hover:shadow-lg bg-gradient-to-r duration-500 bg-200% from-tedx-blue/40 to-tedx-pink/40 bg-left hover:bg-right">
            Join
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
