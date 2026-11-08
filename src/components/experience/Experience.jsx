import { motion } from "framer-motion";
import { experiences } from "../../data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Film, 
  Sparkles, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-glowGold"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Track Record &amp; Roles
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Professional Experience &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Event Coverage
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            From on-site technology hackathon videography at ZemenayTech to commercial brand campaigns and e-commerce ventures.
          </motion.p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cinema-card rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Left Film accent bar */}
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-amber-500 via-rose-500 to-purple-600" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono">
                      {exp.badge}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-medium text-amber-400 mt-1">
                    {exp.role}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mt-5 pt-4 border-t border-white/10">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Strip */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
