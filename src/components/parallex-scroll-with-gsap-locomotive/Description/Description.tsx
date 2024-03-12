import React, { ReactNode } from "react";

function AnimateText({ children }: { children: ReactNode }) {
  return <p className="m-0 relative">{children}</p>;
}

const Description = () => {
  const pharse = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse molestias nostrum pariatur omnis.Blanditiis facere maiores veritatis vero quidem.",
  ];
  return (
    <div className="relative z-10 mt-[35vh] uppercase text-white text-[3vw]">
      {pharse.map((pharse, index) => {
        return <AnimateText key={index}>{pharse}</AnimateText>;
      })}
    </div>
  );
};

export default Description;
