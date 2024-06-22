import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Social } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <StarsCanvas />
        <About />
        <Experience />
        <div className='hidden sm:block'>
          <Tech />
          <Works />
        </div>
        <div className='social-contact-wrapper'>
          <Social />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;