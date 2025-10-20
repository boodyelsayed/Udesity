import Navbar from './components/Navbar/Navbar';
import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Programs/Program';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Player from './components/Player/Player';


  function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle ='OUR PROGRAM' title ='What We Offer' />
        <Program />
        <About />
        <Title subTitle ='Gallery' title ='Campus Photos' />
        <Campus />
        <Title subTitle ='TESTIMONIALS' title ='What Student Says' />
        <Testimonials />
        <Title subTitle ='TESTIMONIALS' title ='What Student Says' />
        <Contact />
        <Footer />
      </div>
      {/* <Player /> */}
     
    </div>
  );
}

export default App;
 