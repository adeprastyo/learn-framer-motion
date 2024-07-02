import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

export default function Framer2() {
  const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOne = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const paragraphTwo = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* FADE UP & FADE DOWN */}
        <motion.div
          variants={childrenVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          {/* FADE UP */}
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>

          {/* FADE DOWN */}
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>

        {/* KEYFRAMES */}
        <motion.div
          variants={childrenVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>

        {/* HOVER & TAP */}
        <motion.div
          variants={childrenVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-2"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-emerald-800 w-4/5 py-4 rounded-lg text-lg text-gray-100 font-light tracking-wide"
          >
            Subscribe
          </motion.button>
        </motion.div>

        {/* DRAG */}
        <motion.div
          variants={childrenVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{ top: -60, right: 60, bottom: 60, left: -60 }}
            dragTransition={{ bounceStiffness: 900, bounceDamping: 25 }}
          />
        </motion.div>

        {/* SCROLL PROGRESSION */}
        <motion.div
          variants={childrenVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>

        {/* SVG Animation */}
        <motion.div
          variants={childrenVariants}
          className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>

      {/* SCROLL */}
      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-4xl tracking-wide text-black text-center"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
        >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: paragraphOne }}
          className="text-black font-thin text-md w-2/3 mx-auto"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          quae ipsa quis expedita quam ipsam, nisi dolorem nemo quaerat,
          suscipit odit. Perspiciatis repellat animi ea accusamus suscipit
          explicabo, illo officia dolorum voluptate sint atque mollitia maiores
          iure corporis aut deserunt quasi doloribus laboriosam! Natus a, quo
          illum molestias aut earum!
        </motion.p>
        <motion.p
          style={{ translateX: paragraphTwo }}
          className="text-black font-thin text-md w-2/3 mx-auto"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          quae ipsa quis expedita quam ipsam, nisi dolorem nemo quaerat,
          suscipit odit. Perspiciatis repellat animi ea accusamus suscipit
          explicabo, illo officia dolorum voluptate sint atque mollitia maiores
          iure corporis aut deserunt quasi doloribus laboriosam! Natus a, quo
          illum molestias aut earum!
        </motion.p>
      </section>
    </div>
  );
}
