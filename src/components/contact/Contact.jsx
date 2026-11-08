import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Download, 
  CheckCircle2, 
  Clapperboard, 
  Film,
  Sparkles
} from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Video Editing",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback or simulated success
    const subject = encodeURIComponent(`Project Inquiry: ${formState.service} from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nService: ${formState.service}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-glowGold"
          >
            <Clapperboard className="w-3.5 h-3.5" />
            Let's Collaborate
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Bring Your Story to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              The Screen
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Available for commercial video editing, event filming, graphic design campaigns, and brand storytelling in Addis Ababa and remotely.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="cinema-card rounded-2xl p-5 flex items-center gap-4 block group"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-dark-950 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Direct Email</span>
                <h4 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {personalInfo.email}
                </h4>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="cinema-card rounded-2xl p-5 flex items-center gap-4 block group"
            >
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-dark-950 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Phone &amp; WhatsApp</span>
                <h4 className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors">
                  {personalInfo.phoneDisplay}
                </h4>
              </div>
            </a>

            {/* Location Card */}
            <div className="cinema-card rounded-2xl p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Location</span>
                <h4 className="text-sm font-semibold text-white">
                  {personalInfo.location}
                </h4>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-900 to-dark-950 border border-amber-500/30">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Official Resume
              </span>
              <h4 className="text-base font-bold text-white mb-2">
                Melat Zenebe Kinfe — Curriculum Vitae
              </h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Complete breakdown of education at AASTU, ZemenayTech experience, certifications, and technical proficiencies.
              </p>
              <a
                href={personalInfo.resumePath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all shadow-glowGold"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="cinema-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-display font-bold text-white mb-1">
                Send a Project Inquiry
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Looking forward to hearing about your vision
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-white">Inquiry Initialized!</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Your email client should open shortly. You can also reach Melat directly at {personalInfo.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Service / Project Type
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs sm:text-sm"
                    >
                      <option value="Video Editing">Cinematic Video Editing &amp; Pacing</option>
                      <option value="Event Coverage">Event Videography &amp; Camerawoman</option>
                      <option value="Brand Campaigns">Brand Identity &amp; Poster Design</option>
                      <option value="Social Media Ads">Social Media Ad Creatives &amp; Growth</option>
                      <option value="Full Creative Direction">Full Creative Direction &amp; Content Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Project Details &amp; Timeline
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your brand, event, or the video content you want to create..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-400 hover:to-rose-500 text-dark-950 font-bold text-xs uppercase tracking-wider shadow-glowGold transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Melat</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
