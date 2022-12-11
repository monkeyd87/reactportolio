
import Navbar from "./components/Nav"
import About from "./components/About";
import Projects from "./components/Projects";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
