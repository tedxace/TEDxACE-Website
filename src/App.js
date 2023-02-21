import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import SpeakerContent from "./components/SpeakerContent";
import { useSpeakerData } from "./Context/ContextProvider";
const Home = lazy(() => import("./pages/Home"));
const Team = lazy(() => import("./pages/Team"));
const About = lazy(() => import("./pages/About"));

function App() {
  const speakers = useSpeakerData();
  return (
    <div className="overflow-x-hidden">
      <Router>
        <header className="min-h-[10vh]">
          <Navbar />
        </header>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/speaker"
              element={<SpeakerContent speakers={speakers} />}
            />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
