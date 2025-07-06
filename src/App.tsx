import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { useTheme } from "./hooks/useTheme";

function App() {
  useTheme();

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 relative">
        <AnimatedBackground />
        <ScrollIndicator />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
