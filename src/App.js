import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact'
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
