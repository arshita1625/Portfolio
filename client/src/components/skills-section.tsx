import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Bolt, Database, Cloud, GitBranch, Cpu } from "lucide-react";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", percentage: 90, color: "from-purple-500 to-purple-600" },
    { name: "JavaScript/TypeScript", percentage: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Java", percentage: 80, color: "from-green-400 to-emerald-600" },
    { name: "C++", percentage: 75, color: "from-orange-500 to-red-500" },
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Node.js", icon: "🟢", color: "text-green-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "Kubernetes", icon: "⚙️", color: "text-blue-500" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "Git/GitHub", icon: "🔗", color: "text-gray-400" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "Next.js", "TypeScript", "Material UI", "Tailwind CSS"],
      color: "text-cyan-400",
    },
    {
      title: "Backend Development", 
      icon: <Bolt className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "Python", "REST APIs", "JWT"],
      color: "text-green-400",
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "SQL", "AWS", "Kubernetes", "Docker"],
      color: "text-purple-400",
    },
    {
      title: "DevOps & Bolt",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["GitHub Actions", "CI/CD", "Jenkins", "Git", "JIRA"],
      color: "text-orange-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-purple-400">Skills</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-cyan-400 flex items-center">
                  <Code className="mr-3" />
                  Programming Languages
                </h3>
                <div className="space-y-6">
                  {programmingSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1.5, delay: 0.2 * index }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Frameworks & Bolt */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-effect border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-8 text-cyan-400 flex items-center">
                  <Bolt className="mr-3" />
                  Frameworks & Bolt
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800/50 p-4 rounded-lg text-center cursor-pointer"
                    >
                      <div className="text-3xl mb-2">{tech.icon}</div>
                      <div className={tech.color}>{tech.name}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="glass-effect border-white/10 h-full">
                <CardContent className="p-6">
                  <div className={`flex items-center mb-4 ${category.color}`}>
                    {category.icon}
                    <h4 className="ml-2 font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-300 text-sm">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
