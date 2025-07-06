import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const gridVariants = {
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [modalProjectImages, setModalProjectImages] = useState<string[] | null>(
    null
  );
  const [modalImageIdx, setModalImageIdx] = useState<number>(0);
  const [modalDesc, setModalDesc] = useState<string | null>(null);

  const projects = [
    {
      title: "Toto Profile Flutter App",
      description:
        "A simple and elegant Flutter portfolio app showcasing personal data, education, work experience, and integrated social media links.",
      features: [
        "Dark & Light Mode with smooth animation",
        "Loading Animation between pages",
        "Animated navigation cards",
        "Expandable education & project sections",
        "Social Media buttons (Instagram, Github, LinkedIn)",
      ],
      thumbnail: "/ilustrasi/profile.svg",
      images: [
        "/projects/fluter/fluter1.png",
        "/projects/fluter/fluter2.png",
        "/projects/fluter/fluter3.png",
      ],
      technologies: [
        "Flutter 3.6+",
        "Provider",
        "FontAwesome Flutter",
        "Google Fonts",
        "url_launcher",
      ],
      github: "https://github.com/Suryaalghifari/toto_profile_flutter",
      featured: true,
      role: "Solo Developer",
    },
    {
      title: "Bookshelf App",
      description:
        "A web-based bookshelf management app for tracking your reading progress. Built with HTML, CSS, and vanilla JavaScript, all data stored locally using localStorage—no backend required.",
      features: [
        "Add new books to 'Unread' or 'Read' shelf",
        "Search books by title",
        "Mark books as finished/unread",
        "Edit and delete books",
        "Auto-updated book statistics",
        "Data persistence with localStorage",
      ],
      thumbnail: "/ilustrasi/books.svg", // Gunakan icon/ilustrasi rak buku
      images: [
        "/projects/web/booksApp/bookshelf.png", // Screenshot UI utama
      ],
      technologies: [
        "HTML5",
        "CSS3 (Responsive, Flex, Grid)",
        "JavaScript (Vanilla)",
        "localStorage",
        "Font Awesome",
      ],
      github: "https://github.com/Suryaalghifari/bookshelf-app", // (Ganti dengan repo kamu jika ada)
      demo: "https://bookshelf-demo.vercel.app", // (Opsional, ganti dengan link demo kamu jika ada)
      featured: true,
      role: "Solo Developer",
    },
    {
      title: "WISE Competition 2025",
      description:
        "Landing page and competition event site for WISE InnoTech 2025, built for showcasing creativity through digital innovation and design. This project targets high school students across Indonesia, featuring complete event information, registration, timeline, guidelines, and alumni highlights. Built with WordPress and custom modules.",
      features: [
        "Responsive landing page for event promotion",
        "Online registration and guidebook download integration",
        "Detailed sections for competition format and rules",
        "Interactive event timeline and alumni showcase",
        "Grand prize announcement and contact panel",
      ],
      thumbnail: "/ilustrasi/wise.svg", // Use an event/award SVG illustration
      images: [
        "",
        // Add more screenshots if needed (ex: registration page, timeline section)
      ],
      technologies: [
        "WordPress",
        "Custom Theme & Plugin",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Elementor", // or your page builder, if used
      ],
      github: "", // Leave empty if not open source
      demo: "https://wise.widyatama.ac.id/",
      externalPreview: true,
      featured: true,
      role: "Web Developer (Front-End & Deployment)",
    },
    {
      title: "Daffa Cakes – Bakery POS & Management System (PHP Native)",
      description:
        "A modern bakery management system built with native PHP (no framework), designed for efficient handling of offline and online cake sales. The system features multi-role support (Owner, Admin, Cashier, Customer), transaction validation, daily/monthly reporting, and dynamic landing page.",
      features: [
        "Multi-role login (Owner, Admin, Cashier, Customer)",
        "Product & category management (CRUD)",
        "Offline and online sales transactions",
        "Customer order, checkout, and payment proof upload",
        "Cashier payment validation (offline/online)",
        "Interactive dashboard (sales chart, revenue stats)",
        "Printable daily & monthly reports",
        "Dynamic landing page (Hero, About Us, Contact)",
        "Profile photo upload/change for all users",
        "Interactive notifications (SweetAlert2)",
      ],
      thumbnail: "/ilustrasi/POS.svg", // Pakai ilustrasi toko kue, atau icon cake/bakery SVG
      images: [
        "/projects/web/pos/pos1.png",
        "/projects/web/pos/post2.png",
        "/projects/web/pos/post3.png",
        "/projects/web/pos/post4.png",
        // Add more screenshots if you want (dashboard, report, landing page, etc)
      ],
      technologies: [
        "PHP Native",
        "MySQL",
        "JavaScript & AJAX",
        "Bootstrap 4",
        "SB Admin 2",
        "SweetAlert2",
        "Font Poppins",
      ],
      github: "https://github.com/Suryaalghifari/daffa_cakes",
      demo: "", // Empty, unless you have a live demo link
      featured: true,
      role: "Fullstack Developer",
    },
    {
      title: "Inventory Management System – Fitri Hijab Pelangi (Laravel 9)",
      description:
        "A web-based inventory management system for Fitri Hijab Pelangi (SME, Bandung), designed to monitor and control stock in and out, and to automate real-time inventory reports. Built using Laravel 9, the system features dynamic role-based access, an integrated dashboard, and complete CRUD for inventory items.",
      features: [
        "Real-time interactive dashboard",
        "Item master data (type, unit, brand, product with images, price, stock)",
        "Supplier management",
        "Stock transactions: incoming and outgoing items",
        "Comprehensive reports (inbound, outbound, current stock)",
        "System settings: roles & permissions, dynamic menu, web configuration",
        "Role-permission management for flexible access control",
      ],
      thumbnail: "/ilustrasi/inventory.svg", // Use an inventory/warehouse SVG illustration
      images: [
        "/projects/web/inventory/inventory1.png",
        "/projects/web/inventory/inventory2.png",
        "/projects/web/inventory/inventory3.png",
        "/projects/web/inventory/inventory4.png",
        "/projects/web/inventory/inventory5.png",
        "/projects/web/inventory/inventory6.png",
        "/projects/web/inventory/inventory7.png",
        "/projects/web/inventory/inventory8.png",
        // Add more screenshots as needed (dashboard, transaction, reports)
      ],
      technologies: [
        "Laravel 9",
        "PHP",
        "MySQL",
        "Yajra Datatables",
        "jQuery",
        "SweetAlert2",
        "Datetime Picker",
      ],
      github: "https://github.com/Suryaalghifari/Gudang-Inventaris",
      demo: "", // (leave empty unless you have a live link)
      featured: true,
      role: "Fullstack Web Developer",
    },
    {
      title:
        "Kelurahan Kademangan – Online Administrative Services App (CodeIgniter)",
      description:
        "A simple web application for online administrative services at Kelurahan Kademangan. Built using CodeIgniter, the system streamlines official letter requests and public complaints for citizens and administrators.",
      features: [
        "Landing page with general information and service navigation",
        "Admin dashboard with login and data management",
        "Online request for SKCK introduction letter",
        "Online request for marriage certificate",
        "Public complaint submission and management",
        "Easy-to-use forms for various administrative services",
      ],
      thumbnail: "/ilustrasi/government.svg", // Use a public service/civil/government SVG icon/illustration
      images: [
        "/projects/web/kelurahan/kelurahan1.png", // landing page
        "/projects/web/kelurahan/kelurahan2.png", // form SKCK
        "/projects/web/kelurahan/kelurahan3.png", // form marriage letter
        "/projects/web/kelurahan/kelurahan4.png", // complaint form
        "/projects/web/kelurahan/kelurahan5.png", // admin login
        "/projects/web/kelurahan/kelurahan6.png", // dashboard
        "/projects/web/kelurahan/kelurahan7.png", // complaint management
      ],
      technologies: ["PHP", "CodeIgniter4", "MySQL", "Bootstrap"],
      github: "https://github.com/Suryaalghifari/KelurahanKademangan",
      demo: "", // leave empty if there's no live link
      featured: true,
      role: "Fullstack Web Developer",
    },
    {
      title: "Pasar Tani Digital – Agricultural Marketplace Platform",
      description:
        "A web-based platform connecting farmers, consumers, government admins, and pick-up point staff for direct and transparent agricultural product transactions. The system facilitates product management, real-time order processing, and efficient distribution through digital innovation.",
      features: [
        "Farmer: manage products, view orders, profile settings, registration & login",
        "Consumer: search & order products, select pick-up points, online payment, real-time notifications",
        "Government Admin: manage accounts & products, verify transactions, control distribution",
        "Pick-Up Staff: update order status, verify pick-up points",
        "REST API integration between Laravel frontend and Express.js backend",
        "Role-based access and dynamic dashboard for each user type",
      ],
      thumbnail: "/ilustrasi/pasarTani.svg", // Use an illustration of market, agriculture, or produce (SVG)
      images: [
        "/projects/web/pasarTani/PasarTani1.png",
        "/projects/web/pasarTani/PasarTani2.png",
        "/projects/web/pasarTani/PasarTani3.png",
        "/projects/web/pasarTani/PasarTani4.png",
        "/projects/web/pasarTani/PasarTani5.png",
        "/projects/web/pasarTani/PasarTani6.png",
        "/projects/web/pasarTani/PasarTani7.png",
        "/projects/web/pasarTani/PasarTani8.png",
        "/projects/web/pasarTani/PasarTani9.png",
        "/projects/web/pasarTani/PasarTani10.png",
        "/projects/web/pasarTani/PasarTani11.png",
        "/projects/web/pasarTani/PasarTani12.png",
        "/projects/web/pasarTani/PasarTani13.png",
        "/projects/web/pasarTani/PasarTani14.png",
        "/projects/web/pasarTani/PasarTani15.png",
        "/projects/web/pasarTani/PasarTani16.png",
        "/projects/web/pasarTani/PasarTani17.png",
        "/projects/web/pasarTani/PasarTani19.png",
        "/projects/web/pasarTani/PasarTani20.png",
        "/projects/web/pasarTani/PasarTani21.png",

        // Add more screenshots if needed: dashboard, product page, order flow, etc.
      ],
      technologies: [
        "Laravel (Blade + Bootstrap)",
        "Express.js (Node.js API)",
        "MongoDB",
        "REST API",
      ],
      github: "https://github.com/Suryaalghifari/PasarTani",
      demo: "", // leave empty if not deployed online
      featured: false,
      role: "Fullstack Web Developer",
    },
    {
      title:
        "Disdukcapil Digital – Civil Registration & Administration Platform",
      description:
        "A web-based digital administration platform for the Department of Population and Civil Registration (Disdukcapil). Built with CodeIgniter 4, this system enables citizens to apply for and receive digital documents—such as ID cards (KTP), birth certificates, and family cards—completely online.",
      features: [
        "Citizen registration with email verification",
        "Secure citizen login",
        "Online application for digital civil documents: Birth Certificate, Family Card, National ID (KTP), Moving Letter, Death Certificate, Marriage/Divorce Certificate, Child ID Card (KIA)",
        "Automated application forms and status tracking",
        "Generate and download PDF documents via DOMPDF",
        "Application history and real-time status monitoring",
      ],
      thumbnail: "/ilustrasi/disdukcapil.svg",
      images: [
        "/projects/web/disdukcapil/disdukcapil1.png",
        "/projects/web/disdukcapil/disdukcapil2.png",
        "/projects/web/disdukcapil/disdukcapil3.png",
        "/projects/web/disdukcapil/disdukcapil4.png",
        "/projects/web/disdukcapil/disdukcapil5.png",
        "/projects/web/disdukcapil/disdukcapil6.png",
        "/projects/web/disdukcapil/disdukcapil7.png",
      ],
      technologies: [
        "CodeIgniter 4",
        "PHP 8.x",
        "MySQL/MariaDB",
        "DOMPDF",
        "MVC Architecture",
      ],
      github: "https://github.com/Suryaalghifari/Disdukcapil",
      demo: "",
      featured: false,
      role: "Fullstack Web Developer",
      notes:
        "Screenshots shown are for demonstration of the KTP (ID card) PDF generation feature only.",
    },

    // ... project lain
  ];

  const bgIcons = useMemo(
    () =>
      [...Array(3)].map(() => ({
        top: Math.random() * 80 + 5,
        left: Math.random() * 80 + 5,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 2,
      })),
    []
  );

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const allDisplayed = showAll ? projects : featuredProjects;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 dark:from-orange-400/20 dark:to-yellow-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {bgIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500/10 dark:text-orange-500/10"
            style={{
              top: `${icon.top}%`,
              left: `${icon.left}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay,
            }}
          >
            <Github size={24} />
          </motion.div>
        ))}
      </div>
      {/* End Animated Background */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* GRID PROJECTS TANPA ANIMASI MOTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allDisplayed.map((project, idx) => (
            <div
              key={project.title + idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col transform-gpu hover:scale-[1.04] hover:-translate-y-1"
              style={{ willChange: "transform, box-shadow" }}
            >
              <div className="relative group">
                {/* Thumbnail utama project */}
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-contain cursor-pointer bg-white"
                    loading="lazy"
                    style={{ padding: "20px" }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* Overlay aksi */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-auto">
                  <div className="p-4 flex space-x-3">
                    {project.images && project.images.length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (project.externalPreview) {
                            window.open(project.demo, "_blank");
                          } else {
                            setModalProjectImages(project.images);
                            setModalImageIdx(0);
                          }
                        }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                        aria-label="Preview Images"
                      >
                        <Eye size={18} />
                      </button>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                      aria-label="View Github"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-orange-500 dark:to-yellow-500 text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <p
                    className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${
                      project.description.length > 80 ? "line-clamp-3" : ""
                    }`}
                  >
                    {project.description}
                  </p>
                  {project.description.length > 80 && (
                    <button
                      className="text-blue-500 underline mt-1 text-xs"
                      onClick={() => setModalDesc(project.description)}
                      type="button"
                      style={{ marginTop: "-6px" }}
                    >
                      Read More
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-orange-100 text-blue-800 dark:text-orange-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.demo || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 text-white rounded-lg font-medium text-center hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-blue-600 dark:border-orange-500 text-blue-600 dark:text-orange-500 rounded-lg font-medium text-center hover:bg-blue-600 dark:hover:bg-orange-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
              {/* Hover gradient effect */}
              {hoveredProject === idx && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-orange-500/10 dark:to-yellow-600/10 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Show More/Less */}
        {otherProjects.length > 0 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300 flex items-center gap-2 mx-auto"
            >
              {showAll ? (
                <>
                  Show Less Projects
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More Projects ({otherProjects.length} more)
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}

        {/* === MODAL GALLERY & DESC === */}
        {modalProjectImages && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setModalProjectImages(null)}
          >
            <div
              className="relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalProjectImages[modalImageIdx]}
                alt={`Preview ${modalImageIdx + 1}`}
                className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl border-4 border-white object-contain"
                loading="lazy"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {modalProjectImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setModalImageIdx(i)}
                    className={`w-5 h-5 rounded-full border-2 ${
                      modalImageIdx === i
                        ? "border-blue-500"
                        : "border-gray-400"
                    } overflow-hidden`}
                  >
                    <img
                      src={img}
                      alt={`thumb${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              {/* Prev / Next Buttons */}
              {modalProjectImages.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-white rounded-full px-2 py-1 text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImageIdx((idx) =>
                        idx === 0 ? modalProjectImages.length - 1 : idx - 1
                      );
                    }}
                  >
                    &lt;
                  </button>
                  <button
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-white rounded-full px-2 py-1 text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImageIdx((idx) =>
                        idx === modalProjectImages.length - 1 ? 0 : idx + 1
                      );
                    }}
                  >
                    &gt;
                  </button>
                </>
              )}
              <button
                className="absolute top-8 right-10 text-white text-4xl font-bold bg-black/40 rounded-full px-4 py-1 hover:bg-black/80 transition"
                onClick={() => setModalProjectImages(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
        {/* === END MODAL === */}

        {modalDesc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setModalDesc(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-3xl text-gray-400 hover:text-gray-700 dark:hover:text-white"
                onClick={() => setModalDesc(null)}
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Full Description
              </h2>
              <p className="text-gray-600 dark:text-gray-200">{modalDesc}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
