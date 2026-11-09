import { motion } from "framer-motion";
import { personalInfo, creativePillars, spokenLanguages, education } from "../../data/portfolioData";
import { 
  Film, 
  Sparkles, 
  GraduationCap, 
  Languages, 
  Camera, 
  Award, 
  CheckCircle2,
  Sliders,
  Globe
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-950">
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
            <Sparkles className="w-3.5 h-3.5" />
            Creative Philosophy &amp; Vision
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Where Engineering Logic Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Cinematic Art
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            A unique background uniting computational discipline from AASTU Software Engineering with dynamic visual storytelling, rhythm, and conversion psychology.
          </motion.p>
        </div>

        {/* Story Spotlight: Photo + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Portrait & Certification Acceptance Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-dark-900 shadow-cinematic group">
              <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/media/portrait.jpg"
                  alt="Melat Zenebe receiving Certificate of Completion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Gradient & Overlay badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent flex flex-col justify-end p-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono mb-2 backdrop-blur-md w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  Visual Storyteller &amp; Designer
                </span>
                <h4 className="text-white font-display font-bold text-lg">
                  Melat Zenebe Kinfe
                </h4>
                <p className="text-xs text-slate-300 font-mono mt-0.5">
                  Video Editor • Brand Designer • Digital Marketer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                Driving Brand Growth Through Strategic Digital Marketing
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Software Engineering graduate from <strong className="text-white font-semibold">Addis Ababa Science and Technology University (AASTU)</strong> and a certified <strong className="text-amber-400 font-semibold">Digital Marketer</strong>. As a Digital Marketing Intern at <strong className="text-amber-400 font-semibold">ZemenayTech</strong>, I helped with organizing the IDEEZA Hub × Zemenay Tech Hackathon to ensure event operations and logistics ran smoothly, while leading the social campaign coverage, brand content, and official recap vlog.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                My primary expertise is <span className="text-white font-medium">digital marketing, campaign strategy, and brand storytelling</span>. By combining analytical systems thinking from software engineering with conversion psychology, I create data-driven social media strategies, commercial advertising campaigns, and compelling multimedia assets that captivate audiences and deliver measurable results.
              </p>

              {/* Education & Language Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Education</span>
                    <span className="text-sm font-semibold text-white block">{education.degree}</span>
                    <span className="text-xs text-slate-400 block">{education.university} ({education.year})</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Languages</span>
                    <span className="text-sm font-semibold text-white block">English (IELTS 7.5) • Amharic</span>
                    <span className="text-xs text-slate-400 block">Mandarin Chinese (Level 1)</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4 Creative Pillars */}
        <div className="mb-8">
          <div className="text-left mb-8">
            <h3 className="text-2xl font-display font-bold text-white">
              Core Creative Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
              Disciplines that power my production and creative output
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-dark-900/80 border ${pillar.border} backdrop-blur-md flex flex-col justify-between hover:translate-y-[-4px] transition-transform`}
              >
                <div>
                  <span className={`text-[11px] font-mono uppercase font-bold tracking-wider ${pillar.tagColor}`}>
                    {pillar.metric}
                  </span>
                  <h4 className="text-lg font-display font-bold text-white mt-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {pillar.tools.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
