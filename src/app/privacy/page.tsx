"use client"
import React from "react";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              MySofty (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Contact us through our contact form</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Engage with us for project consultations</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              This information may include: name, email address, phone number, company name, project details, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Technical Information</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We automatically collect certain technical information when you visit our website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information and screen size</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referral source and exit pages</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process and manage project requests and consultations</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Improve our website and service offerings</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our website and conduct business (e.g., hosting, email services)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> When you have given us explicit permission to share your information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes (with consent)</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              You can control cookie preferences through your browser settings or our cookie consent banner.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request your data in a portable format</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related information may be retained for the duration of the project plus additional time as required for legal and business purposes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. Third-Party Links</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our website may contain links to third-party websites. This Privacy Policy does not apply to these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected information from a child under 16, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> yousuff@mysofty.tech</p>
              {/* <p className="text-gray-700 mb-2"><strong>General Contact:</strong> yousuff@mysofty.tech</p> */}
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

export default PrivacyPolicy;