import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import Project from './MyComponents/Project';


function App() {
  return (
    <div className="content">
      <BrowserRouter>

        <header>
          <h2>MY PORTFOLIO</h2>
          <nav className="nav-links" >
            <Link className='Link' to="/">Home</Link>
            <Link className='Link' to="/about">About</Link>
            <Link className='Link' to="/contact">Contact</Link>
            <Link className='Link' to="/projects">Projects</Link>
          </nav>
        </header>


        {/* <header>
          <h2>MY PORTFOLIO</h2>
          <nav>
            <Link className='Link' to="/">Home</Link>
            <Link className='Link' to="/about">About</Link>
            <Link className='Link' to="/contact">Contact</Link>
            <Link className='Link' to="/projects">Projects</Link>
          </nav>
        </header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <p>@ 2024 Hemant Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
