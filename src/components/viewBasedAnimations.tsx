import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view ->", isInView);
  }, [isInView]);

  return (
    <>
      <p className="text-center">View Based Animations</p>
      <div className="h-[150vh]" />
      <motion.div
        className="h-screen bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className="h-screen bg-red-500 transition-colors duration-1000"
      />
    </>
  );
}
