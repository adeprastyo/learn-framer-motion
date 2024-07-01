import { MotionConfig, motion } from "framer-motion";

export default function Gestures() {
  return (
    <div className="grid content-center h-dvh gap-[0.8rem]">
      <MotionConfig transition={{ duration: 0.1, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#1f158f" }}
          whileTap={{ scale: 1, rotate: "3.5deg" }}
          className="bg-indigo-700 text-white py-2 px-4 rounded-full"
        >
          Click me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1, rotate: "-3.5deg" }}
          className="bg-gray-700 text-white py-2 px-4 rounded-full"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
