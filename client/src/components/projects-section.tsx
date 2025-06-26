import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Breast Cancer Detection using Meta Learning and ANN",
      description: "Hybrid algorithm that combines meta-learning and artificial neural networks, achieving over 99% accuracy by leveraging feature selection, PCA, and ensemble methods.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "TensorFlow", "Meta-Learning", "ANN"],
      publicationUrl: "https://drive.google.com/file/d/1Ls8-T2NEA1BWXrdYv4j54QdsTnzZePIS/view?usp=sharing",
      // githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "CMS - Content Management System",
      description: "Designed and implemented a CMS to simplify content updates and streamline multi-platform delivery for applications, reducing operational overhead and improved consistency across user-facing services.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Redux", "Material UI", "Tailwind CSS"],
      // liveUrl: "#",
      // githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "CVM - Customer Value Management",
      description: "Data-driven CVM platform that visualized customer behavior and optimized engagement strategies through dynamic React dashboards and Kibana insights, enabling clients to launch targeted campaigns and boost retention.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Redux", "Kibana", "Material UI", "Tailwind CSS"],
      // liveUrl: "#",
      // githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Fixify - Home Services Platform",
      description: "A Full-stack home services platform connecting users with local professionals through a seamless, responsive interface. Implemented secure authentication, real-time service booking, and automated deployment pipelines to ensure smooth and scalable performance.",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Express.js", "Jest", "Material UI", "CI/CD"],
      // liveUrl: "#",
      githubUrl: "https://github.com/arshita1625/fixify",
      featured: true,
    },
    {
      id: 5,
      title: "Intrusion Detection System",
      description: "Developed a semi-supervised Intrusion Detection System using deep autoencoders to model normal network behavior and flag anomalies with >98% recall and >87% precision, F1-optimized thresholds and dropout regularization minimized false positives and improved generalization.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Deep Learning", "Autoencoders"],
      // liveUrl: "#",
      githubUrl: "https://github.com/arshita1625/IntrusionDetection",
      featured: true,
    },
    {
      id: 6,
      title: "AI Commerce Agent",
      description: "End-to-End AI shopping assistant integrating a React frontend with a FastAPI backend. It enables natural chat via a LLaMA-based model, text-based product recommendations using semantic and exact matching, and image-based product search powered by CLIP embeddings and category filtering.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "LLaMa", "FastApi", "AI/ML", "Vector Db"],
      // liveUrl: "#",
      githubUrl: "https://github.com/arshita1625/ai-commerce-agent",
      featured: true,
    },
    {
      id: 7,
      title: "Sentimental Analysis",
      description: "Performed sentiment analysis on Amazon Alexa reviews to classify them as positive, negative, or neutral. Utilized NLP techniques and machine learning algorithms to analyze review text and associated attributes like ratings.",
      image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "NLP", "Data Analysis", "Machine Learning"],
      // liveUrl: "#",
      githubUrl: "https://github.com/arshita1625/Sentimental-Analysis",
      featured: true,
    },
    {
      id: 8,
      title: "Traffic Monitoring Through Vertex Cover Minimization",
      description: "Optimized the vertex cover problem to reduce camera usage at intersections using MiniSAT. Connected Python and C++ modules via IPC for efficient data handling and execution.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "C++", "Java", "Algorithm Optimization", "Graph Theory"],
      // liveUrl: "#",
      githubUrl: "https://github.com/arshita1625/vertexCover",
      featured: true,
    },
    {
      id: 9,
      title: "Grocery Android Application",
      description: "A User-Friendly Grocery List app to help users keep track of items they need to buy, ensuring nothing gets forgotten. Designed for busy lifestyles, the app makes grocery planning quick and hassle-free.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Kotlin", "Android", "Mobile Development"],
      // liveUrl: "#",
      githubUrl: "https://github.com/arshita1625/GroceryApplication",
      featured: true,
    }
  ];

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-cyan-500/20 text-cyan-400",
      Redux: "bg-purple-500/20 text-purple-400",
      "Kibana": "bg-blue-500/20 text-blue-400",
      "Node.js": "bg-green-500/20 text-green-400",
      Python: "bg-yellow-500/20 text-yellow-400",
      TypeScript: "bg-blue-500/20 text-blue-400",
      MongoDB: "bg-green-600/20 text-green-500",
      JWT: "bg-orange-500/20 text-orange-400",
      NLP: "bg-green-500/20 text-green-400",
      "Tailwind CSS": "bg-green-500/20 text-green-400",
      "Vector Db": "bg-green-500/20 text-green-400",
      "Algorithm Optimization": "bg-green-500/20 text-green-400",
      "CI/CD": "bg-green-500/20 text-green-400",
      "Material UI": "bg-orange-500/20 text-orange-400",
      Autoencoders: "bg-orange-500/20 text-orange-400",
      "LLaMa": "bg-orange-500/20 text-orange-400",
      "Machine Learning": "bg-blue-500/20 text-blue-400",
      "Jest": "bg-blue-500/20 text-blue-400",
      "Mobile Development": "bg-blue-500/20 text-blue-400",
      "C++": "bg-blue-500/20 text-blue-400",
      "AI/ML": "bg-yellow-500/20 text-yellow-400",
      "Graph Theory": "bg-yellow-500/20 text-yellow-400",
      "Meta-Learning": "bg-yellow-500/20 text-yellow-400",
      "Kotlin": "bg-yellow-500/20 text-yellow-400",
      default: "bg-purple-500/20 text-purple-400",

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
          Projects & <span className="text-purple-400">Publications</span>
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

                  <div className="flex ">
                    {project?.publicationUrl && (
                      <a href={project.publicationUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-white p-2">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </a>

                    )}
                    {project?.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="text-purple-400 hover:text-white p-2">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
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
