// Images
import reviewImg from "../assets/reviewImg.jpg";

const Reviews = () => {
  return (
    <section id="reviews" className="relative h-96 mb-4 overflow-hidden">
      {/* Overlay Box */}
      <div className="absolute inset-0 flex items-center justify-start p-12">
        {/* Quote Box */}
        <div className="bg-gray-800 bg-opacity-75 p-4 rounded-l-md w-1/3">
          {/* Customer Quote */}
          <blockquote className="text-sm font-italic text-left text-white font-roboto">
            "Excellent service! The team here is knowledgeable, and they always
            go above and beyond for their customers."
          </blockquote>

          {/* Customer Name */}
          <p className="text-sm mt-2 font-bold text-white font-montserrat">
            - Jane Doe
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${reviewImg})` }}
      />
    </section>
  );
};

export default Reviews;
