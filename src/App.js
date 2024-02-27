import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSpeakerData, useSponsorData } from "./Context/ContextProvider";

import Navbar from "./components/Navbar";
import Lenis from "@studio-freight/lenis";
const Contact = lazy(() => import("./components/footer/Contact"));
const Loader = lazy(() => import("./components/Loader"));
const SpeakerContent = lazy(() =>
  import("./components/speakers/SpeakerContent")
);
const Sponsors = lazy(() => import("./components/home/Sponsors"));
const Home = lazy(() => import("./pages/Home"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About"));

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    window.innerWidth > 768 && requestAnimationFrame(raf);
  }, []);

  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  return (
    <div className=" overflow-x-clip transition">
      <Router>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/speaker"
              element={<SpeakerContent speakers={speakers} />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route
              exact
              path="/sponsors"
              element={<Sponsors sponsors={sponsors} />}
            />
            <Route exact path="/previous-events" element={<Home />}></Route>
          </Routes>
          <footer
            className="w-full bg-tedx-dark  h-[100vh] flex items-center justify-center  relative px-10  md:px-24  bg-cover "
            style={{
              backgroundImage: `url(${require("./assets/Background.png")})`,
            }}
          >
            <div className="absolute bg-gradient-to-b to-transparent h-full w-full via-tedx-bg/40 -z-1 from-tedx-bg/100 "></div>
            <Contact />
          </footer>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
