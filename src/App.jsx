import './App.css';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Contact,
} from './components/index.js';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
