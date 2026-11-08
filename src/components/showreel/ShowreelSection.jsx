import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { showreelData } from "../../data/portfolioData";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Film, 
  Camera, 
  Sparkles, 
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  Flame
} from "lucide-react";

const ShowreelSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreel" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-glowGold"
          >
            <Film className="w-3.5 h-3.5" />
            Featured Showreel &amp; Event Film
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Capturing the Pulse of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Live Tech Events
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Behind the camera and at the edit suite for the IDEEZA Hub × Zemenay Tech Hackathon. A high-energy vertical vlog engineered for maximum retention.
          </motion.p>
        </div>

        {/* Cinematic Theater Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-dark-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Left: The Video Player (Vertical Reel Framing) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-white/15 bg-black shadow-cinematic group">
              
              {/* Video Element */}
              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  ref={videoRef}
                  src="/videos/hackathon-vlog.mp4"
                  poster="/media/hackathon-recap.png"
                  playsInline
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                />

                {/* Film HUD Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono pointer-events-none z-10">
                  <span className="px-2 py-0.5 rounded bg-black/60 text-rose-500 font-bold border border-rose-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    REC
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-amber-400 border border-white/10">
                    60 FPS • 1080p
                  </span>
                </div>

                {/* Center Play/Pause button on click */}
                <div
                  onClick={togglePlay}
                  className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity ${
                    isPlaying ? "opacity-0 hover:opacity-100 bg-black/30" : "opacity-100 bg-black/40"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-amber-500 text-dark-950 flex items-center justify-center shadow-glowGold"
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 fill-dark-950" />
                    ) : (
                      <Play className="w-7 h-7 fill-dark-950 ml-1" />
                    )}
                  </motion.div>
                </div>

                {/* Bottom Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Play/Pause"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Mute/Unmute"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Production Story & Behind the Scenes Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono">
                  Official Event Vlog
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-mono">
                  ZemenayTech × IDEEZA Hub
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-2">
                {showreelData.title}
              </h3>
              <p className="text-amber-400 font-mono text-xs sm:text-sm mt-1">
                Role: {showreelData.role}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                {showreelData.description}
              </p>
            </div>

            {/* Behind the scenes pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <Camera className="w-4 h-4" />
                  <span>Camera &amp; Shooting</span>
                </div>
                <p className="text-xs text-slate-400">
                  Mobile cinematography rig with stabilization, tracking moving participants and capturing genuine developer focus.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Pacing &amp; Audio Cuts</span>
                </div>
                <p className="text-xs text-slate-400">
                  Rapid-tempo transitions synced precisely to background beats to maintain viewer retention across TikTok and Instagram reels.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Edit Suite &amp; Tools</span>
                </div>
                <p className="text-xs text-slate-400">
                  Adobe Premiere Pro &amp; CapCut Pro, multi-clip timeline trimming, speed ramps, and localized captions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                  <Flame className="w-4 h-4" />
                  <span>Platform Delivery</span>
                </div>
                <p className="text-xs text-slate-400">
                  Targeted vertical 9:16 export optimized for the TikTok &amp; Instagram algorithm and audience engagement.
                </p>
              </div>
            </div>

            {/* Actions & Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={showreelData.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-medium text-xs transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                <span>Original File on Google Drive</span>
              </a>

              <a
                href="https://www.tiktok.com/@zemenaytech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-medium text-xs transition-all"
              >
                <span>Watch on ZemenayTech TikTok</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShowreelSection;

