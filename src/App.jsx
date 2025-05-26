import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="h-full w-full text-black bg-white dark:bg-black dark:text-white scroll-smooth">
      <Router>
        <Navbar />
        <ScrollToTop /> {/* Place ScrollToTop here */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="hero">
                  <Hero />
                </section>
                <section id="about">
                  <AboutMe />
                </section>
                <section id="projects">
                  <Project />
                </section>
                <section id="resume">
                  <Resume />
                </section>
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
