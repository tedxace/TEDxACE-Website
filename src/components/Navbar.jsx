import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TEDxLogo from "../assets/TEDLogo.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../lib/utils";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  const [isHomePage, setIsHomePage] = useState(true);

  const { isMobile } = useMediaQuery();

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
      window.scrollTo(0, 0);
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
    window.scrollTo(0, 0);
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
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <>
      <div
        className={cn(
          "bg-transparent",
          fixed && !isMobile ? "h-[10svh]" : "h-0"
        )}
      ></div>
      <header
        className={cn(
          "flex items-center justify-between px-10 fixed md:relative md:px-24 transition-all duration-500 top-0 w-full z-[1000] py-4 md:py-6 bg-tedx-brown",
          fixed ? "md:fixed scale-100" : "scale-105"
        )}
      >
        <section
          className={cn(
            "fixed top-[8vh] left-0 w-full transition-all duration-500 bg-tedx-brown",
            isOpen ? "h-[50vh] z-[1000] mt-5 pr-5" : "h-0 z-0"
          )}
        ></section>
        <div
          className={cn(
            "flex justify-start lg:gap-1 gap-2 flex-grow md:flex-grow-0 items-center w-full md:w-auto h-full"
          )}
        >
          {/* {isMobile ? ( */}
          <div
            className="lg:hidden grid place-items-center"
            onClick={handleMenuClick}
          >
            {isOpen ? (
              <FontAwesomeIcon className="text-white w-4 h-4" icon={faClose} />
            ) : (
              <FontAwesomeIcon className="text-white w-4 h-4" icon={faBars} />
            )}
          </div>
          {/* ) : null} */}
          <Link to="/" className="">
            <img
              className="h-full min-w-[100px] object-contain"
              src={TEDxLogo}
              alt="TEDx Logo"
            />
          </Link>
        </div>
        <nav className="lg:place-items-center lg:grid h-full w-full">
          <ul
            className={cn(
              "lg:static absolute top-[10vh] left-[7%] list-none flex flex-col  lg:flex-row justify-center text-sm lg:text-base md:items-center gap-6 bg-clip-text text-tedx-heading uppercase z-[2000] font-bold  transition-opacity ",
              isOpen
                ? "opacity-100 pointer-events-auto delay-75 duration-500 py-5"
                : "opacity-0 pointer-events-none duration-75 delay-150 lg:opacity-100  lg:pointer-events-auto",
              isMobile && "pl-4"
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
          </ul>
        </nav>
        <ul>
          <li>
            <span>
              <button className="button group relative flex items-center justify-center overflow-hidden text-center transform skew-x-0 h-full w-full border-[#650000] bg-tedx-red-medium border border-spacing-3 md:mx-3 border-collapse  py-2 px-3 rounded-md ">
                <span className="button_text relative uppercase md:text-sm text-[10px] flex items-center justify-center font-black min-w-[70px] md:min-w-[120px] md:min-h-[30px] group-hover:text-tedx-brown transition text-tedx-heading z-10">
                  Buy Tickets
                </span>
                <span className="absolute inset-0 bg-tedx-heading group-hover:w-full w-0 transition-all group-hover:animate-skew animate-skewOut"></span>
              </button>
            </span>
          </li>
          <li></li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
