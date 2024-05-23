import { useContext } from "react";
import { DarkModeContext } from "./context/theme-context";
import { About, Footer, Hero, Mywork, Navbar, Services, Technologies } from "./Components";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div className="relative h-screen bg-cover bg-[url('./assets/mountain.jpg')]">
        <div className={`${darkMode ? 'bg-opacity-80' : 'bg-opacity-50'} absolute inset-0 bg-black`}>
          <div className="container mx-auto px-6 sm:px-16">
            <Navbar />
            <Hero />
          </div>
        </div>
      </div>

      <div className={`${darkMode ? 'bg-darkerBlack' : 'bg-lighterColor'} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16">
          <About />
        </div>
      </div>
      <div className={`${darkMode ? 'bg-lighterBlack' : 'bg-lighterGrey'} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16">
          <Technologies/>
        </div>
      </div>
      <div className={`${darkMode ? 'bg-darkerBlack' : 'bg-lighterColor'} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16">
          <Services />
        </div>
      </div>
      <div className={`${darkMode ? 'bg-lighterBlack' : 'bg-lighterGrey'} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16"> 
          <Mywork />
        </div>
      </div>
      <div className="bg-darkerBlack bg-cover">
        <div className="container mx-auto px-6 sm:px-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
