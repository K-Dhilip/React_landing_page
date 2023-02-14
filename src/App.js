import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Hero } from "./components/hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
