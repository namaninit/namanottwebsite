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

  const accent = theme === "netflix" ? "#e50914" : "#00cfff";

  /* ✅ SMOOTH SCROLL DETECTION */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ✅ CLOSE MOBILE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ✅ FIXED HEADER */}
      <motion.header
        initial={false}
        animate={{
          backdropFilter: "blur(12px)",
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.75)"
            : "rgba(10,10,10,0.55)",
          boxShadow: scrolled
            ? "0 8px 30px rgba(0,0,0,0.4)"
            : "none",
        }}
        transition={{ duration: 0.25 }}
        style={styles.header}
      >
        {/* LOGO */}
        <div
          onClick={() => navigate("/home")}
          style={{ ...styles.logo, color: accent }}
        >
          Naman
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-menu" style={styles.nav}>
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <div
                key={item.label}
                onClick={() => navigate(item.path)}
                style={{
                  ...styles.link,
                  color: active ? accent : "#fff",
                }}
              >
                {item.label}

                {active && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: -6,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: accent,
                      borderRadius: 2,
                    }}
                  />
                )}
              </div>
            );
          })}

          <button
            onClick={() => navigate("/theme")}
            style={{
              ...styles.button,
              borderColor: accent,
              color: accent,
            }}
          >
            Theme
          </button>
        </nav>

        {/* MOBILE ICON */}
        <div
          className="hamburger"
          onClick={() => setOpen(true)}
          style={styles.hamburger}
        >
          ☰
        </div>
      </motion.header>

      {/* ✅ SPACER (VERY IMPORTANT) */}
      <div style={{ height: "80px" }} />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            style={styles.mobileMenu}
          >
            <div
              onClick={() => setOpen(false)}
              style={{ ...styles.close, color: accent }}
            >
              ✕
            </div>

            {menuItems.map((item) => (
              <div
                key={item.label}
                onClick={() => navigate(item.path)}
                style={{
                  ...styles.mobileLink,
                  color:
                    location.pathname === item.path ? accent : "#fff",
                }}
              >
                {item.label}
              </div>
            ))}
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

/* ---------- STYLES ---------- */

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 9999,
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    cursor: "pointer",
  },

  nav: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },

  link: {
    position: "relative",
    fontSize: "0.95rem",
    cursor: "pointer",
  },

  button: {
    padding: "6px 14px",
    borderRadius: "999px",
    border: "1px solid",
    background: "transparent",
    cursor: "pointer",
  },

  hamburger: {
    display: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
  },

  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "75%",
    height: "100vh",
    background: "#0b0b0b",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    zIndex: 10000,
  },

  mobileLink: {
    fontSize: "1.2rem",
    cursor: "pointer",
  },

  close: {
    alignSelf: "flex-end",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};