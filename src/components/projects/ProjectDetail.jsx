import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "../../context/RouterContext";
import { creativeProjects, personalInfo } from "../../data/portfolioData";
import { 
  ArrowLeft, 
  Film, 
  Sparkles, 
  Play, 
  ExternalLink, 
  Download, 
  Camera, 
  Layers, 
  CheckCircle2,
  Calendar,
  User,
  Share2
} from "lucide-react";

const ProjectDetail = () => {
  const { currentProjectId, navigateToHome, navigateToProject } = useRouter();
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Fallback to first project if not found
  const project = creativeProjects.find((p) => p.id === currentProjectId) || creativeProjects[0];

  // Other works for navigation
  const nextProjects = creativeProjects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-cinematic-mesh bg-cinematic-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigateToHome("projects")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900/90 hover:bg-dark-850 border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Works</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-mono">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">
            Case Study • {project.client}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mt-3 max-w-3xl">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div>
              <span className="text-slate-500 text-xs font-mono block">Client / Context</span>
              <span className="text-white text-sm font-semibold mt-0.5 block">{project.client}</span>
            </div>
            <div>
              <span className="text-slate-500 text-xs font-mono block">My Role</span>
              <span className="text-amber-400 text-sm font-semibold mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-500 text-xs font-mono block">Year</span>
              <span className="text-white text-sm font-semibold mt-0.5 block">{project.year}</span>
            </div>
            <div>
              <span className="text-slate-500 text-xs font-mono block">Media Format</span>
              <span className="text-white text-sm font-semibold mt-0.5 block capitalize">{project.mediaType}</span>
            </div>
          </div>
        </div>

        {/* Main Media Showcase */}
        <div className="cinema-card rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl mb-12">
          
          <div className="relative flex items-center justify-center p-4 sm:p-8 min-h-[420px] max-h-[75vh] bg-black/90">
            {project.gallery[activeMediaIndex]?.type === "video" ? (
              <video
                src={project.gallery[activeMediaIndex].src}
                poster={project.image}
                controls
                autoPlay
                playsInline
                className="max-h-[70vh] w-auto max-w-full rounded-2xl shadow-cinematic"
              />
            ) : (
              <img
                src={project.gallery[activeMediaIndex]?.src || project.image}
                alt={project.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-cinematic"
              />
            )}
          </div>

          {/* Multi-Item Carousel Selector */}
          {project.gallery.length > 1 && (
            <div className="p-4 bg-dark-900 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Showing {activeMediaIndex + 1} of {project.gallery.length}: {project.gallery[activeMediaIndex]?.caption}
              </span>
              <div className="flex gap-2">
                {project.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeMediaIndex === idx
                        ? "bg-amber-500 text-dark-950 font-bold"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    View {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* In-Depth Overview & Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-md">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Project Narrative &amp; Creative Strategy
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-md">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Execution &amp; Key Deliverables
              </h2>
              <ul className="space-y-3 text-sm text-slate-300">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tools & Arsenal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/70 border border-white/10 backdrop-blur-md">
              <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Software &amp; Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.videoUrl && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href={project.driveUrl || project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all shadow-glowGold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Watch Original on Drive</span>
                  </a>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-dark-900 to-dark-950 border border-amber-500/30 backdrop-blur-md">
              <h3 className="text-base font-display font-bold text-white mb-2">
                Need similar video or design work?
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Available for commercial video editing, brand campaigns, and live event coverage in Addis Ababa and remotely.
              </p>
              <a
                href="#contact"
                onClick={() => navigateToHome("contact")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all"
              >
                <span>Contact Melat Zenebe</span>
              </a>
            </div>
          </div>

        </div>

        {/* More Works Footer */}
        <div className="pt-10 border-t border-white/10">
          <h3 className="text-xl font-display font-bold text-white mb-6">
            More Selected Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nextProjects.map((np) => (
              <div
                key={np.id}
                onClick={() => {
                  setActiveMediaIndex(0);
                  navigateToProject(np.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="cinema-card rounded-2xl p-4 flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-dark-900">
                  <img
                    src={np.image}
                    alt={np.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase">
                    {np.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {np.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {np.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
