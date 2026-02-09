import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Footer from "./components/footer";

// App
const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position="bottom-right" />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Certifications />
        <Works />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
