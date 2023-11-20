// Images
import vertical1 from "../assets/vertical1.jpg";
import horizontal1 from "../assets/horizontal1.jpg";
import horizontal2 from "../assets/horizontal2.jpg";

const Images = () => {
  return (
    <section className="sm:px-32 md:px-64 lg:px-64 py-4">
      <h3 className="text-2xl font-bold mb-4">Images Section</h3>

      <div className="flex flex-col md:flex-row">
        {/* Vertical Image on the Left */}
        <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <img
            src={vertical1}
            alt="Vertical Image"
            className="w-full h-[672px] object-cover"
          />
        </div>

        {/* Horizontal Images in a Column on the Right */}
        <div className="md:w-1/2">
          <img
            src={horizontal1}
            alt="Horizontal Image 1"
            className="w-full h-auto object-cover mb-4"
          />
          <img
            src={horizontal2}
            alt="Horizontal Image 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Images;

// image 1 Photo by Artem Podrez: https://www.pexels.com/photo/a-person-holding-a-tire-8986177/
// image 2 Photo by Anna Shvets: https://www.pexels.com/photo/an-auto-mechanic-checking-the-engine-of-a-car-4315570/
// image tall Photo by Anna Shvets: https://www.pexels.com/photo/an-auto-mechanic-repairing-the-engine-of-a-car-4315573/
