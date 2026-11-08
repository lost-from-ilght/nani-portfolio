import { RouterProvider, useRouter } from "./context/RouterContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ShowreelSection from "./components/showreel/ShowreelSection";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ProjectDetail from "./components/projects/ProjectDetail";
import Skills from "./components/skills/Skills";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";

const PortfolioContent = () => {
  const { isProjectView } = useRouter();

  return (
    <div className="bg-dark-950 text-slate-200 min-h-screen selection:bg-amber-500/30 selection:text-white relative overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        {isProjectView ? (
          <ProjectDetail />
        ) : (
          <>
            <Hero />
            <ShowreelSection />
            <Projects />
            <About />
            <Experience />
            <Skills />
            <Achievements />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <RouterProvider>
      <PortfolioContent />
    </RouterProvider>
  );
};

export default App;
