import { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "How often should I service my vehicle?",
      answer:
        "It's recommended to service your vehicle every 6 months or every 5,000 miles, whichever comes first.",
    },
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a range of services, including oil changes, brake repairs, tire rotations, and more. Check our services page for a complete list.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Yes, we offer free estimates for most services. Contact us for more information.",
    },
    {
      question: "How long does a typical repair take?",
      answer:
        "The duration of a repair can vary depending on the type of service. We'll provide you with an estimated timeframe when you bring in your vehicle.",
    },
    {
      question: "What is your contact number?",
      answer: "222-867-5309 or send us a message right here on our website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 font-montserrat">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex items-center justify-between w-full py-4 focus:outline-none"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-lg font-semibold font-montserrat">
                {faq.question}
              </span>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </button>
            {activeIndex === index && (
              <div className="py-4">
                <p className="font-roboto">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
