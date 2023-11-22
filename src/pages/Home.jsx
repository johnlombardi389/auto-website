// Components
import Intro from "../components/Intro";
import Services from "../components/Services";
import Images from "../components/Images";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
  return (
    <main className="min-h-screen pt-16">
      <Intro />
      <Services />
      <Images />
      <Reviews />
      <FAQ />
      <Contact />
      <About />
    </main>
  );
};

export default Home;
