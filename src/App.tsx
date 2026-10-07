import Hero from "./components/Hero.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <>
      <nav className="nav container">
        <a className="brand">
          zt3xdv
        </a>

        <div className="nav-links">
          <a href="#skills">Stack</a>
          <a href="#projects">Projects</a>
          <a className="nav-github" href="https://github.com/zt3xdv">
            GitHub
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
