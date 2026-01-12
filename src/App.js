import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";

import Landing from "./pages/Landing";
import ThemeSelect from "./pages/ThemeSelect";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import SoftSkills from "./pages/SoftSkills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function Layout() {
  const { theme } = useTheme();

  if (!theme) {
    return <Navigate to="/theme" replace />;
  }

  return (
    <>
      <GlobalStyles theme={theme} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/theme" element={<ThemeSelect />} />

        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
