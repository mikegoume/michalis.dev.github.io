import { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./screens/Skills/Skills";
import Opening from "./components/Opening/Opening";
import AboutMe from "./screens/AboutMe/AboutMe";
import Portfolio from "./screens/Portfolio/Portfolio";
import ContactMe from "./screens/ContactMe/ContactMe";
import "./index.css";
import "./App.css";

export const BackgroundColorContext = createContext();

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <BackgroundColorContext.Provider
      value={{ backgroundColor, setBackgroundColor }}
    >
      <div className="App">
        <main className="content" style={{ backgroundColor: backgroundColor }}>
          <Navbar />
          <div className="max-w-5xl mx-auto">
            <Opening />
            <AboutMe />
            <Skills />
            <Portfolio />
            <ContactMe />
          </div>
          {/* <Footer /> */}
        </main>
      </div>
    </BackgroundColorContext.Provider>
  );
}

export default App;
