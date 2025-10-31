import React from "react";
import Container from "../component/Container";

const steps = [
  {
    step: "01",
    title: "Research",
    description: "We start by understanding your needs and analyzing the market trends to create effective solutions.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We structure your ideas and create a clear roadmap for your project to ensure smooth execution.",
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers craft visually appealing and user-friendly interfaces tailored to your audience.",
  },
  {
    step: "04",
    title: "Development",
    description: "We bring the designs to life with clean, efficient, and scalable code.",
  },
  {
    step: "05",
    title: "Launch",
    description: "After thorough testing, we launch your project and ensure everything runs perfectly.",
  },
];

const Process = () => {
  return (
    <div className="mt-[100px]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#132238] mb-4">Our Process</h2>
          <p className="text-[#87909D] text-base leading-6 max-w-[600px] mx-auto">
            We follow a structured process to ensure that every project we deliver meets the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6 cursor-pointer hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] transition-shadow duration-300"
            >
              <div className="text-[#A53DFF] font-bold text-3xl mb-2">{item.step}</div>
              <h3 className="text-xl font-semibold text-[#132238] mb-2">{item.title}</h3>
              <p className="text-[#556070] text-sm leading-5">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Process;
