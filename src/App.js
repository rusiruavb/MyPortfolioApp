import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Service from './components/Services';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contanct';

export default function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <AboutMe/>
      <Service/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

