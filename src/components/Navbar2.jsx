import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import TEDxLogo from "../assets/TEDxLogo.svg";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useSpeakerData } from "../Context/ContextProvider";

const Navbar2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [fixed, setFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  return (
    <>
    <div className="h-28 " />
      <header
        className={`h-28 px-10 md:px-16 transition-all duration-500 fixed top-0 w-full z-[1000] ${
          fixed ? "scale-100 bg-[#111111] " : "scale-105 bg-tedx-dark"
        }`}
      >
        <div className="h-full w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className=" md:hidden" onClick={handleMenuClick}>
              {isOpen ? (
                <FontAwesomeIcon
                  className="text-white w-5 h-5 cursor-pointer"
                  icon={faClose}
                />
              ) : (
                <FontAwesomeIcon
                  className="text-white w-5 h-5 cursor-pointer"
                  icon={faBars}
                />
              )}
            </div>
            <Link to="/" className="">
              <img
                className="lg:h-full lg:w-full md:h-[80%] md:w-[80%] h-[100%] w-[100%]"
                src={TEDxLogo}
                alt="TEDx Logo"
              />
            </Link>
          </div>

          <nav className={``}>
            <ul
              className={`hidden md:flex flex-row bg-[#111111]  items-center gap-6 justify-center bg-clip-text text-transparent z-[2000] font-medium bg-gradient-to-r from-blue-500 to-pink-500 transition-opacity `}
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
                  className="hover:text-tedx-white duration-100 "
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
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://insider.in/tedxace-pieces-of-a-puzzle-mar3-2023/event"
              >
                <button className="button">
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Buy Ticket</span>
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div
        className={`
        transition-all duration-500
        ${
          fixed ? "bg-[#111111]" : "bg-tedx-dark"
        } 
        ${isOpen ? "h-fit top-28" : "z-0 h-fit -top-[100%]"}
        fixed z-[900] pb-8 inset-0 w-full px-11 overflow-hidden `}
      >
        <ul
          className={`flex flex-col gap-6  w-fit bg-clip-text text-transparent font-medium bg-gradient-to-r from-blue-500 to-pink-500 transition-opacity `}
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
              className="hover:text-tedx-white duration-100 "
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
      </div>
    </>
  );
};

export default Navbar2;
