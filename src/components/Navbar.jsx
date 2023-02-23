import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TEDxLogo from "../assets/TEDxLogo.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  function onWindowScroll() {
    if (window.scrollY > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const onHomeButtonClick = () => {
    if (!isHomePage) {
      navigate("/#home");
    }
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onSpeakerButtonClick = () => {
    if (!isHomePage) {
      navigate("/#speaker");
    }
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onContactButtonClick = () => {
    if (!isHomePage) {
      navigate("/#contact");
    }
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onEventButtonClick = () => {
    if (!isHomePage) {
      navigate("/#previous-event");
    }
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onAboutButtonClick = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onTeamButtonClick = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <header
      className={`flex items-center justify-between px-10 md:px-16 transition-all duration-500 fixed top-0 w-full z-[1000] md: py-6 ${
        fixed ? "scale-100 bg-[#111111]" : "scale-105 bg-tedx-dark"
      }`}
    >
      <section
        className={`fixed top-[9vh] left-0 w-full transition-all duration-500 ${
          isOpen ? "h-[35vh] z-[1000]" : "h-0 z-0"
        } ${fixed ? "bg-[#111111]" : "bg-tedx-dark"}`}
      ></section>
      <div
        className={`flex justify-start items-center w-full md:w-auto h-full${
          isMobile ? " gap-2" : "gap-0"
        }`}
      >
        {isMobile ? (
          <div className="grid place-items-center" onClick={handleMenuClick}>
            {isOpen ? (
              <FontAwesomeIcon className="text-white w-5 h-5" icon={faClose} />
            ) : (
              <FontAwesomeIcon className="text-white w-5 h-5" icon={faBars} />
            )}
          </div>
        ) : null}
        <Link to="/" className="">
          <img
            className="lg:h-full lg:w-full md:h-[80%] md:w-[80%] h-[70%] w-[70%]"
            src={TEDxLogo}
            alt="TEDx Logo"
          />
        </Link>
      </div>

      <nav className="md:place-items-center bg-tedx-dark md:bg-transparent md:grid h-full w-full">
        <ul
          className={`md:static absolute top-[10vh] left-[7%] list-none flex flex-col md:flex-row justify-center text-sm lg:text-base md:items-center gap-6 bg-clip-text text-transparent z-[2000] font-semibold bg-gradient-to-r from-blue-500 to-pink-500 transition-opacity ${
            isOpen
              ? "opacity-100 pointer-events-auto delay-75 duration-500"
              : "opacity-0 pointer-events-none duration-75 delay-150 md:opacity-100 md:pointer-events-auto"
          }`}
        >
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
              onClick={onAboutButtonClick}
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
              onClick={onTeamButtonClick}
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
          <button className="border-r-2 text-sm md:text-base lg:text-md transition-all border-l-2 border-b-0 border-tedx-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-tedx-white hover:shadow-lg bg-gradient-to-r duration-500 bg-300 from-tedx-blue/40 to-tedx-pink/40 bg-left hover:bg-right">
            Join
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
