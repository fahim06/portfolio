import RootLayout from './layouts/RootLayout.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';
import Certificates from './sections/Certificates.jsx';
import TechStack from './sections/TechStack.jsx';
import Resume from './sections/Resume.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <RootLayout>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <TechStack />
      <Resume />
      <Contact />
    </RootLayout>
  );
}
