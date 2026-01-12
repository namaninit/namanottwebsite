import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import netflixCharacter from "../assets/images/netflix-character.png";
import primeCharacter from "../assets/images/prime-character.png";

export default function Projects() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";
  const accent = isNetflix ? "#e50914" : "#00cfff";

  const characterImage = isNetflix ? netflixCharacter : primeCharacter;

  const projects = [
    {
      title: "HireFlow — AI-Powered Hiring Platform",
      description:
        "A role-based recruitment platform featuring Admin, Company, and Candidate dashboards with secure authentication, job management, analytics, and AI-assisted candidate shortlisting.",
      tech: "React.js, Node.js, Express, MySQL, Sequelize, JWT, AI APIs",
    },
    {
      title: "StreamX UI — OTT Platform Experience",
      description:
        "A cinematic OTT platform UI inspired by Netflix and Prime Video with animated carousels, hover previews, dynamic filtering, and smooth transitions.",
      tech: "React.js, Framer Motion, JavaScript, REST APIs, CSS",
    },
    {
      title: "AutoWeb — AI Website Builder",
      description:
        "A no-code website builder that generates complete website structures including navigation, sections, animations, and responsive layouts from user input.",
      tech: "React.js, Node.js, Express, AI APIs, CSS Animations",
    },
    {
      title: "SaaSBoard — Admin Analytics Dashboard",
      description:
        "A scalable admin dashboard for SaaS applications with user management, role-based access, activity logs, and performance analytics.",
      tech: "React.js, Node.js, MySQL, JWT, Chart.js",
    },
    {
      title: "SecureAuth — Multi-Role Authentication System",
      description:
        "A production-ready authentication system supporting multiple user roles, protected routes, JWT-based security, and scalable backend architecture.",
      tech: "React.js, Node.js, Express, JWT, MySQL",
    },
    {
      title: "EventSphere — Smart Event Management Platform",
      description:
        "An end-to-end event management platform with registrations, admin moderation, analytics dashboards, and responsive UI optimized for high traffic.",
      tech: "React.js, Node.js, Express, MySQL, JWT",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🎬 BACKGROUND CHARACTER */}
      <motion.img
        src={characterImage}
        alt="Decorative character"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "-180px",
          bottom: "-80px",
          width: "480px",
          opacity: 0.16,
          pointerEvents: "none",
          filter: `drop-shadow(0 0 60px ${accent}55)`,
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2.6rem",
            marginBottom: "1.2rem",
          }}
        >
          Featured <span style={{ color: accent }}>Projects</span>
        </motion.h2>

        <p
          style={{
            maxWidth: "650px",
            opacity: 0.85,
            marginBottom: "3.5rem",
            lineHeight: "1.6",
          }}
        >
          Concept-driven, production-oriented projects designed to demonstrate
          real-world frontend and full-stack engineering skills.
        </p>

        {/* PROJECT GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.8rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: `0 0 45px ${accent}`,
              }}
              transition={{ type: "spring", stiffness: 160 }}
              style={{
                padding: "2.4rem",
                borderRadius: "20px",
                background: isNetflix ? "#141414" : "#0f2a44",
                boxShadow: isNetflix
                  ? "0 20px 55px rgba(0,0,0,0.7)"
                  : "0 0 40px rgba(0,207,255,0.25)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.6rem",
                  marginBottom: "1rem",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  opacity: 0.85,
                  lineHeight: "1.55",
                  marginBottom: "1.4rem",
                }}
              >
                {project.description}
              </p>

              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  opacity: 0.75,
                }}
              >
                {project.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 📱 MOBILE */}
      <style>{`
        @media (max-width: 900px) {
          img[alt="Decorative character"] {
            left: -260px;
            width: 360px;
            opacity: 0.12;
          }
        }

        @media (max-width: 768px) {
          img[alt="Decorative character"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
