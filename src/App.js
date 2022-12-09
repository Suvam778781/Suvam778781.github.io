import resume from './Suvam_Panda_Resume.pdf';
import suvamimage from "./suvamimage.png"
import './App.css';
import Navbar from './Components/navbar';
import { Github1 } from './Components/Githubsec';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
function App() {
  return (
    <div style={{backgroundColor:"#2C7598",overflow:"hidden"}} w="100%"  className="App">
    <Navbar resume={resume} image={suvamimage}/>
    <About/>
  <Github1/>
  <Skills/>
  <Projects/>
  <Contact/>
    </div>
  );
}

export default App;
