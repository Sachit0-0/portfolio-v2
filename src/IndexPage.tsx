import { About } from "./components/About";
import { TechShowcase } from "./components/Features";


import { Hero } from "./components/Hero";
import { ScrollToTop } from "./components/ScrollToTop";
import { Timeline } from "./components/ui/timeline";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechShowcase />
      <div className="mt-32" data-aos="fade-up" data-aos-duration="2000">
        
        <Timeline />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default IndexPage;
