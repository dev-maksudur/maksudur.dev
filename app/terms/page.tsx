import type { Metadata } from "next";
import { Shield, FileText, AlertCircle, CheckCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getTermsPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service and legal policies for Maksudur Rahman's software engineering portfolio website.",
  alternates: {
    canonical: "/terms/",
  },
  other: {
    title: "Terms of Service | Maksudur.dev",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <JsonLd data={getTermsPageSchema()} />
      {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: 2026
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Important Notice
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                By accessing and using Maksudur.dev, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Acceptance of Terms
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Welcome to Maksudur.dev. By accessing or using this website, portfolio showcase, and engineering contact channels (collectively, the "Services"), you agree to comply with and be bound by these Terms of Service.
              </p>
              <p>
                We reserve the right to update these terms at any time. Your continued use of the Services after any changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Use of Services
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>You agree to use our Services only for lawful purposes. You must not use our Services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable local, national, or international law</li>
                <li>To transmit unauthorized advertising, spam, or promotional material</li>
                <li>To impersonate or attempt to impersonate Maksudur Rahman or any related associates</li>
                <li>To attempt to probe, scan, or compromise the security of this website or related infrastructure</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Intellectual Property Rights
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                All original software architectures, code samples, portfolio project descriptions, designs, and content published on Maksudur.dev are the intellectual property of Maksudur Rahman, unless otherwise stated or attributed to respective open-source licenses or clients.
              </p>
              <p>
                You may not redistribute, duplicate, or scrape portfolio content for commercial exploitation without prior written consent.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Engineering Consulting & Contract Work
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Any professional software development, consulting, payment gateway integration, or engineering engagement entered into will be governed by a separate mutual service contract or statement of work (SOW).
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              Privacy and Communication
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Information submitted through the contact form or direct communication channels will be treated with strict confidentiality and will never be sold or shared with third-party advertisers.
              </p>
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Your privacy and project details are respected</span>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              Limitation of Liability
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                This portfolio website is provided on an "as is" and "as available" basis without warranties of any kind. Maksudur Rahman shall not be liable for any direct or indirect damages resulting from the use of this website.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Contact Information
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                If you have any questions regarding these Terms of Service or potential engagements, please get in touch:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">Maksudur Rahman</p>
                <p>Email: maksudur.dev02@gmail.com</p>
                <p>Location: Remote / Dhaka, Bangladesh</p>
                <p>Website: https://maksudur.dev</p>
              </div>
            </div>
          </section>
        </div>

        {/* Acknowledgment */}
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                Agreement Acknowledgment
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm">
                By using Maksudur.dev, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}