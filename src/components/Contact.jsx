import { useRef, useEffect, useState } from "react";

const Contact = () => {
  const mapContainerRef = useRef(null);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const formHeight = document.getElementById("contact-form").clientHeight;
    mapContainerRef.current.style.height = `${formHeight}px`;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to send the form data to a specific email here
    // Simulate a successful submission after 1 second
    setTimeout(() => {
      setIsMessageSent(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Form on the left */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4" id="contact-form">
          <h1 className="text-3xl font-bold mb-8 font-montserrat">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Form fields here */}
            <label htmlFor="name" className="block mb-2 font-roboto">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border p-2 w-full font-roboto"
                required
              />
            </label>

            <label htmlFor="email" className="block mb-2 font-roboto">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border p-2 w-full font-roboto"
                required
              />
            </label>

            <label htmlFor="message" className="block mb-2 font-roboto">
              Message:
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="border p-2 w-full font-roboto"
                required
              ></textarea>
            </label>

            <div className="flex mb-4 items-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 font-montserrat font-bold"
              >
                Send Message
              </button>
              {isMessageSent ? (
                <p className="text-green-500 ml-4 font-roboto">
                  Message sent successfully!
                </p>
              ) : null}
            </div>
          </form>

          {/* Company Hours */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2 font-montserrat">
              Company Hours
            </h2>
            {/* Company hours here */}
            <p className="font-roboto">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="font-roboto">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="font-roboto">Sunday: Closed</p>
          </div>
        </div>

        {/* Map on the right */}
        <div className="md:w-1/2" ref={mapContainerRef}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617356433569!2d-73.98823932376112!3d40.74844453538339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700684625870!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
