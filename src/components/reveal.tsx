import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  duration?: number;
}

export default function Reveal({
  children,
  width = "fit-content",
  duration,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{ hidden: { x: "-100vw" }, visible: { x: 0 } }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
