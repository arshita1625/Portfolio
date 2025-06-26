import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Masters of Engineering",
      organization: "University of Waterloo",
      location: "Waterloo, Canada",
      period: "Sept 2024 - Present",
      type: "education",
      description: "Electrical and Computer Engineering focusing on advanced software systems, machine learning, and distributed computing technologies.",
      achievements: [
        "Elected Board Director at Graduate Student Association (GSA), representing engineering graduate students",
        "Developed an Intrusion Detection System using autoencoders and semi-supervised learning for malicious attacks",
        "Organized professional development events as WiE Director, empowering Women in STEM"

      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-cyan-400",
    },
    {
      id: 2,
      title: "Software Development Engineer",
      organization: "BNG Advanced Mobile Solutions",
      location: "Gurgaon, Haryana, India",
      period: "July 2023 - July 2024",
      type: "work",
      description: "Built centralized CMS reducing manual content handling time by 80% across 5+ applications. Contributed to Customer Value Management (CVM) system for telecom client retention and managed personalized offer campaigns.",
      achievements: [
        "Built a centralized CMS that reduced manual content handling time by 80 % across multiple applications",
        "Contributed to CVM system for telecom client retention",
        "Contributed to the development of an AI agent at the company using Meta’s LLaMA model, enabling intelligent conversational capabilities for product queries, recommendations, and customer support.",
        "Built dynamic UI rendered from backend JSON, enabling rapid updates and scalable component reuse."
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-purple-400",
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      organization: "BNG Advanced Mobile Solutions",
      location: "Gurgaon, Haryana, India",
      period: "Dec 2022 - June 2023",
      type: "work",
      description: "Developed Customer Care Interface (CCI) in React for telecom operators. Reduced customer support handling time by 35% and increased unit test coverage from 65% to 75%.",
      achievements: [
        "Designed a React-based Customer Care Interface to manage user subscriptions and billing, cutting support time by 35%.",
        "Increased unit test coverage from 65% to 75%, reducing post-release bugs by 20%",
        "Participated in debugging, feature enhancement, and code reviews to meet product quality standards."
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-green-400",
    },
    {
      id: 4,
      title: "Bachelor of Technology",
      organization: "Guru Nanak Dev University",
      location: "Amritsar, India",
      period: "July 2019 - May 2023",
      type: "education",
      description: "Computer Engineering with 88.9% percentage. Published research in machine learning and led Women In Engineering initiatives.",
      achievements: [
        "Graduated with 88.9% in Computer Engineering",
        "Published research in machine learning for breast cancer detection using artificial neural networks",
        "Conducted hands-on experiments in computer vision, embedded systems, and database management systems"
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-orange-400",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Work Experience &<span className="text-purple-400"> Education</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-green-400"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="timeline-item relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg`}>
                  <div className={experience.color}>
                    {experience.icon}
                  </div>
                </div>

                <Card className="glass-effect border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${experience.color}`}>
                          {experience.title}
                        </h3>
                        <p className="text-purple-300 font-medium">
                          {experience.organization}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {experience.location}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                        {experience.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">
                      {experience.description}
                    </p>

                    {experience.achievements && (
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-purple-400 mr-2 mt-1.5">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
