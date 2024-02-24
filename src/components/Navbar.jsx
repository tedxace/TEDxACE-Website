import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TEDxLogo from "../assets/TEDLogo.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSpeakerData } from "../Context/ContextProvider";
import { cn } from "../lib/utils";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isPreviousEventPage, setIsPreviousEventPage] = useState(false);
  const { isPreviousEventActive } = useSpeakerData();

  function onWindowScroll() {
    if (window.scrollY > 0 && !fixed) {
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
  const onAboutButtonClick = () => {
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
  const onTeamButtonClick = () => {
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
  const onSponsorButtonClick = () => {
    if (!isHomePage) {
      navigate("/#sponsors");
    }
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onEventButtonClick = () => {
    setIsPreviousEventPage(true);
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };
  const onBackButtonClick = () => {
    setIsPreviousEventPage(false);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
      setIsPreviousEventPage(false);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <header
      className={cn(
        "flex items-center justify-between px-10 fixed md:relative md:px-16 transition-all duration-500  top-0 w-full z-[1000] md: py-6 bg-tedx-brown",
        fixed ? " md:fixed scale-100" : "scale-105 relative "
      )}
    >
      <section
        className={cn(
          "fixed top-[9vh] left-0 w-full transition-all duration-500 bg-tedx-brown",
          isOpen ? "h-[35vh] z-[1000]" : "h-0 z-0"
        )}
      ></section>
      <div
        className={cn(
          "flex justify-start md:gap-0 gap-2 flex-grow md:flex-grow-0 items-center w-full md:w-auto h-full"
          // isMobile ? " gap-2" : "gap-0"
        )}
      >
        {/* {isMobile ? ( */}
        <div
          className="md:hidden grid place-items-center"
          onClick={handleMenuClick}
        >
          {isOpen ? (
            <FontAwesomeIcon className="text-white w-5 h-5" icon={faClose} />
          ) : (
            <FontAwesomeIcon className="text-white w-5 h-5" icon={faBars} />
          )}
        </div>
        {/* ) : null} */}
        <Link to="/" className="">
          <img
            className="lg:h-full lg:w-full md:h-[80%] sm:w-[80%] h-[100%] w-full sm:scale-100 scale-125 mx-2"
            src={TEDxLogo}
            alt="TEDx Logo"
          />
        </Link>
      </div>

      <nav className="md:place-items-center  md:grid h-full w-full">
        <ul
          className={cn(
            "md:static absolute top-[10vh] left-[7%] list-none flex flex-col md:flex-row justify-center text-sm lg:text-base md:items-center gap-6 bg-clip-text text-tedx-heading uppercase z-[2000] font-bold  transition-opacity ",
            isOpen
              ? "opacity-100 pointer-events-auto delay-75 duration-500"
              : "opacity-0 pointer-events-none duration-75 delay-150 md:opacity-100 md:pointer-events-auto"
          )}
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
              href="#sponsors"
              onClick={onSponsorButtonClick}
            >
              Sponsors
            </a>
          </li>
          {isPreviousEventActive ? (
            <li>
              {isPreviousEventPage ? (
                <Link
                  className="hover:text-tedx-white duration-100"
                  onClick={onBackButtonClick}
                  to={"/"}
                >
                  Go Back
                </Link>
              ) : (
                <Link
                  className="hover:text-tedx-white duration-100"
                  to="/previous-events"
                  onClick={onEventButtonClick}
                >
                  Previous Event
                </Link>
              )}
            </li>
          ) : null}
        </ul>
      </nav>
      <ul>
        <li>
          <span>
            <button className="button group relative flex items-center justify-center overflow-hidden text-center transform skew-x-0 w-[100px] h-[40px]   md:w-[144px] md:h-[56px] border-[#650000] bg-tedx-red-medium border border-spacing-3 md:mx-3 border-collapse  py-2 px-3 rounded-md ">
              <span className="button_text relative uppercase md:text-sm text-[10px] font-black tracking-tighter group-hover:text-tedx-brown transition text-tedx-heading z-10 ">
                Book Tickets
              </span>
              <span className="absolute inset-0 bg-tedx-heading group-hover:w-full w-0 transition-all group-hover:animate-skew animate-skewOut"></span>
            </button>
          </span>
        </li>
        <li></li>
      </ul>
    </header>
  );
};

export default Navbar;
