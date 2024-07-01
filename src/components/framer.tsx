import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Framer() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div className="w-1/4 h-2/5 flex-col justify-center items-center">
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className={"p-2 rounded-full mb-3 w-1/3"}
          animate={{ backgroundColor: isVisible ? "#93c5fd" : "#fca5a5" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          layout
        >
          {isVisible ? "show" : "hide"}
        </motion.button>
        <AnimatePresence mode="popLayout">
          {isVisible && (
            <motion.div
            initial={{ rotate: "0deg", scale: 0   }}
            animate={{ rotate: "360deg", scale: 1 }}
            exit={{ rotate: "0deg", scale: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="w-full h-full bg-black text-white flex items-center justify-center"
            >
              Learn framer motion
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
