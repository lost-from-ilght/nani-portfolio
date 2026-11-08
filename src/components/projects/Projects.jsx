import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { creativeProjects, creativeCategories } from "../../data/portfolioData";
import { useRouter } from "../../context/RouterContext";
import { 
  Film, 
  Sparkles, 
  ArrowUpRight, 
  Play, 
  Eye, 
  ExternalLink,
  X,
  Maximize2,
  Camera,
  Layers,
  ChevronRight
} from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const { navigateToProject } = useRouter();

  const filteredProjects = activeCategory === "All"
    ? creativeProjects
    : creativeProjects.filter((p) => p.category === activeCategory);

  const openLightbox = (project) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-glowGold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Selected Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Visual Works &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Creative Direction
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Explore commercial posters, tech brand campaigns, live hackathon event filming, and social media advertising designed for impact.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-dark-900/90 border border-white/10 backdrop-blur-md">
            {creativeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-rose-600 text-dark-950 font-bold shadow-glowGold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group cinema-card rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Media Container */}
                <div
                  className="relative aspect-[4/5] bg-dark-900 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-amber-300">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2 mb-2">
                      {project.mediaType === "video" ? (
                        <div className="w-10 h-10 rounded-full bg-amber-500 text-dark-950 flex items-center justify-center shadow-glowGold">
                          <Play className="w-5 h-5 fill-dark-950 ml-0.5" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                          <Eye className="w-5 h-5" />
                        </div>
                      )}
                      <span className="text-white text-xs font-mono font-medium">
                        {project.mediaType === "video" ? "Play Video Reel" : "View Artwork & Details"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono mb-1.5">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-500 font-mono">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-2">
                <button
                  onClick={() => openLightbox(project)}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium font-mono pt-3 transition-colors"
                >
                  <span>Quick View</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => navigateToProject(project.id)}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white font-medium pt-3 transition-colors group/btn"
                >
                  <span>Full Case</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Cinematic Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-dark-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-dark-900 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <div>
                    <h4 className="text-white font-display font-bold text-base sm:text-lg">
                      {selectedProject.title}
                    </h4>
                    <span className="text-xs text-amber-400 font-mono">
                      {selectedProject.role} • {selectedProject.client}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const id = selectedProject.id;
                      closeLightbox();
                      navigateToProject(id);
                    }}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-200 hover:text-white font-medium border border-white/10 transition-all"
                  >
                    <span>Full Case Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Media Carousel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
                
                {/* Media Screen */}
                <div className="lg:col-span-7 bg-black flex items-center justify-center p-4 min-h-[380px] max-h-[65vh]">
                  {selectedProject.gallery[activeMediaIndex]?.type === "video" ? (
                    <video
                      src={selectedProject.gallery[activeMediaIndex].src}
                      poster={selectedProject.image}
                      controls
                      autoPlay
                      playsInline
                      className="max-h-[60vh] w-auto max-w-full rounded-xl"
                    />
                  ) : (
                    <img
                      src={selectedProject.gallery[activeMediaIndex]?.src || selectedProject.image}
                      alt={selectedProject.title}
                      className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                    />
                  )}
                </div>

                {/* Project Info & Gallery Selectors */}
                <div className="lg:col-span-5 p-6 bg-dark-900/90 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mt-2">
                      {selectedProject.subtitle}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-3">
                      {selectedProject.overview}
                    </p>

                    {/* Gallery Thumbnails if multiple */}
                    {selectedProject.gallery.length > 1 && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                          Artwork Series ({selectedProject.gallery.length} items)
                        </span>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {selectedProject.gallery.map((gItem, gIdx) => (
                            <button
                              key={gIdx}
                              onClick={() => setActiveMediaIndex(gIdx)}
                              className={`relative w-14 h-16 rounded-lg overflow-hidden border transition-all shrink-0 ${
                                activeMediaIndex === gIdx
                                  ? "border-amber-400 ring-2 ring-amber-400/30"
                                  : "border-white/10 opacity-60 hover:opacity-100"
                              }`}
                            >
                              {gItem.type === "video" ? (
                                <div className="w-full h-full bg-dark-950 flex items-center justify-center">
                                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                                </div>
                              ) : (
                                <img
                                  src={gItem.src}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {selectedProject.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tools Strip */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {selectedProject.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
