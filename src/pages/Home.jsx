// Components
import Intro from "../components/Intro";
import Services from "../components/Services";
import Images from "../components/Images";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <main className="min-h-screen pt-16">
      <h1>Hello Home Page</h1>
      <Intro />
      <Services />
      <Images />
    </main>
  );
};

export default Home;
