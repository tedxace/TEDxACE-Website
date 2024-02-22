import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TEDxLogo from "../assets/TEDxLogo.svg";
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
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <header
      className={cn(
        "flex items-center justify-between px-10 md:px-16 transition-all duration-500  top-0 w-full z-[1000] md: py-6 ",
        fixed ? " fixed scale-100 bg-[#111111] " : "scale-105 bg-tedx-dark"
      )}
    >
      <section
        className={cn(
          "fixed top-[9vh] left-0 w-full transition-all duration-500 ",
          isOpen ? "h-[35vh] z-[1000]" : "h-0 z-0",
          fixed ? "bg-[#111111]" : "bg-tedx-dark"
        )}
      ></section>
      <div
        className={cn(
          "flex justify-start flex-grow md:flex-grow-0 items-center w-full md:w-auto h-full",
          isMobile ? " gap-2" : "gap-0"
        )}
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
            className="lg:h-full lg:w-full md:h-[80%] md:w-[80%] h-[100%] w-[100%]"
            src={TEDxLogo}
            alt="TEDx Logo"
          />
        </Link>
      </div>

      <nav className="md:place-items-center bg-tedx-dark md:bg-transparent md:grid h-full w-full">
        <ul
          className={cn(
            "md:static absolute top-[10vh] left-[7%] list-none flex flex-col md:flex-row justify-center text-sm lg:text-base md:items-center gap-6 bg-clip-text text-transparent z-[2000] font-medium bg-gradient-to-r from-blue-500 to-pink-500 transition-opacity ",
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
            <button class="button group relative overflow-hidden w-[124px] h-[46px] p-2 bg-[#0f1923]">
              <span class="button_text relative uppercase text-sm font-bold text-white z-10">
                Book Tickets
              </span>
              <span class="absolute inset-0 bg-rose-500 group-hover:inline  hidden animate-skew"></span>
            </button>
          </span>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
