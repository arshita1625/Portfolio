import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const stats = [
    { value: "1.5+", label: "Years Experience", color: "text-purple-400" },
    { value: "10+", label: "Projects Completed", color: "text-cyan-400" },
    { value: "5+", label: "Applications Deployed", color: "text-green-400" },
    { value: "1", label: "Research Publication", color: "text-purple-300" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern software development workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">

              Brains, Brackets, and Bold Builds
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Currently pursuing my Masters of Engineering in Electrical and Computer Engineering at the
              University of Waterloo. With 1.5 years of professional experience at BNG Advanced Mobile Solutions,
              I've contributed to large-scale systems serving telecom clients.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              I live at the crossroads of software engineering and artificial intelligence, from publishing ML research to building adaptive systems. I also lead initiatives that support women in STEM, working toward a more inclusive tech space.
              This portfolio is more than a collection of projects—it’s a window into how I think, build, and lead. I don’t just code to solve problems. I code to challenge what’s possible.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="glass-effect border-white/10">
                    <CardContent className="p-4 text-center">
                      <div className={`text-3xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
