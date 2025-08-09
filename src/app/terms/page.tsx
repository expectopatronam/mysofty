"use client"
import React from "react";
import Link from "next/link";

const TermsOfService: React.FC = () => {
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

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By accessing and using MySofty&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              MySofty provides professional software development services including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Web development and design</li>
              <li>Mobile application development</li>
              <li>UI/UX design services</li>
              <li>Digital marketing solutions</li>
              <li>Quality assurance and testing</li>
              <li>API integration and custom software development</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Project Terms and Payment</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All projects are subject to separate project agreements that will outline:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Project scope and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and schedule</li>
              <li>Intellectual property rights</li>
              <li>Support and maintenance terms</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Unless otherwise specified in a project agreement, all custom code and designs created specifically for your project will be owned by you upon full payment. MySofty retains the right to use general methodologies, know-how, and experience gained from projects for future work.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Confidentiality</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MySofty agrees to maintain the confidentiality of all proprietary information shared by clients during the course of any project. We implement appropriate technical and organizational measures to protect your confidential information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In no event shall MySofty be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Warranty and Support</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MySofty warrants that services will be performed in a professional and workmanlike manner. We provide bug fixes and technical support as outlined in individual project agreements. Support periods and terms vary by project scope.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Either party may terminate a project agreement with written notice. Upon termination, payment is due for all work completed to date, and any project materials will be delivered as per the project agreement terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Dubai, UAE.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MySofty reserves the right to modify these terms at any time. We will notify users of significant changes via email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> yousuff@mysofty.tech</p>
              <p className="text-gray-700"><strong>Address:</strong> Dubai, UAE</p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 MySofty, Inc. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;