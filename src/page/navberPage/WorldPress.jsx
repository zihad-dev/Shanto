import React, { useState } from "react";
import Container from "../../component/Container";
import Rank from "../../component/Rank";
import ContentVideo from "../../component/ContentVideo";
import ContentLogo from "../../component/ContentLogo";
import Better from "./Better";
import Client from "./Client";
import Faq from "./Faq";
import OptimizeWordPress from "./OptimizeWordPress";

const WorldPress = () => {
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
  const handleBookCall = () => {
    window.location.href = "https://wa.me/8801749286221";
  };

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

  return (
    <div className="mt-[100px]">
      <Container>
        <Rank
          heading="Rank Your WordPress Website On Google"
          highlightText="Get Tips From Top SEO Experts"
          imageText="WordPress SEO"
          phoneNumber="8801749286221"
        />
        <ContentLogo title="Our Trusted Partners" logos={partners} />
        <ContentVideo
          title="WordPress SEO Optimization"
          description="SEO is one of the most powerful features of WordPress. However, just using WordPress as your CMS and using plugins won’t lead to higher search engine rankings. By having our WordPress SEO experts optimize your website, you’ll take advantage of the platform’s full power."
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          gradientFrom="#A53DFF"
          gradientTo="#9333EA"
        />
        <Better
          sections={betterSections}
          image="/assets/seo-growth.jpg"
          reverse={false}
          bgColor="#A53DFF"
        />
        <OptimizeWordPress
          ctaTitle="Ready To Optimise Your WordPress Site?"
          ctaText="If you’d like to optimize your WordPress site for search engines, get in touch with our experienced team of WordPress SEO experts today!"
          buttonText="BOOK A CALL"
          onButtonClick={handleBookCall}
          imageSrc="https://cdn-icons-png.flaticon.com/512/6165/6165119.png"
          questions={seoQuestions}
        />
        <Client />
        <Faq />
      </Container>
    </div>
  );
};

export default WorldPress;
