// Components
import Intro from "../components/Intro";
import Services from "../components/Services";

const Home = () => {
  return (
    <main className="min-h-screen pt-16">
      <h1>Hello Home Page</h1>
      <Intro />
      <Services />
    </main>
  );
};

export default Home;
