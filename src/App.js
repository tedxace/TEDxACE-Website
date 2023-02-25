import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import { useSpeakerData, useSponsorData } from "./Context/ContextProvider";

const Contact = lazy(() => import("./components/Contact"));
const Loader = lazy(() => import("./components/Loader"));
const Navbar = lazy(() => import("./components/Navbar"));
const SpeakerContent = lazy(() => import("./components/SpeakerContent"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Home = lazy(() => import("./pages/Home"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About"));

function App() {
  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Navbar2 />
        {/* <header className="min-h-[10vh]">
          <Navbar />
        </header> */}
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
          <footer className="w-full h-auto">
            <Contact />
          </footer>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
