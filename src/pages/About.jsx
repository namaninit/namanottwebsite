import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/images/naman-about.jpg";

export default function About() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(""); // For temporary message on download

  const accent = isNetflix ? "#e50914" : "#00cfff";

  // Handle "Download Resume" click
  const handleDownloadClick = () => {
    setMsg("Coming Soon (Under Creation)");
    setTimeout(() => setMsg(""), 3000); // Clear message after 3 seconds
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND LIGHT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isNetflix
            ? "radial-gradient(circle at left, rgba(229,9,20,0.15), transparent 60%)"
            : "radial-gradient(circle at left, rgba(0,207,255,0.15), transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* GRID */}
      <div
        className="about-grid"
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "3.5rem",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <motion.img
            src={profileImg}
            alt="About Naman"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{
              width: "300px",
              borderRadius: "22px",
              border: `2px solid ${accent}`,
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
            }}
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: "2.8rem", marginBottom: "1.2rem" }}>
            About <span style={{ color: accent }}>Me</span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              opacity: 0.9,
              marginBottom: "1.6rem",
            }}
          >
            I’m <strong>Naman Jain</strong>, a Software Engineer with hands-on
            experience in frontend and full-stack development. I build
            scalable, secure, and visually polished web applications with
            real-world production experience.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              style={{
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                background: accent,
                color: "#fff",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: `0 0 25px ${accent}`,
              }}
            >
              Know More
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadClick}
              style={{
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                border: `1px solid ${accent}`,
                color: "#fff",
                background: "transparent",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Download Resume
            </motion.button>
          </div>

          {/* TEMP MESSAGE */}
          {msg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ marginTop: "1rem", color: accent, fontWeight: 500 }}
            >
              {msg}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* MODAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
            padding: "1.5rem",
          }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "900px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "#111",
              borderRadius: "24px",
              padding: "2.5rem",
              border: `1px solid ${accent}`,
            }}
          >
            <h2 style={{ color: accent }}>About Me</h2>

            <p style={{ lineHeight: "1.8", opacity: 0.9 }}>
              I’m Naman Jain, a Software Engineer experienced in building
              modern frontend interfaces and full-stack web applications.
              I specialize in React.js, JavaScript, and scalable UI systems
              backed by Node.js and MySQL.
            </p>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Technical Skills
            </h3>
            <p>
              React.js, JavaScript, TypeScript, Angular, Node.js, Express,
              MySQL, Firebase, HTML, CSS, Git, GitHub, JWT Authentication
            </p>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Professional Experience
            </h3>
            <p>
              Worked on production dashboards, admin panels, authentication
              systems, payment integrations, UI optimization, and AI-based
              automation tools across multiple organizations.
            </p>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Education
            </h3>
            <ul style={{ lineHeight: "1.8", opacity: 0.9 }}>
              <li>Bachelor of Computer Application – MATS University</li>
              <li>12th – DAV Public School</li>
              <li>10th – Kendriya Vidyalaya (KVS)</li>
            </ul>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Certifications
            </h3>
            <ul style={{ lineHeight: "1.8", opacity: 0.9 }}>
              <li>Warrior – Infosys</li>
              <li>Java FullStack with Reactjs – Qspiders</li>
              <li>JavaScript Course with Certification – Scaler</li>
              <li>React JS Certification – Scaler</li>
            </ul>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Career Focus
            </h3>
            <p>
              Frontend & Full-Stack Roles • Freelance Projects • Startup &
              Long-Term Collaborations
            </p>

            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleDownloadClick}
                style={{
                  padding: "0.7rem 1.8rem",
                  borderRadius: "999px",
                  background: accent,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Download Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setOpen(false)}
                style={{
                  padding: "0.7rem 1.8rem",
                  borderRadius: "999px",
                  border: `1px solid ${accent}`,
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Close
              </motion.button>
            </div>

            {/* TEMP MESSAGE in modal */}
            {msg && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ marginTop: "1rem", color: accent, fontWeight: 500 }}
              >
                {msg}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
