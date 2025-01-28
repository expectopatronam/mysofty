import React from 'react';
import { ArrowRight, Code, Cpu, MessageCircle } from 'lucide-react';

const FreelanceLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grey-60 to-purple-700">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-white text-xl font-bold">DevPro</div>
        <div className="flex gap-6">
          <a href="#services" className="text-white hover:text-blue-200">Services</a>
          <a href="#portfolio" className="text-white hover:text-blue-200">Portfolio</a>
          <a href="#contact" className="text-white hover:text-blue-200">Contact</a>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50">
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              Expert Development Solutions
            </h1>
            <p className="text-blue-100 text-xl mb-8">
              Transform your ideas into reality with professional web and mobile development services. Fast, reliable, and built for scale.
            </p>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <h3 className="text-gray-800 font-semibold mb-4">Start Your Project</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Project Description"
                  className="w-full p-3 border rounded-lg"
                />
                <button className="w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Services Preview */}
          <div className="w-1/2 pl-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <Code className="mb-2" />
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <p className="text-sm text-blue-100">Modern, responsive websites built with the latest technologies</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <Cpu className="mb-2" />
                  <h3 className="font-semibold mb-2">App Development</h3>
                  <p className="text-sm text-blue-100">Native and cross-platform mobile applications</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <MessageCircle className="mb-2" />
                  <h3 className="font-semibold mb-2">Consultation</h3>
                  <p className="text-sm text-blue-100">Technical guidance and solution architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="container mx-auto px-6 pb-20">
        <p className="text-center text-white/60 mb-6">Trusted by innovative companies</p>
        <div className="flex justify-center items-center gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-24 h-12 bg-white/10 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelanceLanding;