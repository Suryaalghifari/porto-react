import {
  Building,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-employed / Various Clients",
      location: "Remote, Bandung",
      period: "2023 - Present",
      type: "Freelance",
      description:
        "Developed custom websites for clients as a freelancer and project assistant, working on 20+ real-world projects since 2023. Specialized in web app development, collaborating directly with clients, and delivering tailored solutions.",
      achievements: [
        "Completed 20+ website and web app projects for students, small businesses, and organizations",
        "Improved client workflow by implementing automation and responsive design",
        "Received repeat orders and referrals from satisfied clients",
        "Worked efficiently under tight deadlines and varying project scopes",
      ],
      technologies: [
        "React",
        "Laravel",
        "Express.js",
        "Flutter",
        "MySQL",
        "MongoDB",
        "Firebase",
        "PHP",
        "Git",
        "VS Code",
      ],
      teamSize: 1,
      impact: "20+ projects delivered",
      salary: "-",
    },

    {
      title: "Secretary General",
      company: "Himpunan Mahasiswa Sistem Informasi, Widyatama University",
      location: "Bandung, Indonesia",
      period: "2024 - 2025",
      type: "Organization",
      description:
        "Coordinated internal operations and communication for the student association, ensuring effective collaboration across 6 divisions and on-time execution of organizational activities.",
      achievements: [
        "Coordinated internal operations involving the Head, Vice Head, and division leaders, ensuring effective collaboration across 6 divisions.",
        "Managed organizational schedules, resulting in 100% of cross-departmental activities being executed on time.",
        "Facilitated communication between leadership levels, increasing team alignment and reducing miscommunication incidents by 70%.",
        "Promoted a strong team culture by encouraging accountability and streamlining workflows, leading to improved task completion rates.",
        "Developed leadership, time management, and problem-solving skills in a fast-paced and dynamic organizational environment.",
      ],
      technologies: ["Google Workspace", "Canva", "Trello", "Public Speaking"],
      teamSize: 12, // atau jumlah real anggota inti organisasi kamu
      impact: "100% on-time execution, 70% less miscommunication",
      salary: "-",
    },
    {
      title: "Staff Member",
      company: "Himpunan Mahasiswa Sistem Informasi, Widyatama University",
      location: "Bandung, Indonesia",
      period: "2023 - 2025",
      type: "Organization",
      description:
        "Actively participated in organizational activities, teamwork, and event management as a member of the student association.",
      achievements: [
        "Supported successful organization of 5+ student events",
        "Worked closely with committees in various divisions",
      ],
      technologies: ["Collaboration", "Teamwork"],
      teamSize: 8,
      impact: "Active participation",
      salary: "-",
    },
  ];

  // Background icon simple
  const bgIcons = [
    { Icon: Building, top: 22, left: 24, size: 44, duration: 16 },
    { Icon: TrendingUp, top: 58, left: 55, size: 44, duration: 20 },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background: orb + 2 icon saja */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-600/20 dark:from-orange-400/20 dark:to-yellow-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {bgIcons.map((bg, idx) => (
          <motion.div
            key={idx}
            className="absolute text-blue-500/10 dark:text-orange-500/10"
            style={{ top: `${bg.top}%`, left: `${bg.left}%` }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: bg.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <bg.Icon size={bg.size} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title: animasi sekali */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line: animasi scaleY sekali */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 dark:from-orange-500 dark:via-yellow-500 dark:to-orange-500 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ originY: 0 }}
              />
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    {/* Card Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-orange-900/10 dark:to-yellow-900/10 rounded-2xl" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 rounded-lg flex items-center justify-center">
                            <Building size={20} className="text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-blue-600 dark:text-orange-500 bg-blue-100 dark:bg-orange-100 px-3 py-1 rounded-full">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {exp.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} />
                          Team of {exp.teamSize}
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={14} />
                          {exp.impact}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-orange-100 hover:text-blue-800 dark:hover:text-orange-800 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements (langsung tampil semua) */}
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Award size={16} className="text-yellow-500" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-3"
                            >
                              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Salary Range:</span>{" "}
                            {exp.salary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
