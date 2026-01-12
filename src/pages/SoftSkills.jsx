import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const skills = ["Client-Focused Delivery", "Strong Work Ethic"];

export default function SoftSkills() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";

  return (
    <div
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "2.4rem", marginBottom: "3rem" }}
      >
        Skills & Learning
      </motion.h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              padding: "1rem 2rem",
              borderRadius: "999px",
              background: isNetflix ? "#e50914" : "#00cfff",
              color: "#000",
              fontWeight: "600",
              boxShadow: isNetflix
                ? "0 6px 20px rgba(229,9,20,0.6)"
                : "0 0 25px rgba(0,207,255,0.6)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
