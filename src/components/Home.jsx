import React, { useState } from "react";
import logo from "../assets/images/logos.png";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.avif";
import web1 from "../assets/images/web1.png";
import { s } from "framer-motion/client";
const features = [
  {
    title: "Custom Website Development",
    description:
      "Now offers a user-friendly and efficient Excel Import Function that allows users to import ledgers and transactions seamlessly.",
    icon: "📄",
  },
  {
    title: "E-Commerce Website Development",
    description:
      "This add-on displays the complete business picture on one screen.",
    icon: "👤",
  },
  {
    title: "CMS Development (WordPress, Shopify, etc.)",
    description:
      "Manage multiple GSTINs effortlessly, ensuring flexibility in compliance and reporting.",
    icon: "🔀",
  },
  {
    title: "Maintenance & Support for Existing Websites",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "Custom Software Development",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "Cloud-Based Solutions for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
  {
    title: "API Integration for Softwares",
    description:
      "Easily refine and analyze data with improved report filters for enhanced insights.",
    icon: "📝",
  },
];
const featuresLeft = [
  {
    title: "Certified Software Developers",
    description:
      "Generate E-Invoices seamlessly within the TallyPrime dashboard.",
    image: "/path-to-icon-connected.png",
  },
  {
    title: "End-to-End Development Expertise",
    description:
      "Configure to generate e-invoicing by single mode.",
    image: "/path-to-icon-single.png",
  },
  {
    title: "Cutting Edge Technology Stack",
    description:
      "Generate and send invoices in bulk & automatically fetch & print QR codes.",
    image: "/path-to-icon-bulk.png",
  },
];

const featuresRight = [
  {
    title: "Post-Development Support and Maintenance",
    description:
      "TallyPrime automatically integrates your invoice with GSTIN & e-way bill system.",
    image: "/path-to-icon-eway.png",
  },
  {
    title: "1 Year Free Hosting & Domain",
    description:
      "Cancel invoices for which IRN is already generated with ease.",
    image: "/path-to-icon-cancel.png",
  },
  {
    title: "SEO Friendly Development",
    description:
      "Generate exclusive e-invoice reports with a complete view of the transaction status.",
    image: "/path-to-icon-reports.png",
  },
];


const images = [image1, image2, image3, image4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="bg-gray-200 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Portfolio</h2>
        <p className="text-gray-600 mt-2">Explore our amazing projects</p>
      </div>
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden w-full h-[500px] flex items-center justify-center">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="absolute w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 shadow-lg focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 shadow-lg focus:outline-none"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-purple-600" : "bg-gray-300"
              }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

const TallyPrimeLanding = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-100 flex items-center justify-between h-32 border-b border-gray-300 px-10">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Software House Logo"
            className="w-96 h-96"
          />
        </div>
        <div>
          <button className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
            Contact Us
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center py-8">
        <div className="max-w-6xl w-full flex flex-wrap md:flex-nowrap shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-500 flex-1 p-8 flex flex-col justify-center text-white mr-10 rounded-r-lg">
            <h1 className="text-4xl font-bold leading-snug">
              Streamline Your Business with <br />
              TallyPrime:
              <span className="block">The Ultimate Accounting, Billing, and GST Software</span>
            </h1>
            <p className="mt-4 text-lg">
              Discover the Power of Effortless Financial Management and Seamless GST Compliance.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700">
              Start Your 7 Days Free Trial
            </button>
          </div>
          <div className="bg-white flex-1 p-8 mx-10 my-5 rounded-xl">
            <div className="text-center items-center">
              <div className="flex items-center justify-center h-40">
                <img
                  src={logo}
                  alt="Software House Logo"
                  className="w-64 h-64 mx-auto"
                />
              </div>
              <h2 className="text-lg font-semibold">
                India's No.1 Accounting Software With 7 Days Free Trial!
              </h2>
            </div>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone No..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Company Name..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="City..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
              >
                Get Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Services We Offer</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-lg transition border-b-4 border-gray-400 hover:shadow-gray-400"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      <ImageCarousel />


      <section className="bg-gray-50 py-16">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">E-Invoicing Features</h2>
          <p className="text-gray-600 mt-2">
            Our features are designed to meet the requirements of both beginners
            and players. Get the right feature that suits you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            {featuresLeft.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={web1}
              alt="E-Invoicing Illustration"
              className="max-w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            {featuresRight.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Customers say nice things</h2>
          <p className="text-gray-500 mb-12">
            TRUSTED BY OVER 2 Million+ TALLY CUSTOMERS WORLDWIDE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
              <p className="text-gray-700 text-base mb-4">
                "TallyPrime has truly transformed the way I manage my business finances.
                It's like having an accounting superhero by my side! With its user-friendly
                interface and powerful features, TallyPrime has simplified my entire
                accounting process. From effortless billing to seamless GST compliance, it
                handles it all with ease."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="path/to/customer1.jpg" // Replace with the actual avatar image path
                  alt="Anand Kishore"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm">Anand Kishore</h3>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
              <p className="text-gray-700 text-base mb-4">
                "TallyPrime has struck the perfect balance between simplicity and power.
                Its intuitive interface makes it a breeze to navigate, even for someone like me
                with limited accounting knowledge. I can easily manage my billing, track
                expenses, and generate professional invoices without any hassle."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="path/to/customer2.jpg" // Replace with the actual avatar image path
                  alt="Ravi Kumar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm">Ravi Kumar</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-50">
        {/* Left Section */}
        <div className="mb-8 lg:ml-36">
          <h2 className="text-2xl font-bold text-black mb-4">
            Arrange a personalized call with an expert
          </h2>
          <p className="text-lg text-gray-700">
            Phone:{" "}
            <a href="tel:+919520866147" className="text-blue-600 hover:underline">
              +919520866147
            </a>
          </p>
          <p className="text-lg text-gray-700">
            Email:{" "}
            <a
              href="mailto:dev@softwarehouseworld.com"
              className="text-blue-600 hover:underline"
            >
              dev@softwarehouseworld.com
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 lg:mr-8 bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">
            India's No.1 Accounting Software With 7 Days Free Trial!
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone No..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company Name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="City..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-purple-700 text-white font-semibold py-3 rounded-lg hover:bg-purple-800 transition duration-200"
            >
              Call Me Now
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            *We never share your details and that's a promise.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 py-12 flex flex-col items-center text-center">
        <p className="text-sm uppercase text-gray-500 mb-2">
          What are you waiting for?
        </p>
        <h2 className="text-2xl font-bold text-black mb-6">
          Request a callback from the expert.
        </h2>
        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-purple-800 transition">
          Sign Up for 7 Days Free Trial
        </button>
      </div>
      <footer className="bg-gray-600 py-4 text-sm text-white flex justify-between items-center px-8">
        <div>Software House Tech</div>
        <div>© All Rights Reserved</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 hover:underline">
            Facebook
          </a>
          <span>|</span>
          <a href="#" className="hover:text-blue-400 hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default TallyPrimeLanding;