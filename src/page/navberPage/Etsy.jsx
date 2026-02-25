import React, { useState } from "react";
import Container from "../../component/Container";
import Rank from "../../component/Rank";
import ContentVideo from "../../component/ContentVideo";
import ContentLogo from "../../component/ContentLogo";
import Better from "./Better";
import Client from "./Client";
import Faq from "./Faq";
import OptimizeWordPress from "./OptimizeWordPress";

const Etsy = () => {
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
      title: "A Better Way to",
      highlight: "Grow",
      titleEnd: "your website",
      description:
        "Your website has huge potential—if it’s optimized correctly. I focus on improving your ranking, fixing technical issues, enhancing user experience, and creating content that search engines and users love. The result? Steady, sustainable growth.",
    },
    {
      title: "Smarter way to",
      highlight: "Optimize",
      titleEnd: "your business",
      description:
        "As an SEO and growth specialist, I focus on improving your search rankings, optimizing your content, and strengthening your online presence—so your business gets more visibility, more leads, and more conversions.",
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
    <>
        <div className="mt-[150px]">
      <Container>
        <Rank
          heading="Rank Your WordPress Website on Google With Expert-Level SEO Guidance"
          highlightText="Stay ahead of competitors with insights, techniques, and AI-powered strategies trusted by leading SEO professionals."
          imageText="WordPress SEO"
          phoneNumber="8801971762844"
        />
        <ContentLogo title="Our Trusted Partners" logos={partners} />
        <ContentVideo
          title="WordPress SEO Optimization"
          description="Although WordPress is SEO-friendly, expert optimization—not just plugins—is what truly leads to higher rankings. I fine-tune your technical setup, on-page structure, and content performance so your site can compete and rank effectively."
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
          ctaTitle="Ready to Optimize Your WordPress Site?"
          ctaText="If you’d like to get your WordPress site performing better on search engines, I’m here to help. Reach out, and I’ll take care of the SEO for you."
          buttonText="BOOK A CALL"
          onButtonClick={handleBookCall}
          imageSrc="https://cdn-icons-png.flaticon.com/512/6165/6165119.png"
          questions={seoQuestions}
        />
        <Client />
        <Faq />
      </Container>
    </div>
    </>
  )
}

export default Etsy