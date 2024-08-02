import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import UXUIProjects from './components/UxUiProjects';
import WebProjects from './components/WebProjects';
import SliderSection from './components/SliderSection';
import CV from './components/Cv'; // Assurez-vous que l'import est correct
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Profile />
                <SliderSection />
                <Projects />
                <Skills />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/webprojet" element={<WebProjects/>} />
            <Route path="/uxuiprojet" element={<UXUIProjects/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
