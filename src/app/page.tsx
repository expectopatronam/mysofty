"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";


interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface Review {
  name: string;
  company: string;
  review: string;
  rating: number;
  position: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const services: Service[] = [
    {
      title: "Design",
      description: "UI/UX design, wireframing, and prototyping to create intuitive and engaging user experiences.",
      features: ["User Interface Design", "User Experience Design", "Prototype Development", "Brand Identity"],
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Full-stack development services using cutting-edge technologies to bring your vision to life.",
      features: ["Web Development", "Mobile Apps", "Custom Software", "API Integration"],
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online presence and reach.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics"],
      icon: "📈"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and debugging to ensure your product meets the highest quality standards.",
      features: ["Automated Testing", "Performance Testing", "Bug Fixing", "Security Testing"],
      icon: "✅"
    },
  ];

  const reviews: Review[] = [
    {
      name: "Sarala Pandian",
      company: "ECFile",
      review: "MySofty delivered exceptional results for our web application. Their attention to detail and commitment to quality is outstanding.",
      rating: 5,
      position: "CTO"
    },
    {
      name: "Irfan",
      company: "Marine Ninjas",
      review: "The team's expertise in both design and development helped us launch our product ahead of schedule. Highly recommended!",
      rating: 5,
      position: "Product Manager"
    },
    {
      name: "Namrata Singh",
      company: "Namdo",
      review: "Their SEO services have significantly improved our online presence. We've seen a 200% increase in organic traffic.",
      rating: 5,
      position: "Marketing Director"
    },
    {
      name: "Ravi Kumar",
      company: "Taamsi",
      review: "Outstanding service from start to finish. MySofty understood our vision and transformed it into reality.",
      rating: 5,
      position: "CEO"
    }
  ];

  const companyLogos = [
    { src: "/company/bec.png", alt: "BEC" },
    { src: "/company/ecfile.png", alt: "ECFile" },
    { src: "/company/ecpaye.png", alt: "ECPaye" },
    { src: "/company/greeting-world.png", alt: "Greeting World" },
    { src: "/company/marine-ninjas.png", alt: "Marine Ninjas" },
    { src: "/company/namdo.png", alt: "Namdo" },
    { src: "/company/taamsi.png", alt: "Taamsi" },
    { src: "/company/taks-info.png", alt: "Taks Info" },
    { src: "/company/ubill.png", alt: "UBill" }
  ];

  const [currentReview, setCurrentReview] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "+971",
    subject: "",
    message: ""
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextReview = (): void => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = (): void => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('https://bill-api.mysofty.tech/get-in-touch/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: "",
          email: "",
          phone: "+971",
          subject: "",
          message: ""
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full text-gray-900 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/wordmark logo - nobg.png" alt="Logo" className="h-20" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {["products", "reviews", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                className="font-bold hover:text-blue-400 transition-colors cursor-pointer capitalize"
              >
                {item}
              </Link>
            ))}
            <NextLink href="/about" className="font-bold hover:text-blue-400 transition-colors cursor-pointer">
              About
            </NextLink>
            <div className="relative group">
              <button className="font-bold hover:text-blue-400 transition-colors cursor-pointer flex items-center">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                <NextLink href="/terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                  Terms of Service
                </NextLink>
                <NextLink href="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                  Privacy Policy
                </NextLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Mobile Navigation Drawer */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
              onClick={handleOverlayClick}
            >
              <div
                className={`fixed right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                  }`}
              >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex flex-col p-4">
                  {["products", "reviews", "contact"].map((item) => (
                    <Link
                      key={item}
                      to={item}
                      smooth
                      duration={500}
                      className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors cursor-pointer capitalize"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <NextLink
                    href="/about"
                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NextLink>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4"></div>

                  {/* Additional Pages */}
                  <NextLink
                    href="/terms"
                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Terms of Service
                  </NextLink>
                  <NextLink
                    href="/privacy"
                    className="py-3 px-4 text-lg font-medium hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Privacy Policy
                  </NextLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-gray-100 to-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight md:leading-snug">
            Turn your <span className="inline-block">💡</span> ideas to <br />
            software in <span className="inline-block bg-gradient-to-r from-blue-700 to-red-500 text-transparent bg-clip-text">30 days</span>
            <span className="inline-block">🚀</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 mt-4">
            Your idea, we execute the business. You just sit back and relax.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="contact" smooth duration={500}>
              <button className="px-6 py-3 text-lg font-semibold bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition">
                Get Started →
              </button>
            </Link>
            <Link to="about" smooth duration={500}>
              <button className="px-6 py-3 text-lg font-semibold bg-white text-gray-900 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition">
                Learn More ↓
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Logo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="container mx-auto px-6">
          <h2 className="text-xl text-center text-gray-600 mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">About MySofty</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are a passionate team of developers, designers, and digital strategists dedicated to transforming your ideas into exceptional software solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At MySofty, we believe that every great business starts with a brilliant idea. Our mission is to bridge the gap between your vision and reality by delivering high-quality, scalable software solutions in just 30 days.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We combine cutting-edge technology with creative design thinking to build products that not only meet your requirements but exceed your expectations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">30</div>
                    <div className="text-gray-600 text-sm">Days Average</div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Innovation First</h4>
                  </div>
                  <p className="text-gray-600">
                    We stay ahead of technology trends to deliver modern, future-proof solutions that give your business a competitive edge.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Results Driven</h4>
                  </div>
                  <p className="text-gray-600">
                    Every project is approached with clear goals, measurable outcomes, and a focus on delivering real business value.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">Partnership Approach</h4>
                  </div>
                  <p className="text-gray-600">
                    We work as an extension of your team, providing ongoing support and building long-term relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Process</h3>
              <p className="text-xl text-gray-600 mb-12">From concept to deployment in 30 days</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Discovery</h4>
                <p className="text-gray-600 text-sm">
                  We understand your business needs, goals, and technical requirements through detailed consultation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Design</h4>
                <p className="text-gray-600 text-sm">
                  Our design team creates intuitive user experiences and visual designs that align with your brand.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Development</h4>
                <p className="text-gray-600 text-sm">
                  We build your solution using the latest technologies, with regular updates and feedback loops.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Launch</h4>
                <p className="text-gray-600 text-sm">
                  We deploy your solution and provide ongoing support to ensure smooth operation and growth.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-xl mb-6 opacity-90">
                  Join the companies that trust MySofty to bring their ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <NextLink href="/about">
                    <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 h-12 flex items-center justify-center">
                      Know More →
                    </button>
                  </NextLink>
                  <Link to="contact" smooth duration={500}>
                    <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-shadow h-12 flex items-center justify-center">
                      Let&apos;s Build Something Amazing
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Client Testimonials</h2>

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full border-2 border-gray-600 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors"
            >
              &lt;
            </button>

            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 max-w-2xl">
              <div className="text-2xl mb-4">{"⭐".repeat(reviews[currentReview].rating)}</div>
              <p className="text-lg text-gray-800 mb-8">{reviews[currentReview].review}</p>
              <div className="border-t border-gray-300 pt-6">
                <h3 className="font-bold text-xl text-gray-800">{reviews[currentReview].name}</h3>
                <p className="text-gray-600">{reviews[currentReview].position}</p>
                <p className="text-gray-500">{reviews[currentReview].company}</p>
              </div>
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full border-2 border-gray-600 text-gray-600 flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors"
            >
              &gt;
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentReview === index ? "bg-gray-800" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-16">End-to-End Software Solutions</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 border-b border-gray-200 pb-2">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-center text-gray-600 mb-16">Let&apos;s discuss your next project</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
                <p className="text-sm text-gray-600 mt-1 font-medium">
                  Please enter your phone number with country code (+971 501234567).
                </p>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-[150px] resize-vertical"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer id="about" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <img src="/wordmark logo - Dark.png" alt="MySofty Logo" className="h-12 mb-4" />
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Transform your ideas into reality with professional software development services. We deliver innovative solutions in 30 days.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/mysofty" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <span className="text-sm">🔗</span>
                </a>
                <a href="https://www.linkedin.com/company/mysofty/" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                  <span className="text-sm">📸</span>
                </a>
                <a href="https://www.linkedin.com/company/mysofty/" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                  <span className="text-sm">🎥</span>
                </a>
                <a href="https://www.reddit.com/user/mysofty/" target="_blank" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200">
                  <span className="text-sm">🐦</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    API Integration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <NextLink href="/about" className="hover:text-white transition-colors duration-200 cursor-pointer">
                    About Us
                  </NextLink>
                </li>
                <li>
                  <Link to="reviews" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="products" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth duration={500} className="hover:text-white transition-colors duration-200 cursor-pointer">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <a href="mailto:info@mysofty.tech" className="hover:text-white transition-colors duration-200">info@mysofty.tech</a>
                </div>
                <div className="flex items-start space-x-2">
                  <span>📍</span>
                  <span>Dubai, UAE</span>
                </div>
              </div>
              <Link to="contact" smooth duration={500}>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                  Start Your Project
                </button>
              </Link>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2025 MySofty, Inc. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <NextLink href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</NextLink>
              <NextLink href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</NextLink>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;