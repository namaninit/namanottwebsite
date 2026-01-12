import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSelect() {
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const handleSelect = (selectedTheme) => {
    setTheme(selectedTheme);
    navigate("/home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Netflix Card */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleSelect("netflix")}
        style={{
          width: "280px",
          height: "180px",
          background: "linear-gradient(135deg, #1c1c1c, #000)",
          border: "2px solid #e50914",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(229,9,20,0.4)",
        }}
      >
        <h2 style={{ color: "#e50914", fontSize: "1.8rem" }}>
          🎬 Naman Netflix
        </h2>
      </motion.div>

      {/* Prime Card */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleSelect("prime")}
        style={{
          width: "280px",
          height: "180px",
          background: "linear-gradient(135deg, #0a1a2f, #020b16)",
          border: "2px solid #00cfff",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 0 30px rgba(0,207,255,0.5)",
        }}
      >
        <h2 style={{ color: "#00cfff", fontSize: "1.8rem" }}>
          📺 Naman Prime
        </h2>
      </motion.div>
    </div>
  );
}
