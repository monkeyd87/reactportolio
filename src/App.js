
import Navbar from "./components/Nav"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/contact"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>  
    </div>
  );
}

export default App;
