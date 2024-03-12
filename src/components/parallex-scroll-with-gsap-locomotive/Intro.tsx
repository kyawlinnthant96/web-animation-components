import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Intro = () => {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
      },
    });
    timeline
      .from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);
  return (
    <div className="relative w-full flex justify-center">
      <div
        ref={backgroundImage}
        className="absolute w-full h-[140vh] brightness-[60%]"
      >
        <Image
          src={"/background.jpeg"}
          alt="background"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
      <div className="mt-[35vh] flex items-center justify-center">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="absolute w-[350px] h-[475px] brightness-[75%]"
        >
          <Image
            src="/intro.png"
            alt={"intro-png"}
            fill
            className="object-cover object-top"
            priority={true}
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="z-30 text-white text-[7vw] text-center text-nowrap  uppercase"
        >
          Smooth Scroll
        </h1>
      </div>
    </div>
  );
};

export default Intro;
