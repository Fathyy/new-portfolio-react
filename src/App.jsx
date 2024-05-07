import { useContext } from "react";
import { About, Footer, Hero, Mywork, Navbar, Services, Technologies } from "./Components";
import { DarkModeContext } from "./context/theme-context";

const COLORS = {
  light: 'lightMode',
  dark: {
    lighter: 'lighterBlack',
    darker: 'darkerBlack',
  },
};

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div className="relative h-screen bg-cover bg-[url('./assets/mountain.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-80">
          <div className="container mx-auto px-6 sm:px-16">
            <Navbar />
            <Hero />
          </div>
        </div>
      </div>

      <div className={`bg-${darkMode ? COLORS.dark.lighter : COLORS.light} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16">
          <About />
        </div>
      </div>
      <div className={`bg-${darkMode ? COLORS.dark.darker : COLORS.light} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16">
          <Technologies/>
        </div>
      </div>
      <div className={`bg-${darkMode ? COLORS.dark.lighter : COLORS.light} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16">
          <Services />
        </div>
      </div>
      <div className={`bg-${darkMode ? COLORS.dark.darker : COLORS.light} bg-cover`}>
        <div className="container mx-auto px-6 sm:px-16"> 
          <Mywork />
        </div>
      </div>
      <div className="bg-lighterBlack bg-cover">
        <div className="container mx-auto px-6 sm:px-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
