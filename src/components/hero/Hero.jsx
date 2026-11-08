import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, stats, showreelData } from "../../data/portfolioData";
import { 
  Play, 
  Film, 
  Sparkles, 
  Clapperboard, 
  ArrowRight, 
  Download, 
  Camera, 
  Sliders, 
  Award,
  Maximize2,
  X,
  Volume2,
  VolumeX,
  CheckCircle2
} from "lucide-react";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cinematic-mesh bg-cinematic-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-500/15 via-rose-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Visual Storyteller{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
                &amp; Video Editor
              </span>
            </motion.h1>

            {/* Subtitle / Rotating Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-10 sm:h-12 flex items-center mt-3 mb-4 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 font-mono text-lg sm:text-2xl text-amber-300">
                <span className="text-rose-500 font-bold">🎬</span>
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="font-semibold tracking-tight"
                >
                  {personalInfo.subtitles[titleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Cinematic Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              Bridging <span className="text-white font-medium">Software Engineering precision</span> with{" "}
              <span className="text-amber-400 font-medium">cinematic visual storytelling</span>. I film, cut, and color dynamic video content, capture live tech hackathons, and design high-converting brand campaigns that command attention.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-400 hover:to-rose-500 text-dark-950 font-bold text-sm tracking-wide uppercase shadow-glowGold transition-all transform hover:scale-105 active:scale-95 group"
              >
                <span>Explore Works</span>
                <ArrowRight className="w-4 h-4 text-dark-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumePath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-900/90 hover:bg-dark-850 border border-white/10 hover:border-amber-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10 w-full"
            >
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white flex items-center gap-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
                      {s.value}
                    </span>
                  </span>
                  <span className="text-xs font-medium text-slate-300 mt-0.5">{s.label}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">{s.description}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Cinematic Showreel Monitor & Viewfinder Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer decorative film glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/30 via-rose-500/20 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Viewfinder Frame */}
              <div className="relative rounded-2xl border border-white/15 bg-dark-950/95 overflow-hidden shadow-2xl backdrop-blur-xl">
                
                {/* Viewfinder Top Bar / Metadata */}
                <div className="flex items-center justify-between px-4 py-3 bg-dark-900/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
                      IDEEZA × ZEMENAY
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                    <span className="text-amber-400">FHD 60FPS</span>
                    <span>SHUTTER 1/120</span>
                  </div>
                </div>

                {/* Video / Reel Preview Container */}
                <div className="relative aspect-[9/14] sm:aspect-[9/13] max-h-[500px] w-full bg-black overflow-hidden group cursor-pointer"
                     onClick={() => setIsPlayingModal(true)}>
                  
                  {/* Looping video preview (muted) */}
                  <video
                    src="/videos/hackathon-vlog.mp4"
                    poster="/media/hackathon-recap.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />

                  {/* Cinematic Viewfinder Crosshairs */}
                  <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                    {/* Corners */}
                    <div className="flex justify-between">
                      <div className="w-4 h-4 border-t-2 border-l-2 border-amber-400/70" />
                      <div className="w-4 h-4 border-t-2 border-r-2 border-amber-400/70" />
                    </div>
                    {/* Center crosshair */}
                    <div className="self-center flex items-center justify-center">
                      <div className="w-6 h-[1px] bg-white/20" />
                      <div className="h-6 w-[1px] bg-white/20 -ml-3" />
                    </div>
                    {/* Bottom corners */}
                    <div className="flex justify-between">
                      <div className="w-4 h-4 border-b-2 border-l-2 border-amber-400/70" />
                      <div className="w-4 h-4 border-b-2 border-r-2 border-amber-400/70" />
                    </div>
                  </div>

                  {/* Gradient shade & Play prompt overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent flex flex-col justify-end p-5">
                    
                    {/* Floating Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 rounded-full bg-amber-500/90 text-dark-950 flex items-center justify-center shadow-glowGold cursor-pointer backdrop-blur-sm"
                      >
                        <Play className="w-7 h-7 fill-dark-950 ml-1" />
                      </motion.div>
                    </div>

                    <div className="relative z-10">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono uppercase mb-1.5">
                        Featured Event Vlog
                      </span>
                      <h3 className="text-white font-display font-bold text-lg leading-snug">
                        IDEEZA Hub × Zemenay Tech Hackathon
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                        Filmed &amp; edited on-site by Melat Zenebe for TikTok &amp; Instagram platforms.
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5 text-amber-400">
                          <Film className="w-3.5 h-3.5" />
                          Tap to open theater
                        </span>
                        <span>01:25 • Vertical 9:16</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Viewfinder Bottom Status */}
                <div className="p-3.5 bg-dark-900/90 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-amber-400" />
                    <span className="text-white font-medium text-[11px]">Shot on Mobile &amp; Rig</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
                    <span className="text-emerald-400">● SOUND ON</span>
                    <span>IN THEATER</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Cinematic Theater Video Modal */}
      <AnimatePresence>
        {isPlayingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsPlayingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-dark-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-dark-900 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <div>
                    <h4 className="text-white font-display font-bold text-sm sm:text-base">
                      {showreelData.title}
                    </h4>
                    <p className="text-[11px] text-amber-400 font-mono">
                      {showreelData.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={showreelData.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-all font-mono"
                  >
                    <span>Google Drive</span>
                  </a>
                  <button
                    onClick={() => setIsPlayingModal(false)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Theater Video Player */}
              <div className="relative bg-black flex items-center justify-center min-h-[360px] max-h-[68vh] overflow-hidden">
                <video
                  src="/videos/hackathon-vlog.mp4"
                  poster="/media/hackathon-recap.png"
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[68vh] w-auto max-w-full rounded"
                />
              </div>

              {/* Modal Footer Notes */}
              <div className="p-4 sm:p-5 bg-dark-900/95 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    {showreelData.description}
                  </p>
                  <p className="text-slate-500 text-[11px] font-mono mt-1">
                    {showreelData.platform} • {showreelData.quality}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="#projects"
                    onClick={() => setIsPlayingModal(false)}
                    className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    View All Works
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
