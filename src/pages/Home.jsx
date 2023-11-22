// Components
import Intro from "../components/Intro";
import Services from "../components/Services";
import Images from "../components/Images";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="min-h-screen pt-16">
      <Intro />
      <Services />
      <Images />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
