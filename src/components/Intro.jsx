// Images
import introImg from "../assets/introImg.jpg";

const Intro = () => {
  return (
    <section className="flex items-center justify-center p-4">
      {/* Left side with image */}
      <div className="w-1/2">
        <img src={introImg} alt="Introduction" className="w-full h-auto" />
      </div>

      {/* Right side with text */}
      <div className="w-1/2 px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Introduction Heading</h1>
          <p className="text-lg">
            Smaller text underneath the heading goes here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

// image credits Photo by Artem Podrez: https://www.pexels.com/photo/a-man-in-blue-suit-checking-a-car-8986148/
