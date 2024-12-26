import React, { useState } from "react";
import logo from "../assets/images/logos.png";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/images/image1.png";
import web1 from "../assets/images/web1.png";
import customer1 from "../assets/images/customer1.png";
import customer2 from "../assets/images/customer2.jpg";
import certified from "../assets/images/certified.png";
import endtoend from "../assets/images/endtoend.png";
import cuttingedge from "../assets/images/cuttingedge.png";
import postdevelopment from "../assets/images/postdevelopment.png";
import seo from "../assets/images/seo.png";
import free from "../assets/images/free.png";
import seo1 from "../assets/images/seo1.png";
import appdevelopment from "../assets/images/appdevelopment.jpg";
import softwaredevelopment1 from "../assets/images/softwaredevelopment1.jpg";


const features = [
  {
    title: "Custom Website Development",
    description:
      "Design and develop fully customized websites tailored to meet business needs with responsive and modern designs.",
    icon: "🌐", // Globe icon for websites
  },
  {
    title: "E-Commerce Website Development",
    description:
      "Build robust online stores with seamless payment integration, inventory management, and user-friendly interfaces.",
    icon: "🛒", // Shopping cart icon for e-commerce
  },
  {
    title: "CMS Development (WordPress, Shopify, etc.)",
    description:
      "Develop dynamic and scalable websites using platforms like WordPress, Shopify, and Joomla for easy content management.",
    icon: "📋", // Clipboard icon for CMS
  },
  {
    title: "Maintenance & Support for Existing Websites",
    description:
      "Provide regular updates, bug fixes, and performance optimization to ensure your website runs smoothly.",
    icon: "🔧", // Wrench icon for maintenance
  },
  {
    title: "Custom Software Development",
    description:
      "Develop tailored software solutions to meet specific business requirements and streamline operations.",
    icon: "💻", // Laptop icon for software development
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Create user-friendly mobile apps for Android and iOS platforms with advanced features and high performance.",
    icon: "📱", // Mobile phone icon for app development
  },
  {
    title: "Cloud-Based Solutions for Softwares",
    description:
      "Leverage cloud technology to provide scalable, secure, and accessible solutions for businesses.",
    icon: "☁️", // Cloud icon for cloud-based solutions
  },
  {
    title: "API Integration for Softwares",
    description:
      "Seamlessly integrate APIs to enhance software functionality and connect with third-party services.",
    icon: "🔗", // Link icon for API integration
  },
  {
    title: "UI/UX Design & Development",
    description:
      "Design intuitive and visually appealing user interfaces to improve user experience and engagement.",
    icon: "🎨", // Palette icon for design
  },
  {
    title: "Branding and Graphic Design",
    description:
      "Craft unique branding strategies, logos, and designs to establish a strong visual identity for businesses.",
    icon: "🖌️", // Paintbrush icon for branding
  },
  {
    title: "Consulting Services for Startups",
    description:
      "Offer expert guidance on technology, product development, and digital strategies to help startups grow.",
    icon: "💡", // Light bulb icon for consulting
  },
  {
    title: "On Page & Off Page SEO Services",
    description:
      "Improve website rankings through on-page optimizations and off-page strategies like link building.",
    icon: "📈", // Chart icon for SEO services
  },
  {
    title: "Technical & Local SEO Services",
    description:
      "Optimize website performance, mobile-friendliness, and local business visibility to attract more customers.",
    icon: "📍", // Pin icon for local SEO
  },
  {
    title: "SEO Audit and Reports",
    description:
      "Analyze website performance and provide actionable insights to improve search engine rankings.",
    icon: "📝", // Notepad icon for reports
  },
  {
    title: "Social Media Marketing Services",
    description:
      "Manage and grow your online presence with strategic social media campaigns and paid advertisements.",
    icon: "📣", // Megaphone icon for social media
  },
  {
    title: "Content Marketing and Email Marketing",
    description:
      "Create engaging content and email campaigns to connect with your audience and drive conversions.",
    icon: "✉️", // Envelope icon for email marketing
  },
];
const featuresLeft = [
  {
    title: "Certified Software Developers",
    className: "bg-white w-48 h-48", 
    description:
      "Our team of certified developers ensures high-quality solutions for all your business needs.",
    image: certified,
  },
  {
    title: "End-to-End Development Expertise",
    description:
      "We handle every step of the development process, from ideation to delivery and maintenance.",
    image: endtoend,
    className: "w-48 h-48", 
  },
  {
    title: "Cutting Edge Technology Stack",
    description:
      "Leverage the latest technologies to build scalable, secure, and innovative digital solutions.",
    image: cuttingedge,
    className: "w-48 h-48", 
  },
];

const featuresRight = [
  {
    title: "Post-Development Support and Maintenance",
    description:
      "Ensure your project runs smoothly with our dedicated support and maintenance services.",
    image: postdevelopment,
    className: "w-48 h-48", 
  },
  {
    title: "1 Year Free Hosting",
    description:
      "Get 1 year of free hosting to kickstart your online presence.",
    image: free,
    className: "w-48 h-48", 
  },
  {
    title: "SEO-Friendly Development",
    description:
      "We build websites optimized for search engines to boost visibility and drive traffic.",
    image: seo,
    className: "w-48 h-48", 
  },
];


const images = [image1, seo1, appdevelopment, softwaredevelopment1];

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
              Transform Your Business with <br />
              Software House Tech:
              <span className="block">with Our Expert Digital Solutions.</span>
            </h1>
            <p className="mt-4 text-xl">
              Software, Websites, SEO, Apps, and Marketing <br /> — All in One Place.
            </p>
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700">
              &lt;-- Start Your Journey With Us --&gt;
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
                One of India's Best Website Developemt Company!
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
                Contact Now
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
          <h2 className="text-3xl font-bold">Why Us!</h2>
          <p className="text-gray-600 mt-2">
            Our Developments are designed to meet the requirements of both beginners
            and players. <br />Get the right Software Development that suits you.
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
            TRUSTED BY OVER 1000+ CUSTOMERS WORLDWIDE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
              <p className="text-gray-700 text-base mb-4">
                “We hired Software House Tech for custom software development, and the results were exceptional. The solution streamlined our operations, reduced errors, and improved efficiency. Their team was professional, responsive, and delivered beyond our expectations. Highly recommended!”
              </p>
              <div className="flex items-center justify-between">
                <img
                  src={customer1}
                  alt="Anand Kishore"
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="font-semibold text-sm text-right">Anand Kishore</h3>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
              <p className="text-gray-700 text-base mb-4">
                “Working with Software house Tech was fantastic! They created a stunning, user-friendly e-commerce website that boosted our traffic and sales. Their expertise, attention to detail, and seamless communication made the process smooth. Highly recommend them!”
              </p>
              <div className="flex items-center justify-between">
                <img
                  src={customer2}
                  alt="Vivek Kumar"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm text-right">Vivek Kumar</h3>
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
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">
            One of India's Best Website Developemt Company!
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
          Get Your free Quotation Now
        </h2>
        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-purple-800 transition">
          Click Here
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