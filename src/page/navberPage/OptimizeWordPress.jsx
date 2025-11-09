// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const OptimizeWordPress = () => {
//   return (
//     <div className="bg-[#f8fbff]">
//       {/* Top Call to Action */}
//       <div className="text-center py-16 px-6">
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
//           Ready To Optimise Your WordPress Site?
//         </h2>
//         <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
//           If you’d like to optimize your WordPress site for search engines, get in
//           touch with our experienced team of WordPress SEO experts today!
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center gap-2 transition-all duration-300">
//           BOOK A CALL <FaArrowRight className="text-sm" />
//         </button>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 pb-16">
//         {/* Left Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/6165/6165119.png"
//             alt="SEO Illustration"
//             className="w-[80%] md:w-[70%] h-auto object-contain"
//           />
//         </div>

//         {/* Right Text */}
//         <div className="w-full md:w-1/2 text-gray-700">
//           <h3 className="text-xl md:text-2xl font-semibold mb-4">
//             Which is better for SEO Joomla or WordPress?
//           </h3>
//           <p className="mb-6 text-sm md:text-base leading-relaxed">
//             There are both advantages and pitfalls to choosing either Joomla or
//             WordPress to build your website. Joomla offers more flexibility for
//             technically advanced sites, while WordPress is ideal for most users. The
//             key is finding the right setup, along with WordPress SEO plugins, to
//             ensure your site ranks well from the beginning.
//           </p>

//           <h3 className="text-xl md:text-2xl font-semibold mb-4">
//             How to optimize WordPress site for SEO?
//           </h3>
//           <p className="text-sm md:text-base leading-relaxed">
//             WordPress SEO consultants will analyze your site for SEO in order to
//             help you optimize it for search engines. Due to the many changes, you
//             can choose from and all the other plugins you can make, WordPress SEO
//             can be a bit complex.
//           </p>
//           <p className="text-sm md:text-base leading-relaxed mt-4">
//             To ensure everything works in sync, it’s always a good idea to have a
//             team of WordPress SEO experts involved. WordPress SEO consultants make
//             sure your website runs fully optimized by checking URLs, alt tags,
//             meta information, and more.
//           </p>
//           <p className="text-sm md:text-base leading-relaxed mt-4">
//             Our experienced team knows what it takes to help your site achieve
//             better rankings and long-term visibility on search engines.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OptimizeWordPress;
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OptimizeSection = ({
  bgColor = "#f8fbff",
  ctaTitle,
  ctaText,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt = "SEO Illustration",
  questions = [],
}) => {
  return (
    <div className="w-full" style={{ backgroundColor: bgColor }}>
      {/* Call To Action Section */}
      <div className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          {ctaTitle}
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
          {ctaText}
        </p>
        <button
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md inline-flex items-center gap-2 transition-all duration-300"
        >
          {buttonText} <FaArrowRight className="text-sm" />
        </button>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 pb-16">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-[80%] md:w-[70%] h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-700">
          {questions.map((q, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {q.question}
              </h3>
              {q.answers.map((ans, j) => (
                <p
                  key={j}
                  className={`text-sm md:text-base leading-relaxed ${
                    j > 0 ? "mt-4" : ""
                  }`}
                >
                  {ans}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptimizeSection;
