import NavBar from "./components/Navbar/NavBar";
import Intro from "./components/Intro/Intro";
import Aboutme from "./components/AboutMe/Aboutme";
import Contact from "./components/Contact/Contact";
import Projects from "./components/MyProjects/Projects";
import Services from "./components/Services/Services";
import Copyright from "./components/Copyright/Copyright";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Aboutme />
      <Services />
      <Projects />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
