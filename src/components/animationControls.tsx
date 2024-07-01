import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
    // await controls.start({ rotate: "0deg", transition: { duration: 0 } });
    // controls.start("flip");
  };

  return (
    <div className="grid content-center h-dvh gap-[0.8rem]">
      <button
        onClick={handleClick}
        className="bg-indigo-700 text-white py-2 px-4 rounded-full"
      >
        Flip It!
      </button>
      <motion.div
        className="w-36 h-36 bg-black"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
}
