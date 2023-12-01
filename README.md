# Auto Repair Website

![Project Preview Image](/src/assets/Project6.png)

## Table of Contents

- [Overview](#overview)
  - [Visit Website](#visit-website)
- [Project Details](#project-details)
  - [Tech Toolkit](#tech-toolkit)
  - [Sample Code](#sample-code)
- [Photos](#photos)
- [Author](#author)
  - [Credits](#credits)

## Overview

Welcome to the Empire Auto Repair website – a modern, responsive, and user-friendly web platform built using React.js and Tailwind CSS. This project showcases the online presence of a fictional auto repair shop, providing a seamless experience for users to explore services, learn about the company, and get in touch.

### Visit Website

[Link to Auto Repair Website](https://johnlombardi389.github.io/auto-website/)

## Details

### Tech Toolkit

- React
- JavaScript
- Tailwind
- CSS
- HTML
- Vite
- Git

### Sample Code

#### FAQ Section

```javascript
<section id="faq" className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
  <div className="space-y-4">
    {faqData.map((faq, index) => (
      <div key={index} className="border-b border-gray-300">
        <button
          className="flex items-center justify-between w-full py-4 focus:outline-none"
          onClick={() => toggleAnswer(index)}
        >
          <span className="text-lg font-semibold">{faq.question}</span>
          <span>{activeIndex === index ? "▲" : "▼"}</span>
        </button>
        {activeIndex === index && (
          <div className="py-4">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</section>
```

This code demonstrates a simple Frequently Asked Questions (FAQ) section implemented in React.js using Tailwind CSS for styling. The section dynamically displays a list of questions and answers, allowing users to expand and collapse individual answers.

This code leverages Tailwind CSS classes for responsive and clean styling, ensuring an appealing and user-friendly presentation of the FAQ section.

## Photos

### Log In

![Log In](/src/assets/Project1.png)

#### Register Account

![Register](/src/assets/Project2.png)

## Author

John Lombardi

- [Portfolio](https://johnlombardi389.github.io/portfolio/)
- [LinkedIn](https://www.linkedin.com/in/johnlombardi389/)
- [GitHub](https://github.com/johnlombardi389)

---

### Credits
