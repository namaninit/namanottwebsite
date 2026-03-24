import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import netflixBoom from "../assets/netflix_notifications.mp3";
import character from "../assets/images/landingpage.png";

export default function Landing() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEnter = () => {
    if (started) return;
    setStarted(true);

    const audio = new Audio(netflixBoom);
    audio.volume = 0.4;
    audio.play().catch(() => {});

    // Navigate after animation
    setTimeout(() => {
      navigate("/theme");
    }, 2200);
  };

  return (
    <div style={styles.container}>
      {/* Background Glow */}
      <motion.div
        style={styles.glowBlue}
        animate={{ x: ["0%", "10%", "0%"], y: ["0%", "-10%", "0%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={styles.glowRed}
        animate={{ x: ["0%", "-10%", "0%"], y: ["0%", "10%", "0%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div style={styles.content}>
        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: started ? 0 : 1, y: started ? 20 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={styles.title}>Hi, I’m Naman</h1>
          <p style={styles.subtitle}>
            Crafting immersive web experiences
          </p>
        </motion.div>

        {/* Character */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: started ? 0 : 1, scale: started ? 0.95 : 1 }}
          transition={{ duration: 0.6 }}
          style={styles.card}
        >
          <img src={character} alt="Character" style={styles.image} />
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={handleEnter}
          disabled={started}
          whileHover={!started ? { scale: 1.05 } : {}}
          whileTap={!started ? { scale: 0.95 } : {}}
          style={{
            ...styles.button,
            opacity: started ? 0.6 : 1,
            cursor: started ? "default" : "pointer",
          }}
        >
          {started ? "Entering..." : "Enter Experience"}
        </motion.button>
      </div>

      {/* Transition Logo */}
      {started && (
        <motion.div
          style={styles.transitionContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={styles.logoCircle}
          >
            <span style={styles.logoText}>NJ</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "20px" }}
            animate={{ opacity: 1, letterSpacing: "6px" }}
            transition={{ duration: 1.2 }}
            style={styles.bigText}
          >
            NAMAN
          </motion.h1>
        </motion.div>
      )}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100dvh",
    background: "linear-gradient(135deg, #020111, #3a3a52)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
  },

  content: {
    zIndex: 2,
    textAlign: "center",
    padding: 20,
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 700,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.7,
    marginBottom: 30,
  },

  card: {
    marginBottom: 30,
    borderRadius: 20,
    overflow: "hidden",
    width: "280px",
    maxWidth: "90vw",
    marginInline: "auto",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  image: {
    width: "100%",
    display: "block",
  },

  button: {
    padding: "14px 32px",
    borderRadius: 30,
    border: "none",
    background: "linear-gradient(135deg, #00cfff, #0099cc)",
    color: "#000",
    fontWeight: 600,
    fontSize: "1rem",
    letterSpacing: "1px",
    boxShadow: "0 10px 30px rgba(0,207,255,0.3)",
    transition: "all 0.3s ease",
  },

  glowBlue: {
    position: "absolute",
    top: "-30%",
    left: "-30%",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,207,255,0.25), transparent 70%)",
    filter: "blur(80px)",
  },

  glowRed: {
    position: "absolute",
    bottom: "-30%",
    right: "-30%",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(229,9,20,0.25), transparent 70%)",
    filter: "blur(80px)",
  },

  transitionContainer: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },

  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: "2px solid #e50914",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    boxShadow: "0 0 40px rgba(229,9,20,0.6)",
    marginBottom: 20,
  },

  logoText: {
    fontSize: "2.5rem",
    fontWeight: 800,
  },

  bigText: {
    fontSize: "clamp(2.5rem, 8vw, 5rem)",
    fontWeight: 900,
  },
};