import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/theme");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          color: "#fff",
          fontSize: "4rem",
          letterSpacing: "2px",
        }}
      >
        Naman
      </motion.h1>
    </div>
  );
}
