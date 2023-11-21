// Components
import Intro from "../components/Intro";
import Services from "../components/Services";
import Images from "../components/Images";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <main className="min-h-screen pt-16">
      <Intro />
      <Services />
      <Images />
      <FAQ />
    </main>
  );
};

export default Home;
