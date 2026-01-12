import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isNetflix = theme === "netflix";
const currentYear = new Date().getFullYear();
  const bg = isNetflix ? "#141414" : "#0f2a44";
  const textColor = isNetflix ? "#e50914" : "#00cfff";

  return (
    <footer
      style={{
        background: bg,
        color: textColor,
        padding: "2rem 1.5rem",
        textAlign: "center",
        fontSize: "0.95rem",
        letterSpacing: "0.5px",
        borderTop: `1px solid ${textColor}`,
        marginTop: "4rem",
      }}
    >
     <p>© {currentYear} Your Name. All rights reserved.</p>
    </footer>
  );
}
