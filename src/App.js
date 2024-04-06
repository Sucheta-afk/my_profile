import Layout from "./components/Layout/Layout";
import Techstack from "./pages/Techstack/Techstack";
import About from './pages/about/about';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Layout/>    
      <div className="container">
        <About/>
        <Techstack/>
        <Projects/>
        </div>  
      
    </>
  );
}

export default App;
