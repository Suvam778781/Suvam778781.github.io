import resume from './fw20_0118-Suvam-Panda-Resume.pdf';
import suvamimage from "./suvamimage.png"
import './App.css';
import Navbar from './Components/navbar';
import { Github1 } from './Components/Githubsec';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import { useState } from 'react';
function App() {

  const [background,setbackground]=useState("#2C7598")

  return (
    <div style={{backgroundColor:background,overflow:"hidden"}} w="100%"  className="App">
    <Navbar resume={resume} setbackground={setbackground} background={background} image={suvamimage} />
    <About/>
  <Github1/>
  <Skills/>
  <Projects/>
  <Contact/>
    </div>
  );
}

export default App;
