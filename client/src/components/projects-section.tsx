import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "CVM - Customer Value Management",
      description: "Interactive dashboards using Kibana and React with Material UI. Backend-driven UI rendering using JSON configs with Redux for state management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Redux", "Kibana", "Material UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Fixify - Home Services Platform",
      description: "Full-stack web application with React (Vite), REST APIs using Node.js and Express.js, with MongoDB and automated CI/CD pipelines.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Breast Cancer Detection ML",
      description: "Hybrid algorithm combining meta-learning and artificial neural networks for breast cancer detection with higher accuracy than peer-reviewed studies.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "TensorFlow", "Meta-Learning", "ANN"],
      publicationUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Customer Care Interface (CCI)",
      description: "React-based interface for telecom operators to manage user subscriptions and billing, reducing customer support handling time by 35%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "TypeScript", "Material UI", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-cyan-500/20 text-cyan-400",
      Redux: "bg-purple-500/20 text-purple-400",
      "Node.js": "bg-green-500/20 text-green-400",
      Python: "bg-yellow-500/20 text-yellow-400",
      TypeScript: "bg-blue-500/20 text-blue-400",
      MongoDB: "bg-green-600/20 text-green-500",
      JWT: "bg-orange-500/20 text-orange-400",
      default: "bg-gray-500/20 text-gray-400",
    };
    return colors[tag] || colors.default;
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured <span className="text-purple-400">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className={project.featured ? "lg:col-span-1" : "lg:col-span-1"}
            >
              <Card className="glass-effect border-white/10 h-full group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`text-xs ${getTagColor(tag)}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-white p-2">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      {project.publicationUrl && (
                        <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-white p-2">
                          <FileText className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-white p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
