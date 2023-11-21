const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-100 border-t border-gray-200 border-b p-12 text-center"
    >
      <h3 className="text-2xl font-bold mb-4">What services do we provide?</h3>
      <p className="text-gray-700 mb-8">Explore our range of services below.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Service Box 1 */}
        <div className="bg-white p-4 text-center border border-gray-300">
          <p>Service 1</p>
        </div>

        {/* Service Box 2 */}
        <div className="bg-white p-4 text-center border border-gray-300">
          <p>Service 2</p>
        </div>

        {/* Service Box 3 */}
        <div className="bg-white p-4 text-center border border-gray-300">
          <p>Service 3</p>
        </div>

        {/* Service Box 4 */}
        <div className="bg-white p-4 text-center border border-gray-300">
          <p>Service 4</p>
        </div>

        {/* Service Box 5 */}
        <div className="bg-white p-4 text-center border border-gray-300">
          <p>Service 5</p>
        </div>

        {/* Service Box 6 */}
        <div className="bg-white p-4 text-center border border-gray-300">
          <p>Service 6</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
