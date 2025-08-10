"use client"
import React from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/wordmark logo - nobg.png" alt="MySofty Logo" className="h-16 cursor-pointer" />
          </Link>
          <Link 
            href="/" 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About MySofty</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We are a passionate team of innovators dedicated to transforming your ideas into exceptional software solutions in just 30 days.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                MySofty was born from a simple belief: great software shouldn&apos;t take forever to build. Founded by a team of experienced developers and designers who were frustrated with lengthy development cycles, we set out to revolutionize how software is created.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey began in Dubai, UAE, where we recognized a gap in the market for rapid, high-quality software development. Traditional agencies were taking months or even years to deliver projects, while businesses needed solutions fast to stay competitive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we&apos;ve successfully delivered 50+ projects across various industries, maintaining our commitment to excellence and speed. Our 30-day promise isn&apos;t just a marketing slogan – it&apos;s a testament to our efficient processes, experienced team, and innovative approach to software development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To bridge the gap between brilliant ideas and successful software products by delivering high-quality, scalable solutions that exceed expectations and drive real business value. We believe every entrepreneur and business deserves access to world-class development expertise without the traditional barriers of time and cost.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the global leader in rapid software development, empowering businesses worldwide to bring their digital visions to life quickly and efficiently. We envision a future where innovative ideas can be transformed into market-ready products in weeks, not months.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technologies and creative problem-solving to deliver solutions that give our clients a competitive advantage in their markets.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Speed & Quality</h3>
              <p className="text-gray-600">
                We prove that speed doesn&apos;t compromise quality. Our streamlined processes and expert team deliver exceptional results within tight timelines.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We don&apos;t just build software; we build relationships. Every client becomes a partner in their journey toward digital success.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h4 className="text-xl font-semibold mb-2">Rapid Delivery</h4>
                <p className="text-gray-300 text-sm">
                  30-day delivery cycle without compromising on quality or functionality.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h4 className="text-xl font-semibold mb-2">Full-Stack Expertise</h4>
                <p className="text-gray-300 text-sm">
                  From UI/UX design to backend development and deployment - we handle it all.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-xl font-semibold mb-2">Data-Driven Approach</h4>
                <p className="text-gray-300 text-sm">
                  Every decision is backed by analytics and user research for optimal results.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-semibold mb-2">Global Standards</h4>
                <p className="text-gray-300 text-sm">
                  International quality standards with local understanding and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Development Process</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our proven 4-step methodology ensures efficient delivery without sacrificing quality or your vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Discovery Phase</h4>
                <p className="text-gray-600 text-sm mb-4">
                  We dive deep into understanding your business goals, target audience, and technical requirements through comprehensive consultation sessions.
                </p>
                <div className="text-xs text-blue-600 font-semibold">Days 1-3</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Design & Planning</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our design team creates wireframes, UI mockups, and technical architecture while planning the development roadmap.
                </p>
                <div className="text-xs text-green-600 font-semibold">Days 4-8</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Development Sprint</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Intensive development phase with daily progress updates, regular client feedback, and continuous integration.
                </p>
                <div className="text-xs text-purple-600 font-semibold">Days 9-25</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="pt-8">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Launch & Support</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Final testing, deployment to production, training, and ongoing support to ensure smooth operation.
                </p>
                <div className="text-xs text-red-600 font-semibold">Days 26-30+</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Track Record</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Projects Delivered</div>
                <div className="text-gray-500 text-sm mt-1">Across various industries</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">30</div>
                <div className="text-gray-700 font-medium">Days Average</div>
                <div className="text-gray-500 text-sm mt-1">From concept to launch</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Client Satisfaction</div>
                <div className="text-gray-500 text-sm mt-1">5-star ratings across the board</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">9+</div>
                <div className="text-gray-700 font-medium">Countries Served</div>
                <div className="text-gray-500 text-sm mt-1">Global reach, local expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Start-up Solutions */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Modern Start-up Solutions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We don&apos;t limit ourselves to specific technologies. Our expertise spans across all modern frameworks, platforms, and tools needed to bring your start-up vision to life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* AI & Modern Tools */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI & Innovation</h3>
              <p className="text-gray-600 mb-4">Cutting-edge AI integration and modern development tools</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">OpenAI</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">API Integration</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">Automation</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">Webhooks</span>
              </div>
            </div>
            
            {/* Frontend Solutions */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Excellence</h3>
              <p className="text-gray-600 mb-4">Modern, responsive user interfaces that captivate your audience</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Web</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Mobile</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Windows</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Mac</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Linux</span>
              </div>
            </div>

            {/* Backend & Cloud */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Scalable Backend</h3>
              <p className="text-gray-600 mb-4">Robust server architecture that grows with your business</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Kubernetes</span>
              </div>
            </div>

            {/* Mobile & Cross-Platform */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile Solutions</h3>
              <p className="text-gray-600 mb-4">Native and cross-platform apps that reach every device</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">iOS</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Android</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">PWA</span>
              </div>
            </div>

            {/* Database & Analytics */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🗄️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Data Management</h3>
              <p className="text-gray-600 mb-4">Secure, efficient data storage and intelligent analytics</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">Redis</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">Analytics</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">BigQuery</span>
              </div>
            </div>

            {/* DevOps & Security */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">DevOps & Security</h3>
              <p className="text-gray-600 mb-4">Automated deployments with enterprise-grade security</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">CI/CD</span>
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">GitHub Actions</span>
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">SSL/TLS</span>
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">OAuth</span>
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">Monitoring</span>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Technology Agnostic Approach</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe the best solution isn&apos;t about the latest trend—it&apos;s about choosing the right technology stack for <strong>your specific needs</strong>. Whether it&apos;s a cutting-edge framework or a proven solution, we adapt our expertise to deliver exactly what your start-up requires to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Idea?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the growing list of successful businesses that have trusted MySofty to bring their digital visions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition-shadow">
                  Start Your Project Today
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 MySofty, Inc. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;