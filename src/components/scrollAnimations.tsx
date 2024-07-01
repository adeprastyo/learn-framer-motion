import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#dbffe4", "#8df0a6", "#52d974", "#2ebf52", "#039427"]
  );

  return (
    <div>
      <motion.div
        style={{
          //   scaleX: scrollYProgress,
          scaleX,
          transformOrigin: "left",
          //   background: "blue",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />

      <div className="max-w-[700px] m-auto p-[1.2rem]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum
          excepturi ratione quos, commodi tempore a iure, ea ex odio soluta
          expedita cupiditate quia accusamus nam! Id quis autem quos sint
          doloribus enim impedit? Nam tempore quis minus hic aut dolore aperiam
          magni cupiditate, illo excepturi dolor facere saepe dolores optio
          architecto quo labore? Aut reprehenderit eveniet sit voluptatibus
          iure, vel esse exercitationem deserunt, itaque voluptates deleniti
          corrupti eaque pariatur aliquid alias. Odit eos omnis architecto odio
          exercitationem enim tempore ipsum eum fugiat? Repellat, eveniet culpa.
          Sed, inventore saepe, qui voluptate at deserunt distinctio eligendi
          odio nulla aut repellat laborum.
        </p>
      </div>
    </div>
  );
}
