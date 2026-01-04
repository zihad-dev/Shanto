import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does SEO work on WordPress?",
      answer:
        "WordPress is built for search visibility. Its clean architecture allows me to easily optimize technical elements, speed, and metadata, making it easier for Google to rank your site compared to other platforms.",
    },
    {
      question: "How to improve SEO ranking WordPress?",
      answer:
        "You can improve your SEO ranking by using quality content, optimizing images, improving loading speed, and using SEO plugins like Yoast or Rank Math.",
    },
    {
      question: "Does Every WordPress Site Need An SEO Plugin?",
      answer:
        "While it’s not mandatory, using an SEO plugin helps make optimization easier and more efficient.",
    },
    {
      question: "How To Use The Yoast SEO Meta Box?",
      answer:
        "Yoast SEO Meta Box lets you add focus keywords, meta descriptions, and preview snippets directly from your post editor.",
    },
    {
      question: "How Do I Create An XML Sitemap In WordPress?",
      answer:
        "You can create an XML sitemap automatically using Yoast SEO, Rank Math, or Google XML Sitemaps plugin.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8fbff] min-h-screen flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6 md:p-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          WordPress SEO FAQs
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-3 md:py-4"
              >
                <span
                  className={`text-sm md:text-base font-semibold ${
                    openIndex === index ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
