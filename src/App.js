import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Opening from "./components/Opening/Opening";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import "./index.css";

function App() {
  return (
    <div className="App">
      <main className="content">
        <Navbar />
        <div className="max-w-5xl	mx-auto">
          <Opening />
          <AboutMe />
          <Skills />
          <ContactMe />
        </div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;
