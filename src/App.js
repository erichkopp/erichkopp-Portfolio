import Nav from "./Nav";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
