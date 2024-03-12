"use client";

import { useEffect } from "react";
import Intro from "@/components/parallex-scroll-with-gsap-locomotive/Intro";
import Description from "@/components/parallex-scroll-with-gsap-locomotive/Description/Description";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex flex-col gap-5">
      <Intro />
      <Description />
    </main>
  );
}
