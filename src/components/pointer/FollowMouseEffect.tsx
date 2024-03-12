import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const FollowMouseEffect = () => {
  const ref = useRef<HTMLDivElement>();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const handlePointerMove = ({
        clientX,
        clientY,
      }: {
        clientX: number;
        clientY: number;
      }) => {
        const element = ref.current!;
        const x = clientX - element.offsetLeft - element?.offsetWidth / 2;
        const y = clientY - element.offsetTop - element?.offsetHeight / 2;
        setCoordinates({ x, y });
      };
      window.addEventListener("pointermove", handlePointerMove);
      return () => window.addEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{
        x: coordinates.x,
        y: coordinates.y,
      }}
      transition={{
        type: "spring",
      }}
      className="w-10 h-10 rounded-full bg-white"
    />
  );
};

export default FollowMouseEffect;
