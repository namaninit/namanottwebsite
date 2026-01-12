import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";
  const glowColor = isNetflix ? "#e50914" : "#00cfff";

  const [submitted, setSubmitted] = useState(false);

  const inputStyle = {
    padding: "0.9rem 1.2rem",
    borderRadius: "12px",
    border: `1px solid ${glowColor}`,
    background: "transparent",
    color: "#fff",
    outline: "none",
    fontSize: "0.95rem",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "6rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "2.8rem", textAlign: "center" }}
        >
          Let’s <span style={{ color: glowColor }}>Connect</span>
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            opacity: 0.85,
            margin: "1rem 0 3rem",
          }}
        >
          Have a project, idea, or opportunity? I’d love to hear from you.
        </p>

        {/* FORM / SUCCESS */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              style={{
                display: "grid",
                gap: "1.5rem",
                background: isNetflix ? "#141414" : "#0f2a44",
                padding: "2.5rem",
                borderRadius: "20px",
                boxShadow: `0 0 40px ${glowColor}55`,
              }}
            >
              <input placeholder="Your Name" required style={inputStyle} />
              <input type="email" placeholder="Your Email" required style={inputStyle} />
              <textarea
                placeholder="Your Message"
                rows="5"
                required
                style={inputStyle}
              />

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${glowColor}` }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{
                  padding: "0.9rem",
                  borderRadius: "30px",
                  border: "none",
                  background: glowColor,
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Send Message 🚀
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                background: isNetflix ? "#141414" : "#0f2a44",
                padding: "3rem",
                borderRadius: "20px",
                boxShadow: `0 0 40px ${glowColor}55`,
              }}
            >
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
                Thank you for reaching out! 🙌
              </h3>
              <p style={{ opacity: 0.85, lineHeight: "1.6" }}>
                Your message has been received.  
                I’ll get back to you soon 🚀
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SOCIAL ICONS */}
        <div
          style={{
            marginTop: "3.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "2.2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/naman-k-jain-90699b279/", label: "LinkedIn" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/i_m_k_naman__", label: "Instagram" },
            { icon: <FaEnvelope />, link: "mailto:naman257917@gmail.com", label: "Email" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@SeriesBuddy-p9", label: "YouTube" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.25,
                rotate: 8,
                boxShadow: `0 0 45px ${glowColor}`,
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: isNetflix ? "#141414" : "#0f2a44",
                border: `1px solid ${glowColor}`,
                color: glowColor,
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
