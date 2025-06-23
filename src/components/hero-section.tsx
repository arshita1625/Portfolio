import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import TypingAnimation from "@/components/typing-animation";
import ParticleBackground from "@/components/particle-background";

export default function HeroSection() {
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCode(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/attached_assets/';
    link.download = 'Arshita_Software_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen particle-bg flex items-center justify-center relative">
      <ParticleBackground />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-slate-200">Arshita</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-8 font-mono h-8">
            <TypingAnimation text="Software Developer & MEng Student" />
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Masters student at University of Waterloo passionate about building scalable web applications,
            machine learning solutions, and innovative software products.
          </p>

          {/* Animated Code Block */}
          {showCode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="code-block rounded-lg p-6 text-left max-w-2xl mx-auto mb-12 font-mono text-sm"
            >
              <div className="text-green-400 mb-2">// Latest projects and technologies</div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">skills</span> = {"{"}
              </div>
              <div className="ml-4 space-y-1">
                <div>
                  <span className="text-purple-400">frontend:</span>{" "}
                  <span className="text-yellow-400">["React", "Next.js", "TypeScript"]</span>,
                </div>
                <div>
                  <span className="text-purple-400">backend:</span>{" "}
                  <span className="text-yellow-400">["Node.js", "Express.js", "Python"]</span>,
                </div>
                <div>
                  <span className="text-purple-400">cloud:</span>{" "}
                  <span className="text-yellow-400">["AWS", "Kubernetes", "CI/CD"]</span>,
                </div>
                <div>
                  <span className="text-purple-400">databases:</span>{" "}
                  <span className="text-yellow-400">["MongoDB", "SQL"]</span>
                </div>
              </div>
              <div>{"}"}</div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-3 rounded-lg font-semibold animate-glow"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="glass-effect px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-16 h-16 border border-purple-500 rounded-lg opacity-20"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        <div className="w-12 h-12 border border-cyan-400 rounded-full opacity-20"></div>
      </motion.div>
    </section>
  );
}
