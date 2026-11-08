import { motion } from "framer-motion";
import { skillCategories } from "../../data/portfolioData";
import { 
  Film, 
  Palette, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Video,
  MonitorPlay
} from "lucide-react";

const iconMap = {
  Video: Video,
  Palette: Palette,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-glowGold"
          >
            <Layers className="w-3.5 h-3.5" />
            Production Arsenal
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Creative Stack &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Toolkit
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Specialized video editing suites, graphic design platforms, digital marketing analytics, and AI acceleration tools.
          </motion.p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Sparkles;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="cinema-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5 mt-6 pt-6 border-t border-white/10">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-dark-950/70 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <span className="text-sm font-semibold text-white">
                            {skill.name}
                          </span>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {skill.desc}
                          </p>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-amber-400 shrink-0 self-start sm:self-center">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
