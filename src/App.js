import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ModelList } from './components/ModelList';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <section id="Navbar">
        <Navbar />
      </section>
      <section id="Hero">
        <Hero />
      </section>
      <section id="ModelList">
        <ModelList />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Newsletter">
        <Newsletter />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;