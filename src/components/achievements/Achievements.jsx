import { motion } from "framer-motion";
import { certifications } from "../../data/portfolioData";
import { 
  Trophy, 
  Award, 
  ExternalLink, 
  Users, 
  ShieldCheck, 
  Medal,
  CheckCircle2,
  GraduationCap,
  Sparkles
} from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-glowGold"
          >
            <Award className="w-3.5 h-3.5" />
            Leadership &amp; Credentials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Certifications &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Honors
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Recognized for cohort leadership, digital marketing mastery, and language fluency.
          </motion.p>
        </div>

        {/* Featured Spotlight: FCA Graduation & Certificate Acceptance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14 bg-dark-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          
          {/* Main Acceptance Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-dark-950 shadow-cinematic">
              <img
                src="/media/portrait.jpg"
                alt="Accepting Certificate of Completion"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-amber-500/30 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Certificate Awarded
                </span>
              </div>
            </div>
          </div>

          {/* Spotlight Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono">
                Class Representative • Cohort 3
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                FCA Digital Marketing &amp; E-Commerce Program
              </h3>
              <p className="text-amber-400 font-mono text-xs mt-1">
                Issued by FCA (Finn Church Aid / FCA Jobs) • Addis Ababa, Ethiopia
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                Selected as the Class Representative for Cohort 3, acting as the vital link between trainees and program organizers. Successfully completed 3 months of rigorous training covering digital advertising funnels, social media campaign execution, e-commerce operations, and brand content creation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                <span className="text-xs font-semibold text-white block">Cohort Leadership</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Led communications and peer collaboration across the training group.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-white/10">
                <span className="text-xs font-semibold text-white block">Practical Application</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Directly applied tools at ZemenayTech for social campaigns and event filming.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.slice(1).map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cinema-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-amber-400">
                    {cert.badge}
                  </span>
                </div>

                <h4 className="text-base font-display font-bold text-white">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified Credential</span>
                <span className="text-emerald-400">● Active</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
