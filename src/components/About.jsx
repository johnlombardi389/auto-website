const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-montserrat">
            Our History
          </h1>
          <p className="font-roboto pb-2">
            Empire Auto Repair was founded in 1981 by Jenny Smith, a passionate
            car enthusiast with a vision to provide top-notch auto repair
            services. Starting as a small garage in the heart of New York City,
            Empire Auto Repair quickly gained a reputation for excellence and
            customer satisfaction.
          </p>
          <p className="font-roboto">
            Over the years, the business expanded its operations, incorporating
            the latest technologies and skilled technicians to meet the
            ever-growing demands of the automotive industry. Today, Empire Auto
            Repair stands as a trusted name, serving the community with
            dedication and expertise.
          </p>
        </div>

        {/* Company Overview */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 font-montserrat">
            Overview of Empire Auto Repair
          </h1>
          <p className="font-roboto pb-2">
            Empire Auto Repair is a leading auto service provider committed to
            delivering exceptional repair and maintenance services. With a
            state-of-the-art facility and a team of highly skilled technicians,
            we cater to a wide range of automotive needs.
          </p>
          <p className="font-roboto">
            Our customer-centric approach, transparent communication, and
            commitment to quality have set us apart in the competitive
            automotive repair industry. Whether it's routine maintenance,
            diagnostics, or complex repairs, we strive for excellence in every
            service we provide.
          </p>
        </div>

        {/* Mission Statement */}
        <div>
          <h1 className="text-3xl font-bold mb-4 font-montserrat">
            Our Mission Statement
          </h1>
          <p className="font-roboto">
            At Empire Auto Repair, our mission is to provide reliable,
            high-quality automotive services that prioritize safety, efficiency,
            and customer satisfaction. We aim to build lasting relationships
            with our clients by delivering transparent, honest, and
            cost-effective solutions for all their auto repair needs. With a
            passion for excellence, we are dedicated to keeping our community on
            the road with confidence and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
