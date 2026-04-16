import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Home from './MyComponents/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* your other routes */}
      </Routes>
      <Footer />
    </HashRouter>

  );
}

export default App;
;