import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { useRouter } from "../../context/RouterContext";
import { 
  Menu, 
  X, 
  Download, 
  Film, 
  Sparkles,
  ArrowLeft,
  Mail,
  Clapperboard
} from "lucide-react";

const navLinks = [
  { name: "Showreel", href: "#showreel", sectionId: "showreel" },
  { name: "Works", href: "#projects", sectionId: "projects" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Experience", href: "#experience", sectionId: "experience" },
  { name: "Toolkit", href: "#skills", sectionId: "skills" },
  { name: "Milestones", href: "#achievements", sectionId: "achievements" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isProjectView, navigateToHome } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    if (isProjectView) {
      e.preventDefault();
      navigateToHome(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    if (isProjectView) {
      e.preventDefault();
      navigateToHome();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isProjectView
          ? "bg-dark-950/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo / Brand — Compact & Non-Overflowing */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#"
              onClick={handleLogoClick}
              className="group flex items-center gap-2.5 text-white tracking-tight"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 p-[1px] shadow-glowGold shrink-0">
                <div className="w-full h-full bg-dark-950 rounded-[7px] overflow-hidden flex items-center justify-center group-hover:bg-dark-900 transition-colors">
                  <Film className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-display font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors text-sm sm:text-base">
                    MELAT ZENEBE
                  </span>
                  <span className="text-amber-400/90 font-mono text-xs font-semibold">
                    (Nani)
                  </span>
                </div>
                <span className="text-[9px] text-slate-400 flex items-center gap-1 font-mono uppercase tracking-wider mt-1">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Digital Marketer &amp; Strategist
                </span>
              </div>
            </a>

            {/* If on project view, show quick back button */}
            {isProjectView && (
              <button
                onClick={() => navigateToHome()}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all ml-3"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Reel
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          {!isProjectView && (
            <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 border border-white/10 rounded-full px-3.5 py-1.5 backdrop-blur-md shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="px-3 py-1.5 text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Right Action Button & Resume CTA */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={personalInfo.resumePath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 hover:text-white transition-all"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glowGold transition-all transform hover:scale-105 active:scale-95"
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>Let's Create</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              title="Download Resume"
            >
              <Download className="w-4 h-4 text-amber-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-dark-950/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={personalInfo.resumePath}
                download
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-rose-600 text-dark-950 font-bold text-sm"
              >
                <Clapperboard className="w-4 h-4" />
                <span>Let's Create</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
