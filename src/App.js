import resume from './fw20_0118-Suvam-Panda-Resume.pdf';
import suvamimage from "./suvamimage.png"
import './App.css';
import Navbar from './Components/navbar';
import { Github1 } from './Components/Githubsec';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import { useEffect, useState } from 'react';
import Experience from './Components/Experience';
function App() {

  const [background,setbackground]=useState("#2C7598")
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{backgroundColor:background,overflow:"hidden"}} w="100%"  className="App">
    <Navbar scrollPosition={scrollPosition} resume={resume} setbackground={setbackground} background={background} image={suvamimage} />
    <About/>
  <Experience/>
  <Github1/>
  <Skills/>
  <Projects/>
  <Contact/>
    </div>
  );
}

export default App;
