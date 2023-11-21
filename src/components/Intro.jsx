// Images
import introImg from "../assets/introImg.jpg";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col-reverse md:flex-row items-center justify-center p-4"
    >
      {/* Left side with image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src={introImg} alt="Introduction" className="w-full h-auto" />
      </div>

      {/* Right side with text */}
      <div className="w-full md:w-1/2 px-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Revitalize Your Ride with Empire Auto Repair – Where Excellence
            Drives Every Service!
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Our team of skilled technicians is committed to delivering top-notch
            automotive solutions, from routine maintenance to complex repairs.
            With cutting-edge diagnostics and a passion for precision, we ensure
            your car not only runs smoothly but thrives on the road. Trust
            Empire Auto Repair – where your journey meets excellence!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

// image credits Photo by Artem Podrez: https://www.pexels.com/photo/a-man-in-blue-suit-checking-a-car-8986148/
