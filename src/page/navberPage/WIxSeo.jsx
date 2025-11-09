// import React from 'react'
// import Container from '../../component/Container'

// const WIxSeo = () => {
//   return (
//     <>
//     <div className='mt-[200px]'>
//         <Container>
//         <h1 className='text-3xl font-bold text-center'>Wix SEO</h1>
//         <p className='text-center mt-5'>This is Wix SEO page</p>
//         </Container>
//     </div>
//     </>
//   )
// }
// export default WIxSeo;
import React from "react";
import Container from "../../component/Container";
import Rank from "../../component/Rank";
import ContentVideo from "../../component/ContentVideo";
import ContentLogo from "../../component/ContentLogo";
import Better from "./Better";
import Client from "./Client";
import Faq from "./Faq";
import OptimizeWordPress from "./OptimizeWordPress";

const WIxSeo = () => {
  const partners = [
    { name: "Google", image: "/assets/google.png" },
    { name: "Facebook", image: "/assets/facebook.png" },
    { name: "Amazon", image: "/assets/amazon.png" },
    { name: "Netflix", image: "/assets/netflix.png" },
    { name: "Shopify", image: "/assets/shopify.png" },
    { name: "Airbnb", image: "/assets/airbnb.png" },
  ];

  const betterSections = [
    {
      title: "Better way to",
      highlight: "Grow",
      titleEnd: "your website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis?",
    },
    {
      title: "Smarter way to",
      highlight: "Optimize",
      titleEnd: "your business",
      description:
        "We provide professional SEO and growth strategies to help you reach the top of search engines and convert traffic into customers.",
    },
  ];

  const seoQuestions = [
    {
      question: "Which is better for SEO, Joomla or WordPress?",
      answers: [
        "There are both advantages and pitfalls to choosing either Joomla or WordPress to build your website.",
        "Joomla offers more flexibility for technically advanced sites, while WordPress is ideal for most users.",
        "The key is finding the right setup, along with WordPress SEO plugins, to ensure your site ranks well from the beginning.",
      ],
    },
    {
      question: "How to optimize WordPress site for SEO?",
      answers: [
        "WordPress SEO consultants will analyze your site for SEO in order to help you optimize it for search engines.",
        "To ensure everything works in sync, it’s always a good idea to have a team of WordPress SEO experts involved.",
        "Our experienced team knows what it takes to help your site achieve better rankings and long-term visibility on search engines.",
      ],
    },
  ];

  const clientData = [
    {
      name: "Md Jihadul Islam",
      position: "CEO, Carbd",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, quos excepturi sed placeat vero labore.",
      img: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    {
      name: "Sarah Khan",
      position: "Founder, WebVista",
      review:
        "Amet consectetur adipisicing elit. Quisquam sequi dolor officia magni expedita libero beatae veniam.",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    },
    {
      name: "John Smith",
      position: "CTO, NexaTech",
      review:
        "Corrupti ut cupiditate modi blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis.",
      img: "https://cdn-icons-png.flaticon.com/512/2202/2202112.png",
    },
    {
      name: "Ayesha Akter",
      position: "Manager, DevSoft",
      review:
        "Sint itaque doloremque corrupti ut cupiditate modi a blanditiis, error consequatur eos nobis adipisci explicabo vero veritatis.",
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
  ];

  const handleBookCall = () => {
    window.location.href = "https://wa.me/8801749286221";
  };

  return (
    <div className="mt-[100px]">
      <Container>
        {/* Rank Section */}
        <Rank
          heading="Rank Your WordPress Website On Google"
          highlightText="Get Tips From Top SEO Experts"
          imageText="WordPress SEO"
          phoneNumber="8801749286221"
        />

        {/* Partners Section */}
        <ContentLogo title="Our Trusted Partners" logos={partners} />

        {/* Video Section */}
        <ContentVideo
          title="WordPress SEO Optimization"
          description="SEO is one of the most powerful features of WordPress. However, just using WordPress as your CMS and using plugins won’t lead to higher search engine rankings. By having our WordPress SEO experts optimize your website, you’ll take advantage of the platform’s full power."
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          gradientFrom="#A53DFF"
          gradientTo="#9333EA"
        />

        {/* Better Sections */}
        <Better
          sections={betterSections}
          image="/assets/seo-growth.jpg"
          reverse={false}
          bgColor="#A53DFF"
        />

        {/* Optimize WordPress CTA + Info */}
        <OptimizeWordPress
          ctaTitle="Ready To Optimise Your WordPress Site?"
          ctaText="If you’d like to optimize your WordPress site for search engines, get in touch with our experienced team of WordPress SEO experts today!"
          buttonText="BOOK A CALL"
          onButtonClick={handleBookCall}
          imageSrc="https://cdn-icons-png.flaticon.com/512/6165/6165119.png"
          questions={seoQuestions}
        />

        {/* Clients Section */}
        <Client title="What Our" highlight="Clients Say" clients={clientData} />

        {/* FAQ Section */}
        <Faq />
      </Container>
    </div>
  );
};

export default WIxSeo;
