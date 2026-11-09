import { personalInfo } from "../../data/portfolioData";
import { Film, Clapperboard, Heart, Download, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-dark-950">
              <Film className="w-5 h-5 fill-dark-950" />
            </div>
            <div>
              <span className="font-display font-extrabold text-white text-base tracking-tight">
                MELAT ZENEBE
              </span>
              <span className="text-amber-400 font-mono text-xs block">
                Digital Marketer &amp; Brand Strategist
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#showreel" className="hover:text-amber-400 transition-colors">Showreel</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Works</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Toolkit</a>
            <a href="#achievements" className="hover:text-amber-400 transition-colors">Milestones</a>
            <a href={personalInfo.resumePath} download className="hover:text-amber-400 transition-colors">Resume</a>
          </div>

          {/* Location & Copyright */}
          <div className="text-center md:text-right text-xs text-slate-500 font-mono">
            <p>Addis Ababa, Ethiopia</p>
            <p className="text-[11px] mt-0.5">
              &copy; {new Date().getFullYear()} Melat Zenebe Kinfe (Nani). All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
