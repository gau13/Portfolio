import NavBar from "./components/Navbar/NavBar";
import Intro from "./components/Intro/Intro";
import Aboutme from "./components/AboutMe/Aboutme";
import Contact from "./components/Contact/Contact";
import Projects from "./components/MyProjects/Projects";
import Services from "./components/Services/Services";
import Copyright from "./components/Copyright/Copyright";
import "./index.css";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Aboutme />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
