import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const bgColor = theme === "netflix" ? "rgba(0,0,0,0.85)" : "rgba(6,24,38,0.9)";
  const accent = theme === "netflix" ? "#e50914" : "#00cfff";

  /* 🔥 SCROLL EFFECT */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🔥 AUTO CLOSE MOBILE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* HEADER */}
      <motion.header
        animate={{
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.5)" : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: bgColor,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{
            textShadow: `0 0 18px ${accent}`,
          }}
          onClick={() => navigate("/home")}
          style={{
            fontSize: "1.7rem",
            fontWeight: "800",
            cursor: "pointer",
            color: accent,
            letterSpacing: "1px",
          }}
        >
          Naman
        </motion.div>

        {/* DESKTOP MENU */}
        <nav
          className="desktop-menu"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.label}
                onClick={() => navigate(item.path)}
                whileHover={{ scale: 1.05 }}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? accent : "#fff",
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: accent,
                      borderRadius: "2px",
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* 🔘 THEME BUTTON */}
          <motion.button
            onClick={() => navigate("/theme")}
            whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${accent}` }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.5rem 1.2rem",
              fontSize: "0.9rem",
              fontWeight: "600",
              borderRadius: "6px",
              border: `1px solid ${accent}`,
              background: "transparent",
              color: accent,
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          >
            Change Theme
          </motion.button>
        </nav>

        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setOpen(true)}
          style={{
            display: "none",
            fontSize: "1.9rem",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          ☰
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "75%",
              height: "100vh",
              background: bgColor,
              zIndex: 2000,
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
            }}
          >
            <div
              onClick={() => setOpen(false)}
              style={{
                alignSelf: "flex-end",
                fontSize: "1.6rem",
                cursor: "pointer",
                color: accent,
              }}
            >
              ✕
            </div>

            {menuItems.map((item) => (
              <motion.span
                key={item.label}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                style={{
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  fontWeight:
                    location.pathname === item.path ? "600" : "400",
                  color:
                    location.pathname === item.path ? accent : "#fff",
                }}
              >
                {item.label}
              </motion.span>
            ))}

            {/* MOBILE BUTTON */}
            <motion.button
              onClick={() => navigate("/theme")}
              whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${accent}` }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: "2rem",
                padding: "0.6rem 1.4rem",
                fontSize: "1rem",
                fontWeight: "600",
                borderRadius: "6px",
                border: `1px solid ${accent}`,
                background: "transparent",
                color: accent,
                cursor: "pointer",
              }}
            >
              Choose Theme
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important; 
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
