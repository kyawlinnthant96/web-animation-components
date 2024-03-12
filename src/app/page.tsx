"use client";

import DraggableLists from "@/components/draggable/DraggableLists";
import FollowMouseEffect from "@/components/pointer/FollowMouseEffect";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  return (
    <main className="w-full bg-slate-900 min-h-screen">
      {/* <FollowMouseEffect /> */}
      <DraggableLists />
    </main>
  );
}
