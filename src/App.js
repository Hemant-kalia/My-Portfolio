import './App.css';
import './MyComponents/Styles/Header.css';
import './MyComponents/Styles/Footer.css';
import './MyComponents/Styles/Home.css';
import './MyComponents/Styles/About.css';
import './MyComponents/Styles/Contact.css';
import './MyComponents/Styles/Project.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';
import Project from './MyComponents/Project';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>

      <Footer />

    </HashRouter>

  );
}

export default App;
;