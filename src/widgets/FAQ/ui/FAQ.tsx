"use client";
import React from "react";
import Accordion, { data } from "@/shared/ui/Accordion/Accordion";
import Heading from "@/shared/ui/Typography/Heading/Heading";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleItemClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{
        alignItems: "flex-start",
      }}
    >
      <div className="container flex flex-col gap-[18px] sm:gap-2.5 pt-[110px] pb-[50px] sm:pt-[29px] sm:pb-[37px]">
        <Heading component="h1" className="text-black text-center ">
          Часто задаваемые вопросы?
        </Heading>
        <div className="flex flex-col items-center justify-center">
          {data.map((item, index) => (
            <Accordion
              key={index}
              answer={item.answer}
              question={item.question}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

