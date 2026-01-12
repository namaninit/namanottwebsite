import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import netflixCharacter from "../assets/images/netflix-character.png";
import primeCharacter from "../assets/images/prime-character.png";

export default function Skills() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";
  const accent = isNetflix ? "#e50914" : "#00cfff";

  const characterImage = isNetflix ? netflixCharacter : primeCharacter;

  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js", "AngularJS", "Bootstrap", "Servlets"],
    },
    {
      title: "Libraries & Tools",
      skills: ["Git/GitHub", "MySQL", "JDBC", "Figma", "JSON", "Media Queries"],
    },
    {
      title: "Cloud & Integrations",
      skills: [
        "Firebase (Firestore, Auth)",
        "Netlify (Hosting & Deployment)",
        "Postman (API Testing)",
        "AI Tools (Image Generation, Prompt Creation)",
        "Domain & Hosting (DNS, Google Workspace)",
        "Email Integration (Gmail API, Notifications)",
      ],
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
      {/* 🌫 BACKGROUND CHARACTER */}
      <motion.img
        src={characterImage}
        alt="Decorative character"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: "-180px",
          bottom: "-80px",
          width: "480px",
          opacity: 0.16,
          pointerEvents: "none",
          filter: `drop-shadow(0 0 60px ${accent}55)`,
          zIndex: 0,
        }}
      />

      {/* 🧠 CONTENT */}
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
            marginBottom: "3.5rem",
          }}
        >
          My <span style={{ color: accent }}>Skills</span>
        </motion.h2>

        {/* SKILL GROUPS */}
        {categories.map((category, idx) => (
          <div key={idx} style={{ marginBottom: "3rem" }}>
            <h3
              style={{
                marginBottom: "1.4rem",
                fontSize: "1.5rem",
              }}
            >
              {category.title}
            </h3>

            <div
              style={{
                display: "flex",
                gap: "1.2rem",
                flexWrap: isNetflix ? "nowrap" : "wrap",
                overflowX: isNetflix ? "auto" : "visible",
                paddingBottom: "0.8rem",
              }}
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.12,
                    boxShadow: `0 0 30px ${accent}`,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    padding: "0.9rem 1.8rem",
                    borderRadius: "999px",
                    background: isNetflix ? "#141414" : "#0f2a44",
                    whiteSpace: "nowrap",
                    fontWeight: "600",
                    cursor: "default",
                    boxShadow: isNetflix
                      ? "0 6px 25px rgba(0,0,0,0.6)"
                      : "0 0 25px rgba(0,207,255,0.25)",
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 📱 RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          img[alt="Decorative character"] {
            right: -260px;
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
