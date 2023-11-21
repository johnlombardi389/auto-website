const Services = () => {
  const servicesData = [
    {
      title: "Oil Change",
      description:
        "Regular oil changes help maintain engine health and improve fuel efficiency.",
    },
    {
      title: "Brake Repair",
      description:
        "We provide brake inspection, repair, and replacement services to ensure your safety on the road.",
    },
    {
      title: "Tire Rotation",
      description:
        "Regular tire rotations promote even tire wear and extend the lifespan of your tires.",
    },
    {
      title: "Engine Diagnostics",
      description:
        "Our advanced diagnostics help identify and address issues affecting your vehicle's performance.",
    },
    {
      title: "Battery Replacement",
      description:
        "If your car battery is weak or dead, we offer professional battery replacement services.",
    },
    {
      title: "Scheduled Maintenance",
      description:
        "Stay on top of your vehicle's maintenance schedule with our comprehensive scheduled maintenance services.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gray-100 border-t border-gray-200 border-b p-12 text-center"
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        What services do we provide?
      </h3>
      <p className="text-gray-600 mb-8">Explore our range of services below.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 text-center border border-gray-300"
          >
            <h4 className="text-sm md:text-lg lg:text-xl font-bold mb-4 text-gray-800">
              {service.title}
            </h4>
            <p className="text-xs md:text-sm lg:text-base text-gray-700">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
