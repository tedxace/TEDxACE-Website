import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TEDxLogo from "../assets/TEDxLogo.svg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHomePage, setIsHomePage] = useState(true);
  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);
  return (
    <header
      className={`grid place-items-center min-h-[8vh] grid-cols-3 sm:grid-cols-[20%_0.5fr_10%] md:grid-cols-[20%_70%_10%] shadow-md px-6 py-6 w-full transition-transform duration-200 sticky top-0 z-10 bg-tedx-dark`}
    >
      {isHomePage ? (
        <a href="#home">
          <img src={TEDxLogo} alt="TEDx Logo" />
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
            Join Now
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
