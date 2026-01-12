import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/images/naman-home.jpg";

export default function Home() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";
  const [open, setOpen] = useState(false);

  const accent = isNetflix ? "#e50914" : "#00cfff";
  const bgGlow = isNetflix
    ? "radial-gradient(circle at top, rgba(229,9,20,0.25), transparent 60%)"
    : "radial-gradient(circle at top, rgba(0,207,255,0.25), transparent 60%)";

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
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: bgGlow,
          zIndex: 0,
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: "3.2rem", marginBottom: "1rem" }}>
            Hi, I’m{" "}
            <span style={{ color: accent, fontWeight: 800 }}>
              Naman Jain
            </span>
          </h1>

          <h2
            style={{
              fontSize: "1.4rem",
              opacity: 0.9,
              marginBottom: "1.4rem",
            }}
          >
            Software Engineer • React • Frontend & Full Stack
          </h2>

          {/* SHORT INTRO (5–6 lines only) */}
          <p
            style={{
              maxWidth: "520px",
              lineHeight: "1.7",
              opacity: 0.85,
              marginBottom: "1.8rem",
            }}
          >
            I’m a Software Engineer specializing in React.js and modern
            frontend development. I build fast, scalable, and secure web
            applications with clean UI, smooth UX, and real-world
            production experience. I also work on full-stack solutions
            using Node.js and MySQL.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              style={{
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                background: accent,
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: `0 0 30px ${accent}`,
              }}
            >
              View Projects
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              style={{
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                border: `1px solid ${accent}`,
                background: "transparent",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Know More
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <motion.img
            src={profileImg}
            alt="Naman Jain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              width: "320px",
              borderRadius: "24px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.7)",
              border: `2px solid ${accent}`,
            }}
          />
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
            background: "rgba(0,0,0,0.75)",
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
              I’m Naman Jain, a Software Engineer with hands-on experience
              in building production-level web applications. I specialize
              in React.js, JavaScript, and scalable frontend systems,
              supported by backend development using Node.js and MySQL.
            </p>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Tech Stack
            </h3>
            <p>
              React.js, JavaScript, TypeScript, Node.js, Express, MySQL,
              Firebase, HTML, CSS, Git, GitHub, JWT Authentication
            </p>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Experience
            </h3>
            <p>
              Worked on dashboards, admin panels, authentication systems,
              secure APIs, payment integrations, UI optimization, and
              real-world business applications.
            </p>

            <h3 style={{ marginTop: "1.6rem", color: accent }}>
              Available For
            </h3>
            <p>
              Full-time roles • Freelance projects • Startup
              collaborations
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpen(false)}
              style={{
                marginTop: "2rem",
                padding: "0.7rem 1.8rem",
                borderRadius: "999px",
                background: accent,
                color: "#fff",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
