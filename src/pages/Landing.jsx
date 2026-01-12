import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import netflixBoom from "../assets/netflix_notifications.mp3";

export default function Landing() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  const startIntro = () => {
    if (started) return;
    setStarted(true);

    const audio = new Audio(netflixBoom);
    audio.volume = 0.9;
    audio.play();

    setTimeout(() => {
      navigate("/theme");
    }, 4200);
  };

  return (
    <div
      onClick={startIntro}
      style={{
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: "pointer",
        perspective: "1600px",
      }}
    >
      {/* ================= BACKGROUND WAVES ================= */}

      {/* 🔴 RED SIDE */}
      <motion.div
        animate={{ x: ["-15%", "10%", "-15%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: "-35%",
          top: "20%",
          width: "1200px",
          height: "500px",
          background:
            "linear-gradient(120deg, rgba(229,9,20,0.35), transparent 70%)",
          filter: "blur(150px)",
          transform: "rotate(-10deg)",
          zIndex: 0,
        }}
      />

      {/* 🔵 BLUE SIDE */}
      <motion.div
        animate={{ x: ["15%", "-10%", "15%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          right: "-35%",
          top: "25%",
          width: "1300px",
          height: "520px",
          background:
            "linear-gradient(240deg, rgba(0,207,255,0.35), transparent 70%)",
          filter: "blur(160px)",
          transform: "rotate(12deg)",
          zIndex: 0,
        }}
      />

      {/* ================= LIGHT STREAK FLASH ================= */}
      {started && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: [0, 0.9, 0], scaleX: [0, 1.2, 0] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, transparent, #fff, transparent)",
            top: "50%",
            zIndex: 2,
          }}
        />
      )}

      {/* ================= CAMERA SHAKE ================= */}
      <motion.div
        animate={
          started
            ? {
                x: [0, -6, 6, -4, 4, 0],
                y: [0, 4, -4, 3, -3, 0],
              }
            : {}
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ================= NJ LOGO ================= */}
        <motion.div
          initial={{ scale: 0.4, rotateY: 90, opacity: 0 }}
          animate={{
            scale: started ? 0.6 : 0.4,
            rotateY: started ? 0 : 90,
            opacity: started ? 0 : 1,
          }}
          transition={{ duration: 1.3 }}
          style={{
            position: "absolute",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "3px solid #e50914",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            boxShadow:
              "0 0 40px rgba(229,9,20,0.8), 0 0 60px rgba(0,207,255,0.6)",
            zIndex: 3,
          }}
        >
          <span
            style={{
              fontSize: "3.8rem",
              fontWeight: 900,
              color: "#fff",
              textShadow:
                "0 0 25px rgba(229,9,20,0.9), 0 0 25px rgba(0,207,255,0.8)",
            }}
          >
            NJ
          </span>
        </motion.div>

        {/* ================= NAMAN 3D TEXT ================= */}
        <motion.h1
          initial={{
            opacity: 0,
            z: -900,
            scale: 0.5,
            letterSpacing: "28px",
          }}
          animate={{
            opacity: started ? 1 : 0,
            z: started ? 0 : -900,
            scale: started ? 1 : 0.5,
            letterSpacing: started ? "6px" : "28px",
          }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          style={{
            fontSize: "5rem",
            fontWeight: 900,
            letterSpacing: "6px",
            color: "#fff",
            transformStyle: "preserve-3d",
            zIndex: 4,
            textShadow: `
              -30px 0 60px rgba(229,9,20,0.9),
               30px 0 60px rgba(0,207,255,0.9),
               0 0 120px rgba(229,9,20,0.6),
               0 0 140px rgba(0,207,255,0.6)
            `,
          }}
        >
          NAMAN
        </motion.h1>
      </motion.div>

      {/* ================= CLICK TEXT ================= */}
      {!started && (
        <div
          style={{
            position: "absolute",
            bottom: "90px",
            color: "#aaa",
            letterSpacing: "4px",
            fontSize: "0.85rem",
            zIndex: 10,
          }}
        >
          CLICK TO ENTER
        </div>
      )}
    </div>
  );
}
